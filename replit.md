# Lollo Rosso Restaurant Website

## Overview

This is a website for Lollo Rosso, an Asian fusion restaurant chain with multiple locations across India (Bodakdev/Ahmedabad, Baroda, SVP Airport, and Adani Shantigram). The website features a premium, visually-rich design emphasizing food imagery, with sections for about, table reservations, locations, testimonials, and services. The site includes an integrated reservation system that allows visitors to book tables at any of the four locations through embedded TinyURL links.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing
- Multi-route architecture: Home page (/) and reservation pages (/reserve/:location) for embedded booking experiences

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations (dialogs, dropdowns, tabs, etc.)
- shadcn/ui component library built on top of Radix UI with consistent styling
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes with persistent user preference

**State Management**
- React Query (@tanstack/react-query) for server state management and data fetching
- Local component state with React hooks for UI interactions
- Theme context provider for global theme state

**Media Handling**
- Static assets stored in `attached_assets/` directory aliased as `@assets`
- Large media files (videos) served from `client/public/` folder which is copied to `dist/public/` during production builds
- Hero video stored in `client/public/videos/` for optimal delivery
- **IMPORTANT**: Hero video file size should be under 10MB for optimal web performance. Current video is 43MB and should be compressed
- Images imported as modules for optimal bundling and caching
- Swiper.js for carousel/slider functionality (menu pages, testimonials)

**Design System**
- Custom color palette with HSL values for light/dark mode variants
- Typography: Playfair Display (serif, headings) + Inter/DM Sans (sans-serif, body)
- Consistent spacing scale using Tailwind's default units
- Elevation system with hover/active states for interactive elements
- Premium aesthetic blending modern minimalism with Asian design elements

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Development mode: Vite middleware integration for HMR
- Production mode: Serves pre-built static files from `dist/public`
- Custom logging middleware for API request tracking

**Database Layer**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema defined in `shared/schema.ts` for type-safe database operations
- Currently implements basic user table structure (extensible for future features)
- Migration system via Drizzle Kit

**Storage Abstraction**
- Interface-based storage pattern (`IStorage`) allowing multiple implementations
- In-memory storage (`MemStorage`) for development/testing
- Designed to be swapped with database-backed storage in production

**API Structure**
- RESTful API prefix: `/api/*`
- Routes registered in `server/routes.ts`
- Centralized error handling middleware
- JSON request/response format

### Content Management

**Reservation System**
- Configuration-based restaurant locations (`client/src/config/reservations.ts`)
- Four location tiles displayed on homepage with thumbnail images
- Each location can have a unique TinyURL for reservation bookings
- Reservation pages (/reserve/:location) display embedded iframe with Navigation bar
- Secure iframe implementation with restricted sandbox permissions
- Buttons are disabled until TinyURL is configured for each location

**Static Content**
- Multi-location support with embedded Google Maps
- Awards section with trophy images and descriptions
- Services modal with detailed offerings (catering, events, workshops)
- Menu pages hidden from main navigation (Bodakdev menu accessible via direct route)

### External Dependencies

**Third-Party UI Libraries**
- Radix UI component primitives (18+ packages for dialogs, dropdowns, tooltips, etc.)
- Swiper.js for touch-enabled carousels
- Embla Carousel React for alternative carousel implementation
- Lucide React for icon system
- React Icons for social media icons

**Database & ORM**
- Neon Database serverless PostgreSQL adapter (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries
- Drizzle Zod for schema validation
- connect-pg-simple for PostgreSQL session storage (configured but not actively used)

**Development Tools**
- Replit-specific plugins for development environment integration
- TSX for running TypeScript files directly in development
- ESBuild for server-side bundling in production

**Styling & Forms**
- class-variance-authority for component variant management
- clsx + tailwind-merge for className composition
- React Hook Form + Zod resolvers for form validation (configured but not actively used)
- date-fns for date formatting utilities

**Media & Interactions**
- cmdk for command palette functionality
- Video.js or native HTML5 video for media playback
- react-day-picker for calendar/date selection (configured but not actively used)

**Map Integration**
- Google Maps embedded iframes for location displays
- Direct links to Google Maps for mobile navigation
- Location-specific map URLs configured per restaurant

**Analytics & Monitoring**
- No analytics configured (placeholder for future integration)
- Console-based logging in development
- Error tracking through Express error middleware