# CMS Integration

## Decap CMS (Recommended)

DeStatic includes pre-configured Decap CMS integration.

### Setup

1. Configure your Git Gateway (Netlify or Cloudflare Pages).
2. The CMS is available at `your-site.com/admin/`.
3. Authenticate with your Git provider.

### Collections

The CMS manages:
- **Homepage** — all section content (hero, vision, product, roadmap, traction, team)
- **Blog** — create and edit posts
- **Site Configuration** — brand name, social links, contact info

### Local Development

To run the CMS locally with a local backend proxy, add to your `config/_default/hugo.yaml`:

```yaml
security:
  enableLocalFiles: true
```

## TinaCMS (Alternative)

To use TinaCMS instead:

1. Install Tina: `npx @tinacms/cli@latest init`
2. Configure in `tina/config.ts`.
3. Run `npm run dev` with Tina's dev server.
