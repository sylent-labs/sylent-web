# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project does not yet follow semantic versioning. Changes are grouped by date.

## [Unreleased]

No unreleased changes.

## 2026-03-06

### Fixed

- Mobile menu "tap anywhere to close" not working on production mobile devices (Z Fold 4, iPhone 11 Pro). Backdrop was unreachable because the nav overlay covered it. Fixed by making nav `pointer-events-none` with `pointer-events-auto` on interactive children, and converting the backdrop to a button element. (`c2a13ce`, `0ed49fd`)
- Typo in About Us team bios. (`4303efa`)

### Changed

- About Us section: updated CEO bio with expanded experience details and publications. (`8981b16`)
- Formatted codebase with Prettier. (`08a367a`)

## 2026-03-04

### Added

- **Services section** on the homepage with 6 categories (Engineering, Cloud & Infrastructure, Product, Fintech & Commerce, AI & Automation, Talent) and 22 clickable service links. (`97e71dd`)
- **22 individual service pages** at `/services/[slug]` with high-level overview, technical deep-dive, tech stack pills, related services and CTA. All statically generated at build time with SEO metadata.
- **Services layout** with shared Header for service pages.
- **404 page** for invalid service slugs.
- Extracted `useRevealOnScroll` hook into shared `src/lib/useRevealOnScroll.ts`.
- Service data model in `src/lib/services.ts` with types, categories, lookup helpers.
- **About Us team section** with bios for Van Keith (CEO), Bob (CTO), Jonathan, Blair, Harvey and Donna (CFO). Displayed as a card grid with reveal animations. (`c6f9bee`)

### Changed

- Header nav links updated from `#section` to `/#section` format for cross-page navigation from service pages back to homepage.

## 2026-03-02

### Added

- **Mission subsection** inside About with mission statement, supporting copy and capability pills. (`7438573`)
- **Vision subsection** inside About with vision statement and supporting copy. (`4452ccb`)
- **Hamburger menu** on mobile with animated overlay, staggered menu items, close button and "tap anywhere to close" hint. (`34a333e`)
- Initial site launch with Hero section (3D R3F scene, floating cubes, parallax camera), Projects section (project cards with tilt effect, shine cursor, reveal animations) and Header with desktop nav. (`0a5f187`)

### Fixed

- Custom cursor visibility restored while keeping parallax camera effect in the 3D scene. (`9477174`)

### Changed

- Consolidated standalone Mission and Vision pages into subsections within a single About section. (`c41160e`)
- Updated hero tagline and subtitle copy to align with mission and vision. (`c28e20f`)

## 2025-12-28

### Added

- Project initialized with README. (`cdd43d8`)
