# Configuration

## Site Parameters

All site configuration lives in `config/_default/params.yaml`.

```yaml
brand:
  name: "Your Brand"
  tagline: "Your tagline here"
  description: "Your site description for SEO"
  logo: "/images/logo.svg"

defaultTheme: "system"  # "light" | "dark" | "system"
allowThemeToggle: true
```

## Colors

Edit theme colors in `data/design-system/colors.yaml`.

Dark and light mode tokens are fully separated:

```yaml
light:
  bg-primary: "#ffffff"
  text-primary: "#0c0a09"
  accent-500: "#8b5cf6"

dark:
  bg-primary: "#0c0a09"
  text-primary: "#fafaf9"
  accent-500: "#8b5cf6"
```

## Fonts

Edit typography in `data/design-system/typography.yaml`.

Default font stack:
- Display: **Outfit** (headings)
- Body: **Satoshi** (paragraphs)
- Mono: **JetBrains Mono** (code)

To change fonts, update both the YAML config and the `@font-face` declarations in `layouts/partials/head/fonts.html`.

## Homepage Content

All homepage text, stats, team, and roadmap data lives in `data/homepage.yaml`. Edit this file to customize all section content without touching templates.
