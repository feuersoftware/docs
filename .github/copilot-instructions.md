# Copilot Instructions for Feuersoftware Docs

## Tech Stack

This project uses [Docus](https://docus.dev) (built on Nuxt Content) to generate a documentation site.

## Content File Structure

All documentation pages are Markdown files in `content/`. Each file **must** follow this structure:

```markdown
---
title: Page Title
description: A short description
---

<!-- Optional: source reference comment goes AFTER frontmatter, never before -->
<!--
Source: https://example.com/original-page/
-->

Content starts here...
```

### Critical Rules

1. **Frontmatter must be the very first thing in the file.** Never place HTML comments, blank lines, or any other content before the opening `---`. Docus/Nuxt Content will fail to parse the frontmatter otherwise, which breaks navigation and page rendering.

2. **Do not add a `# Heading` that duplicates the frontmatter `title`.** Docus automatically renders the `title` from frontmatter as the page heading. Adding a `# Heading` in the body causes the title to appear twice.

3. **Images go directly after the frontmatter** (and optional source comment), before the body text. Follow the existing pattern:
   ```markdown
   ![EinsatzMonitor FeatureName](/images/einsatzmonitor/EinsatzMonitor_FeatureName.png)
   ```

4. **Store images in `public/images/`**, organized by product (e.g., `public/images/einsatzmonitor/`).

## Locale

The UI language is set to German (`locale: 'de'` in `app/app.config.ts`). All user-facing content should be written in German.
