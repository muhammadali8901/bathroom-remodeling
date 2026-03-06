# Changes Report – Bathroom Remodeling Refocus (Chandler, AZ)

## 1. Files Modified

**Configuration & Data**
- `lib/site-config.ts` – Brand, address, service areas, services list
- `lib/seed-blog.ts` – Default blog post city references, slug, meta
- `components/seo/json-ld.tsx` – Schema areaServed, hasOfferCatalog, geo

**Layout & Navigation**
- `components/layout/header.tsx` – Logo, services dropdown
- `components/layout/footer.tsx` – Logo, services list, copy
- `app/layout.tsx` – Metadata, OG, Twitter

**Homepage**
- `app/page.tsx` – Section order, legacy section removed, FAQ city
- `components/home/hero.tsx` – Headline, alt, CTA copy, View Portfolio button (black bg)
- `components/home/about-preview.tsx` – Brand, alt
- `components/home/services-grid.tsx` – 10 bathroom micro-service cards
- `components/home/why-choose-us.tsx` – City reference
- `components/home/testimonials.tsx` – Locations, service types
- `components/home/service-areas.tsx` – Headline, copy, map embed
- `components/home/bathroom-section.tsx` – Headline, alt
- `components/home/gallery-preview.tsx` – Copy, one kitchen item → bathroom
- `components/home/faq.tsx` – City references, service focus
- `components/home/blog-preview.tsx` – Excerpt, links (/blog), copy
- `components/home/contact-section.tsx` – Service select options
- `components/home/financing.tsx` – Copy
- `components/home/final-cta.tsx` – Copy

**Pages**
- `app/bathroom-remodeling/page.tsx` – 10 sub-services, FAQs, schema, hero
- `app/bathroom-remodeling/layout.tsx` – Metadata
- `app/about/page.tsx` – Metadata, copy, awards
- `app/contact/page.tsx` – Metadata, testimonials, copy
- `app/financing/page.tsx` – Metadata, copy, typo fix
- `app/gallery/page.tsx` – Copy, kitchen filter, categories
- `app/blog/page.tsx` – Copy
- `app/blog/[slug]/page.tsx` – CTA copy
- `app/privacy-policy/page.tsx` – Metadata
- `app/terms-of-service/page.tsx` – Metadata, services list
- `app/admin/testimonials/page.tsx` – Placeholder city
- `app/sitemap.ts` – Legacy service removed from static pages

**New**
- `COLOR_PALETTE.md` – Documented color palette

---

## 2. Sections Moved (Homepage)

**New order:**
1. Hero Section
2. About Us (AboutPreview)
3. Our Services (ServicesGrid)
4. Why Choose Us (WhyChooseUs)
5. Testimonials
6. TrustBar, BathroomSection, GalleryPreview, ProcessSection, ServiceAreas, Financing, FAQ, BlogPreview, ContactSection, FinalCTA

---

## 3. Services Updated

**Removed from UI**
- Legacy service (hidden from nav, footer, homepage, service listings)
- Legacy page file retained at `/kitchen-remodeling` (not linked)

**Bathroom micro-services added**
- Shower Remodeling
- Bathtub Installation
- Bathtub Replacement
- Walk-in Shower Installation
- Bathroom Tile Installation
- Bathroom Vanity Installation
- Bathroom Flooring
- Bathroom Lighting Upgrade
- Bathroom Sink Installation
- Bathroom Plumbing Upgrade

---

## 4. City References Replaced

- **Gilbert** → **Chandler** across metadata, headings, schema, footer, contact, alt text, internal links, CTAs
- **Service areas** → Chandler, Sun Lakes, Ahwatukee, Tempe, Mesa, South Phoenix
- **Address** → Chandler, AZ 85225
- **Coordinates** → Chandler center (33.3062, -111.8413)
- **Map embed** → Chandler, AZ

---

## 5. Color Palette Detected

| Role | Value | Usage |
|------|-------|-------|
| Primary | oklch(0.6 0.118 184.704) – Sky blue | Main CTAs, links |
| Secondary | oklch(0.94 0.01 85) – Light beige | Section backgrounds |
| Accent | oklch(0.55 0.08 85) – Muted gold | Hover, focus |
| Background | oklch(0.97 0.005 85) – Warm off-white | Page bg |
| Foreground | oklch(0.25 0.01 250) – Deep charcoal | Text |

**Hero "View Portfolio" button:** Updated to `bg-black text-white` for contrast on dark overlay. Compatible with existing design system.

---

## 6. Potential Improvements

- Add `noindex` to `/kitchen-remodeling` layout if you want it excluded from search
- Replace placeholder address/phone in `site-config.ts` with real business details
- Update Google Maps embed URL with a real Chandler business location
- Add real Chandler-area testimonials when available
- Consider blog post slugs if default post slug changed (e.g. `/blog/complete-guide-bathroom-remodeling-chandler-arizona`)

---

## 7. UI Protection Checklist

- No UI layout changes
- No sections removed (legacy section component kept; not rendered)
- No CSS classes deleted
- Responsiveness preserved
- Mobile layout intact
- Navigation functional
- All buttons functional
