# Build Process & Custom SSG Setup

The project implements a optimized build pipeline to maximize SEO and accessibility benefits, specifically designed for a portfolio structure.

## Build Commands

- `npm run build`: Standard Vite build with TypeScript transpilation.
- `npm run build:ssg`: Custom build process that adds high-performance SEO and accessibility enhancements via `prerender.js`.

## Custom SSG Implementation

The project uses a high-performance pre-rendering strategy:
1.  **SSR Build**: `vite build --ssr src/entry-server.tsx` creates a Node-compatible version of the app.
2.  **HTML Generation**: `prerender.js` imports the SSR build and uses `react-dom/server` to render the app to a string.
3.  **Injections**: The generated HTML is injected into the production `dist/index.html`.
4.  **Result**: Initial requests (like `curl` or search engine bots) receive the full content immediately, ensuring 100% indexability and better social sharing.

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
