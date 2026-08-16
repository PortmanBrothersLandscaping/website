# Portman Brothers — Website Plan (Code Card)

*Single-page landscaping business site. Built on the existing Next.js scaffold in your local `Portman_Brothers` folder, deployed via GitHub → Netlify.*

---

## Reference site deconstruction: Peek Lawn Care LLC

Structure, top to bottom:

1. Header/Nav — logo, "Home", "Client Login", phone number, recurring "Get an Estimate" button
2. Hero — full-width lawn photo, headline ("Your reliable partner for exceptional lawn care"), CTA button
3. Specialties — quick-glance icon row of top services
4. Services — fuller list: Aeration, Fertilization, Weed Control, Firewood Sales, Hedge Trimming, Tree Trimming & Removal, Landscaping, Outdoor Services, Lawn Mowing, Mulching, Leaf Removal
5. Reviews — Google 5.0 badge + 3 pulled testimonials
6. About — team photo (orange uniforms) with a short caption, no long narrative
7. Estimate/Contact form — embedded quote-request form (they use Jobber, a lawn-care CRM)
8. Footer — business name, contact block (phone/email/address), quick links, "Powered by Jobber"

Visual style: bright, well-lit outdoor photography doing most of the work; clean modern layout; green/natural palette; trust built through review badges rather than heavy copy.

---

## Adapted plan for Portman Brothers (one page, anchor-linked sections)

1. **Header/Nav** — logo, anchor links (Services / Gallery / About / Contact), phone number, sticky "Get a Free Quote" button, and a "Pay Invoice" button linking out to QuickBooks (opens in a new tab — QuickBooks doesn't allow iframe embedding)
2. **Hero** — full-bleed photo placeholder, headline + subheadline, primary CTA button
3. **Services** — card grid, icon + title + 1–2 line description per service:
   - Landscape design, build & maintenance (residential + commercial)
   - Sod sales and installation
   - Tree removal and trimming
   - Lumber mill and sales
   - Residential and commercial hardscapes
   - Lawn mowing & routine maintenance
4. **Gallery / Before-After** — photo grid placeholders, swappable for real project photos
5. **About / Trust** — team photo placeholder, short story, years in business, licensing/insurance badges if applicable
6. **Testimonials** — 3–5 review cards (real reviews if you have them, e.g. from Google)
7. **Contact / Quote form** — name, phone, email, service address, service interested in, message
8. **Footer** — contact info, service area, social links, copyright

## Tech approach

- Building on what's already scaffolded: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19 — no framework change needed
- Everything lives in `src/app/page.tsx` plus small section components in `src/components/` — genuinely one page, no routing
- **Contact form:** Netlify Forms is the natural fit since you're already deploying there — zero backend, submissions land right in your Netlify dashboard, no third-party CRM needed (unless you'd rather use something like Jobber the way the reference site does)
- **Styling:** Tailwind theme tuned to your brand colors; defaulting to a clean, professional green/earth-tone palette like the reference site unless you want something different

## Placeholder image system (so real JPGs/PDFs drop in later with zero code changes)

- `/public/images/hero.jpg`
- `/public/images/service-<name>.jpg` (one per service)
- `/public/images/gallery-1.jpg` … `gallery-6.jpg`
- `/public/images/team.jpg`
- `/public/images/logo.png` (or `.svg`)
- `/public/docs/` for any PDF (e.g. a price sheet, certification, or service list) — linked as a "Download" button

Each placeholder is pre-sized to the real slot's intended dimensions. To swap in a real photo later, you just replace the file at that same path — no code edits required. If your real filenames differ, just send them over and I'll wire up the paths.

## Decisions locked in

- **Contact/quote form:** Netlify Forms (built-in, no backend)
- **Color direction:** updated to match the actual logo — black/charcoal + red, with warm cream/earth neutrals. (Originally planned as green/earth-tone like the reference site, but once the real logo came in it turned out to be red + black with no green; pairing red with green also read as a Christmas palette, so green was dropped.)
- **Nav:** sticky header with anchor links
- **QuickBooks:** "Pay Invoice" button in the header nav, linking out to your QuickBooks invoice/payment portal (new tab)
- **Domain:** launching on the default `*.netlify.app` subdomain for now

## Confirmed business info

- **Business name:** Portman Brothers Lawn Care
- **Tagline:** Design, build, and maintenance of commercial and residential landscapes
- **Address:** street address kept private per your call — site will show service area only, not the full mailing address
- **Phone:** (314) 775-3909
- **Featured email:** austin@portmanbrothers.com
- **Primary contact:** Austin Portman
- **Service area:** St. Louis and Jefferson County, MO
- **Hours:** Monday–Friday, 7:00 AM – 5:00 PM
- **About us:** Servicing St. Louis since 2003
- **Certification/trust badge:** Commercial Applicator's License — selective and non-selective herbicides and pesticides
- **Logo/photos:** you have real ones ready to send; using placeholders in the build until then

## Deployment

- Push to your existing GitHub repo → Netlify auto-deploys from it (Netlify's Next.js runtime plugin handles the App Router build automatically)

## Build status: initial build complete

The one-page site has been written into this project (Header, Hero, Services, Gallery,
About, Testimonials, Contact, Footer components in `src/components/`, wired together in
`src/app/page.tsx`). Business info, services, hours, and the real logo are all in place.
`npx tsc --noEmit` and `npx eslint src` both ran clean. A full `next build`/`next dev`
smoke test could not be completed in this environment (no network access in this sandbox
for Next's telemetry/dev-server check) — run `npm run dev` locally to do a final visual
pass before deploying.

## Still open / nice-to-have before final polish

- Real photos to replace the green placeholder images in `public/images/` (hero.jpg,
  team.jpg, gallery-1.jpg … gallery-6.jpg) — just overwrite those exact filenames
- Real customer testimonials to replace the placeholder review cards in
  `src/lib/site-config.ts` (`testimonials` array)
- Your QuickBooks payment/invoice link — update `quickbooksPayUrl` in
  `src/lib/site-config.ts` (currently `"#"`). QuickBooks invoice-specific "View and pay"
  links are usually per-invoice — let me know if you have a persistent "Request a
  payment" link from QuickBooks Payments, or if it should link to your QuickBooks
  customer sign-in instead
- Netlify Forms: once deployed, go to Site settings → Forms in Netlify to confirm the
  "quote-request" form was detected (it should be, thanks to the `public/forms.html`
  fallback) and to set up an email notification for new submissions
- Optional cleanup: `public/*.svg` (the default Next.js icons) are unused now and can be
  deleted
