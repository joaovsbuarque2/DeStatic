# Installation

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.120.0+
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/staticprime.git my-site
cd my-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Your site will be available at `http://localhost:1313`.

## Project Structure

```
staticprime/
├── assets/          # CSS and JavaScript
│   ├── css/         # Stylesheets
│   └── js/          # JavaScript
├── content/         # Markdown content
│   ├── blog/        # Blog posts
│   └── _index.md    # Homepage
├── config/          # Hugo configuration
│   └── _default/    # Default config files
├── data/            # Structured data (YAML)
│   ├── design-system/  # Design tokens
│   └── homepage.yaml   # Homepage content
├── i18n/            # Internationalization
├── layouts/         # Hugo templates
│   ├── _default/    # Base layouts
│   ├── partials/    # Reusable components
│   └── shortcodes/  # Shortcodes
├── static/          # Static assets
│   ├── favicon/     # Favicon files
│   └── fonts/       # Local fonts
└── docs/            # Documentation
```
