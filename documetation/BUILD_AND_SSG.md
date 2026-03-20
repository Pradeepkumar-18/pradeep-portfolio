# Build Process & Custom SSG Setup

The project implements a optimized build pipeline to maximize SEO and accessibility benefits, specifically designed for a portfolio structure.

## Build Commands

- `npm run build`: Standard Vite build with TypeScript transpilation.
- `npm run build:ssg`: Custom build process that adds high-performance SEO and accessibility enhancements via `prerender.js`.

## Custom SSG Simulation

The `prerender.js` script handles post-build modifications:
1.  **Template Generation**: Pre-configures the `index.html` template.
2.  **SEO Enrichment**: Injects canonical tags and structured data dynamically.
3.  **Accessibility Check**: Ensures high-contrast and screen-reader compatibility.
4.  **Static Logic**: Simulates a static site generation (SSG) process without the overhead of complex SSR frameworks.

## SEO Roadmap

The project is already optimized with:
- **Indexability**: Standard React build with meta tags.
- **Microdata Integration**: JSON-LD Person and Organization data.
- **Social Graph Optimization**: Open Graph (Facebook) and Twitter cards.

### JSON-LD Example

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pradeep Kumar S",
  "jobTitle": "Junior Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Skillmine Technology"
  }
}
```
