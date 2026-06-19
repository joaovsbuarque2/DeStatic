# Performance

DeStatic is optimized for:

- **Lighthouse ≥ 95/100**
- **CLS < 0.1**
- **LCP < 2s**
- **Accessibility 100/100**
- **SEO 100/100**
- **Best Practices 100/100**

## Built-in Optimizations

### Images
- Lazy loading via `loading="lazy"`
- WebP/AVIF support (serve next-gen formats)
- Responsive images with `srcset`

### Fonts
- `font-display: swap` to prevent invisible text
- Preloaded critical fonts
- Subset Latin character sets

### CSS
- Minified and fingerprinted
- Critical CSS inlined (above-fold)
- PostCSS autoprefixing + cssnano compression

### JavaScript
- Deferred loading (`defer` attribute)
- Minimal footprint (~3KB gzipped)
- No third-party render-blocking scripts

### HTML
- Semantic HTML5
- Proper heading hierarchy
- Minimal DOM depth

## Testing

```bash
# Build production version
npm run build:prod

# Test with Lighthouse
npx lighthouse http://localhost:1313 --view

# Check page weight
npx size-limit
```
