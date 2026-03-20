# Architecture & Folder Structure

The project follows a component-based architecture with centralized data management, making it easy to maintain and update.

## Folder Structure

- `src/components/`: Contains all UI components (Hero, About, Contact, etc.).
- `src/data/`: Contains `portfolioData.ts`, the "source of truth" for all content.
- `src/assets/`: Static assets like images and fonts.
- `public/`: Publicly accessible files (favicons, sitemap, manifest).
- `dist/`: The production-ready build output.

## Data-Driven Design

All portfolio content is decoupled from the UI logic. By editing `src/data/portfolioData.ts`, you can update names, job titles, experiences, and skills without touching any JSX code.

```typescript
// Example from portfolioData.ts
export const portfolioData = {
    personal: {
        name: "Pradeep Kumar",
        surname: "S",
        title: "Junior Software Developer",
        // ...
    },
    // ...
};
```

## State Management

The application uses standard React `useState` and `useEffect` hooks for local UI states:
- **Navigation State**: Tracks the currently active tab (Hero, About, etc.).
- **Animation State**: Triggers transition effects, such as the zoom-in portal effect during navigation.

## Navigation System

The `Layout.tsx` component manages the global structure, while `Navbar.tsx` and `Sidebar.tsx` provide different navigation modes. The `Hero.tsx` section acts as an interactive landing page that initiates the main portfolio sequence.
