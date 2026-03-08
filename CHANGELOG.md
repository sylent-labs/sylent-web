# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

No unreleased changes.

## [1.0.1] - 2026-03-08

### Changed

- Rearranged homepage section order from Hero > About > Services > Projects to Hero > Services > Projects > About.

## [1.0.0] - 2026-03-06

Initial production release of Sylent Web.

### Added

- **Hero section** with 3D React Three Fiber scene (floating cubes, parallax camera, bloom post-processing), gradient overlay, tagline, CTA buttons and scroll indicator.
- **About section** with three subsections:
    - **Team** with card grid bios for Van Keith (CEO), Bob (CTO), Jonathan, Blair, Harvey and Donna (CFO).
    - **Mission** with mission statement, supporting copy and capability pills.
    - **Vision** with vision statement and supporting copy.
- **Services section** on the homepage with 6 categories (Engineering, Cloud & Infrastructure, Product, Fintech & Commerce, AI & Automation, Talent) and 22 clickable service links.
- **22 individual service pages** at `/services/[slug]` with high-level overview, technical deep-dive, tech stack pills, related services and CTA. All statically generated at build time with SEO metadata.
- **Projects section** with project cards featuring 3D tilt effect, per-card shine highlight, section-level shine cursor and parallax background with blobs, grid and noise layers.
- **Header** with desktop nav, mobile hamburger menu, animated overlay with staggered menu items and tap-to-close backdrop.
- **Custom 3D cursor** that reacts to hover state in the hero scene.
- **Scroll-reveal animation system** using CSS transitions with `[data-reveal]` attributes, IntersectionObserver and 3D transform entrances (left/right).
- Shared `useRevealOnScroll` hook in `src/lib/useRevealOnScroll.ts`.
- Service data model in `src/lib/services.ts` with types, categories and lookup helpers.
- Services layout with shared Header for cross-page navigation (`/#section` format).
- 404 page for invalid service slugs.
- `CHANGELOG.md`.
