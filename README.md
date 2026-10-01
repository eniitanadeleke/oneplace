# One Place Properties React

Converted from the supplied One Place Properties HTML source into a Vite + React project. Existing copy and property information are preserved.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Routes: `/`, `/about`, `/what-we-build`, `/spaces`, `/appointments`, `/studios`, `/partner`, `/contact`.

The supplied login-details document is kept at the project root as source reference only and is not exposed through the website.

## Design refresh (property platform)

All copy is unchanged; colour tokens and fonts are unchanged. What changed is layout, imagery and interaction.

- **Photography** lives in `src/assets/images/` (named by where it is used). Replace any file with your own shot using the same filename. The original art-direction notes (e.g. "Busy commercial frontage…") are kept as each image's alt text.
- **Contact links** (phone + WhatsApp used by the mobile action bar, menu and footer) are set once in `src/lib/contact.js`.
- **Icons** are inline SVG strings in `src/lib/icons.js` (generated from lucide).
- **Design system** is in `src/styles/content-system.css` (mobile-first, tokens at the top).

Features: home search panel (City + Type opens Spaces pre-filtered), shareable filter URLs (`/spaces?city=lagos&type=office`), save/heart on listings (remembered on the device), sticky filter bar, swipeable space cards, room/studio cards that pre-select the booking form, sticky section nav on What we build, count-up figures, full-screen mobile menu, sticky Call / WhatsApp / Enquire bar on phones, past dates blocked on booking forms.
