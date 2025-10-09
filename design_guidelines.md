# Lollo Rosso Restaurant Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium hospitality and culinary experiences (Airbnb's visual richness + high-end restaurant aesthetics). The design emphasizes immersive food photography, elegant typography, and seamless navigation that reflects the restaurant's fusion of Asian cuisines.

## Core Design Principles
- **Visual-First Experience**: Food imagery drives engagement and appetite appeal
- **Cultural Fusion**: Blend modern minimalism with subtle Asian design elements
- **Premium Yet Approachable**: Sophisticated without feeling intimidating
- **Content Density**: Rich, multi-layered sections that showcase variety

## Color Palette

**Dark Mode (Primary)**
- Background: 15 8% 12% (Deep charcoal with slight warmth)
- Surface: 15 8% 18% (Elevated elements)
- Text Primary: 40 10% 95% (Warm off-white)
- Text Secondary: 40 8% 70% (Muted warm gray)
- Accent Primary: 145 70% 42% (Sophisticated sage green - fresh, natural)
- Accent Secondary: 25 85% 55% (Warm terracotta for CTAs)

**Light Mode**
- Background: 40 15% 98% (Creamy white)
- Surface: 40 10% 100% (Pure white cards)
- Text Primary: 15 12% 15% (Rich dark brown)
- Accent Primary: 145 65% 38% (Deeper sage)
- Accent Secondary: 25 80% 50% (Vibrant terracotta)

## Typography
- **Headings**: 'Playfair Display' (serif, elegant) - 700 weight for impact
- **Body**: 'Inter' (sans-serif, clean) - 400/500/600 weights
- **Scale**: Hero (5xl-7xl), Section Titles (3xl-4xl), Body (base-lg)

## Spacing System
**Tailwind units**: 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-6 for cards
- Container: max-w-7xl with px-6 padding

## Layout Structure

**1. Hero Section** (90vh)
- Full-bleed video or carousel of signature dishes
- Centered branding with restaurant name in Playfair Display
- Subtle gradient overlay (from bottom) for text readability
- Primary CTA: "View Menu" / Secondary: "Find Location" with blurred backgrounds

**2. Signature Dishes Showcase** (Multi-column)
- 3-column grid (lg), 2-column (md), 1-column (mobile)
- Category tabs: Bowls | Sushi | Dimsums (sticky on scroll)
- Each card: Large image (16:9), dish name, short description, price
- Video thumbnails with play overlay for featured items
- Hover effect: Gentle scale (1.02) + shadow elevation

**3. Interactive Menu Gallery**
- Masonry grid layout (Pinterest-style) for visual variety
- Filter buttons for cuisine type
- Lightbox for image/video viewing with swipe navigation
- Lazy loading for performance

**4. Awards & Recognition**
- 3-column grid for awards (horizontal cards on mobile)
- Award icon/badge + Year + Title + Issuing organization
- Subtle metallic accents (gold: 45 90% 55% for premium feel)
- Background pattern: Subtle geometric Asian motifs

**5. Locations Section** (2x2 Grid → Stack on mobile)
- Card per outlet with: Name, Address, Phone, Hours, Map preview
- "Get Directions" CTA per location
- Hover: Reveal full embedded map
- Contact icons using Heroicons

**6. Footer**
- 4-column layout: Brand + Quick Links + Contact + Social
- Instagram feed preview (4 recent posts if API available, else placeholder)
- Newsletter signup with email input
- Opening hours summary

## Component Specifications

**Navigation**
- Fixed on scroll with backdrop blur
- Logo left, menu center, "Order Now" CTA right
- Hamburger menu (mobile) with slide-in drawer

**Cards (Dish/Location)**
- Rounded corners (rounded-2xl)
- Subtle shadow (shadow-lg on hover)
- Image aspect ratio: 16:9 (dishes), 4:3 (locations)
- Padding: p-6 for content area

**Buttons**
- Primary: Terracotta background, white text, rounded-full
- Secondary: Outline with blur background on images
- Hover: Lift effect (translateY -1px) + shadow

**Video Elements**
- Autoplay muted for hero (if used)
- Play button overlay for dish videos (Heroicons play-circle)
- Controls appear on hover/tap

## Images Required

**Hero Section**: 
- Full-width hero image OR video showcasing restaurant ambiance with featured dishes in foreground (sushi platter, colorful bowls, steaming dimsums)

**Signature Dishes**: 
- 9-12 high-quality dish photos (3-4 per category)
- 2-3 video clips showing dish preparation or presentation
- Images should be vibrant, well-lit, close-up food photography

**Locations**: 
- Storefront photo for each outlet (4 images)
- Map thumbnails (can use embedded Google Maps)

**Awards**: 
- Award badge/certificate images (3)
- Optional: Newspaper clippings or award ceremony photos

**Footer/Social**: 
- Instagram icon + placeholder for feed integration

## Interactions & Animations
- **Scroll-triggered**: Fade-in for sections (subtle, 200ms)
- **Image hover**: Slight zoom (scale 1.05) on dish images
- **Navigation**: Smooth scroll to sections
- **Filter transitions**: Fade + slide for menu items
- NO distracting parallax or excessive motion

## Accessibility
- High contrast ratios (WCAG AAA where possible)
- Alt text for all food images (descriptive)
- Keyboard navigation for filters and galleries
- Focus indicators on all interactive elements
- Consistent dark mode across all components including forms

This design creates an immersive, appetite-inducing experience that showcases Lollo Rosso's culinary excellence while maintaining usability and brand sophistication.