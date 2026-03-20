# Components Guide

A breakdown of the primary UI components and their roles in the portfolio dashboard.

## core Components

### [Hero.tsx](file:///c:/Users/Pradeep%20Kumar%20S/Downloads/Project/Portfolio/src/components/Hero.tsx)
The landing page of the portfolio. Features:
- **Interactive Sequence**: Scroll or button-click to initiate the dashboard sequence.
- **Portal Transition**: A high-impact "zoom-in" effect using Framer Motion to transition into the next section.
- **Responsive Animations**: Adapts scale and position for different screen sizes.

### [Layout.tsx](file:///c:/Users/Pradeep%20Kumar%20S/Downloads/Project/Portfolio/src/components/Layout.tsx)
The main shell that wraps the dashboard content. It manages:
- **Grid System**: Orchestrates the placement of the Sidebar and the Main Content area.
- **Navigation Overlay**: Handles transitions between different dashboard modes.

### [Sidebar.tsx](file:///c:/Users/Pradeep%20Kumar%20S/Downloads/Project/Portfolio/src/components/Sidebar.tsx) & [Navbar.tsx](file:///c:/Users/Pradeep%20Kumar%20S/Downloads/Project/Portfolio/src/components/Navbar.tsx)
Provides a consistent navigation interface across devices:
- **Tabbed System**: Quick access to About, Skills, Experience, and Education.
- **Interactive Hover States**: Subtle animations to provide visual feedback.

### Content Sections
- **About.tsx**: Detailed introduction with high readability.
- **Skills.tsx**: Categorized technical expertise.
- **Experience.tsx**: Work history with chronological layout.
- **Education.tsx**: Academic background.
- **Contact.tsx**: Direct email links and social media integration.
- **Stats.tsx**: Quantifiable metrics and key performance indicators.
