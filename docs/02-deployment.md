# Deployment

## Building for Production

```bash
npm run build
```

Output will be in the `public/` directory.

## Deploy to Cloudflare Pages

1. Connect your Git repository to Cloudflare Pages.
2. Build command: `npm run build`
3. Build output: `public`
4. Environment variables: `HUGO_VERSION=0.120.0`

## Deploy to Netlify

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.120.0"
  HUGO_EXTENDED = "true"
```

Or use the Netlify UI:
1. Connect your Git repository.
2. Build command: `npm run build`
3. Publish directory: `public`

## Deploy to Vercel

Create `vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "framework": null
}
```

Or use the Vercel UI:
1. Connect your Git repository.
2. Framework: Other
3. Build command: `npm run build`
4. Output directory: `public`
