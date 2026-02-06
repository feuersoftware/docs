# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Build arguments for Nuxt Studio OAuth (required at build time)
ARG STUDIO_GITHUB_CLIENT_ID
ARG STUDIO_GITHUB_CLIENT_SECRET

# Set as environment variables for the build
ENV STUDIO_GITHUB_CLIENT_ID=$STUDIO_GITHUB_CLIENT_ID
ENV STUDIO_GITHUB_CLIENT_SECRET=$STUDIO_GITHUB_CLIENT_SECRET

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

# Copy built application
COPY --from=builder /app/.output /app/.output

# Set ownership
RUN chown -R nuxtjs:nodejs /app

USER nuxtjs

# Expose port
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/server/index.mjs"]
