# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

3HPhysio website - a bilingual (Dutch/English) physiotherapy business website for horses, dogs, and humans, built with Eleventy and deployed on Netlify.

## Build Commands

```bash
npm run build    # Production build (parallel: eleventy + sass)
npm start        # Development server with hot reload (cleans public/, runs eleventy + sass watchers + CMS proxy)
```

Individual commands:
- `npm run build:eleventy` - Build Eleventy only
- `npm run build:sass` - Compile SASS only
- `npm run watch:cms` - Run Netlify CMS proxy server for local content editing

Development server runs at http://localhost:8080/

## Architecture

### Eleventy Configuration
- **Input**: `src/` → **Output**: `public/`
- Template engine: Nunjucks (`.njk`)
- Data directory: `src/_data/` (client.json for site-wide settings)
- Includes: `src/_includes/`

### Bilingual Structure
- Dutch (default): `/`, `/about/`, `/horse/`, `/hound/`, `/human/`, `/contact/`, `/prices/`
- English: `/en/`, `/en/about/`, `/en/horse/`, etc.
- Language detection via `page.url` containing `/en`
- Separate component files for each language: `header.html`/`header-en.html`, `footer.html`/`footer-en.html`, `cta.html`/`cta-en.html`
- Front matter uses `lang: nl` or `lang: en`

### Template Inheritance
- `src/_includes/layouts/base.html` - Base template with head, header/footer logic, schema markup
- Pages extend base using `{% extends "layouts/base.html" %}` with `{% block head %}` and `{% block body %}`

### Key Directories
- `src/content/pages/` - Dutch page content
- `src/content/pages/en/` - English page content
- `src/assets/sass/` - SCSS files (compiled to `public/assets/css/`)
- `src/assets/images/` - Image assets
- `src/admin/` - Netlify CMS configuration

### Styling
Each page has a dedicated SCSS file (`index.scss`, `about.scss`, `horse.scss`, etc.) linked in that page's `{% block head %}`.

### SEO/Schema
- Schema markup in `src/_includes/components/schema.html` and `schema-service.html`
- Hreflang tags auto-generated in base.html for NL/EN alternate URLs
- Google Analytics configured in base template

## Deployment

Push to `main` branch triggers automatic Netlify deployment.
