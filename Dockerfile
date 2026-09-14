# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (cached unless package.json changes)
RUN npm install

# Copy source files
COPY . .

# Build arguments for Nuxt Studio OAuth (required at build time)
# Placed after npm ci to not invalidate dependency cache
ARG STUDIO_GITHUB_CLIENT_ID
ARG STUDIO_GITHUB_CLIENT_SECRET
ENV STUDIO_GITHUB_CLIENT_ID=$STUDIO_GITHUB_CLIENT_ID
ENV STUDIO_GITHUB_CLIENT_SECRET=$STUDIO_GITHUB_CLIENT_SECRET


# Build the application
RUN npm run build

# Production stage
FROM node:24-alpine AS runner

WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

# Install a static file server for the prerendered site
RUN npm install -g serve@14.2.6

# Copy built application
COPY --from=builder /app/.output/public /app/public

# Set ownership
RUN chown -R nuxtjs:nodejs /app

USER nuxtjs

# Expose port
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Start the application
CMD ["serve", "public", "-l", "3000"]
