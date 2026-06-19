# SEO Guide

## Built-in Features

### Meta Tags
- Open Graph (og:title, og:description, og:image, og:type)
- Twitter Cards (summary_large_image)
- Canonical URLs
- Alternate language tags (hreflang)

### Schema.org JSON-LD
- Organization schema
- Website schema
- Article schema (blog posts)
- Person schema
- FAQ schema

### Technical SEO
- Auto-generated `sitemap.xml`
- `robots.txt`
- Semantic HTML structure
- Proper heading hierarchy (h1 → h4)
- Alt text on all images

## Customization

### OG Image
Replace `static/images/og-default.jpg` with your brand's 1200×630px image.

### Social Profiles
Update in `config/_default/params.yaml`:

```yaml
seo:
  twitterSite: "@yourhandle"
  ogImage: "/images/og-default.jpg"

schema:
  organization:
    sameAs:
      - "https://x.com/yourhandle"
      - "https://github.com/yourorg"
```

### Page-Level SEO

Each page/markdown file supports:

```yaml
---
title: "Your Page Title"
description: "Meta description for search results"
date: 2025-01-01
---
```
