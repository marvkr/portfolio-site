# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based restaurant template designed for high-end restaurants (sushi/omakase, Michelin star, steakhouse, Asian cuisine). The project uses Astro with React components, TypeScript, Tailwind CSS, and shadcn/ui components for a modern, responsive restaurant website.

## Common Development Commands

### Development
```bash
npm run dev          # Start development server
npm start           # Alternative start command (same as dev)
```

### Build & Deployment
```bash
npm run build       # Build for production (includes type checking)
npm run preview     # Preview production build locally
```

### Type Checking
```bash
astro check         # Run Astro's built-in type checker
```

## Architecture & Key Patterns

### Framework Stack
- **Astro 4.x**: Main framework with server-side rendering
- **React 18**: For interactive components (prefixed with `client:load`)
- **TypeScript**: Strict configuration with path aliases (`@/*` → `./src/*`)
- **Tailwind CSS**: Utility-first styling with custom theme
- **Netlify Functions**: Deployment target with edge middleware

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (button, navigation-menu, etc.)
│   ├── MainNavigationMenu.tsx
│   ├── HamburgerMenu.tsx
│   └── ...
├── config/             # Configuration files
│   └── food-menu.ts    # Menu data structure and content
├── layouts/            # Astro layout components
│   └── Layout.astro    # Main layout with dark mode logic
├── lib/                # Utilities
│   └── utils.ts        # cn() utility for className merging
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   ├── menu.astro      # Menu page
│   └── about.astro     # About page
└── styles/
    └── globals.css     # Global styles with CSS variables
```

### Key Design Patterns

1. **Theme System**: CSS variables in `globals.css` support light/dark modes with custom restaurant theming
2. **Menu Data**: Centralized in `src/config/food-menu.ts` with TypeScript interfaces for `Dish` and `MenuType`
3. **Component Hydration**: React components use `client:load` directive for interactivity
4. **Font Loading**: Custom "Juana" font family loaded via CSS with multiple weights
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Styling Approach
- Uses shadcn/ui design system with custom restaurant color palette
- CSS variables for consistent theming (`--primary`, `--background`, etc.)
- Custom background images for menu sections (light/dark variants)
- Tailwind configured with custom font families and extended color system

### Dark Mode Implementation
- Handled in `Layout.astro` with inline script for FOUC prevention
- Persists theme preference in localStorage
- Supports system preference detection
- Works with Astro view transitions

## Important Files to Understand

- `src/layouts/Layout.astro`: Main layout with navigation and theme logic
- `src/config/food-menu.ts`: Menu content and data structure
- `src/components/MainNavigationMenu.tsx`: Primary navigation component
- `tailwind.config.mjs`: Custom theme configuration
- `astro.config.mjs`: Astro configuration with React and Netlify setup

## Development Notes

- All interactive components require `client:load` directive
- Menu content should be updated in `src/config/food-menu.ts`
- Images are stored in `public/images/` and referenced with absolute paths
- Font files are in `public/fonts/` with extensive weight support
- The build process includes automatic type checking via `astro check`