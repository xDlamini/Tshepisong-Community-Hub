# 🏘️ Tshepisong Community Hub

**The digital home for the Tshepisong community — Roodepoort, Johannesburg, South Africa.**

> *"This is our place. This is our home online."*

---

## 🌍 About This Project

The Tshepisong Community Hub is a mobile-first, Angular-powered Single Page Application (SPA) designed to:

- **Bring people together** with a single digital community destination
- **Showcase community resources** — schools, parks, the library, sports grounds, clinics, churches
- **Create pride and visibility** for Tshepisong online
- **Help local small businesses go digital** with free listings
- **Serve as an information hub** for residents, parents, youth and visitors

---

## 🧱 Tech Stack

| Layer        | Technology                             |
|-------------|----------------------------------------|
| Framework   | Angular 17 (Standalone Components)     |
| State       | Angular Signals                        |
| Styling     | Plain CSS (Design Token system)        |
| Routing     | Angular Router with Lazy Loading       |
| Forms       | Angular Reactive Forms                 |
| Hosting     | Firebase Hosting                       |
| Backend     | Phase 1: JSON files / EmailJS · Phase 2: Firestore |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/           ← TypeScript interfaces (Place, Business, Notice…)
│   │   └── services/         ← PlacesService, BusinessesService, NoticesService, ContactService
│   ├── shared/
│   │   └── components/
│   │       ├── header/       ← AppHeaderComponent (sticky nav + mobile menu)
│   │       ├── footer/       ← AppFooterComponent
│   │       ├── hero/         ← Reusable hero section
│   │       ├── place-card/   ← PlaceCardComponent
│   │       ├── business-card/← BusinessCardComponent (tap-to-call + WhatsApp)
│   │       ├── filter-bar/   ← FilterBarComponent (pill buttons)
│   │       ├── section-header/← SectionHeaderComponent (eyebrow + title + subtitle)
│   │       └── notice-card/  ← NoticeCardComponent
│   ├── features/
│   │   ├── home/             ← / (hero, highlights, businesses, notices, CTA)
│   │   ├── about/            ← /about (story, facts, values, gallery)
│   │   ├── spotlight/        ← /spotlight (filterable place grid + detail modal)
│   │   ├── businesses/       ← /businesses (directory + listing CTA)
│   │   ├── services/         ← /services (health, emergency, transport, education)
│   │   └── contact/          ← /contact (business listing form + general enquiry)
│   ├── app.component.ts      ← Root shell (header + router-outlet + footer)
│   ├── app.routes.ts         ← Lazy-loaded route config
│   └── app.config.ts         ← Angular providers
├── assets/
│   ├── data/                 ← places.json, businesses.json (Phase 1 static data)
│   └── images/               ← Add real community photos here
└── styles.css                ← Global design system (CSS tokens, reset, utilities)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI: `npm install -g @angular/cli`
- Firebase CLI (for deployment): `npm install -g firebase-tools`

### Local Development

```bash
# 1. Clone or extract the project
cd tshepisong

# 2. Install dependencies
npm install

# 3. Start the dev server
ng serve

# 4. Open in browser
# http://localhost:4200
```

### Production Build

```bash
npm run build:prod
```

Output lands in `dist/tshepisong/browser/`.

---

## 🔥 Firebase Deployment

```bash
# 1. Login to Firebase
firebase login

# 2. Create a project at console.firebase.google.com
#    Project ID: tshepisong-community-hub

# 3. Update .firebaserc with your project ID

# 4. Build + Deploy
npm run deploy
```

Your site will be live at:  
`https://tshepisong-community-hub.web.app`

---

## 📄 Pages & Routes

| Route          | Page                   | Purpose                                      |
|---------------|------------------------|----------------------------------------------|
| `/`           | Home                   | Hero, highlights, businesses, notices, CTA   |
| `/about`      | About Tshepisong       | Story, facts, values, photo gallery          |
| `/spotlight`  | Community Spotlight    | Filterable grid of parks, schools, etc.      |
| `/businesses` | Local Businesses       | Directory with tap-to-call + WhatsApp        |
| `/services`   | Services               | Health, emergency contacts, transport        |
| `/contact`    | Get Involved           | Business listing form + general contact      |

---

## 🎨 Design System

### Colour Palette

| Token                   | Value       | Use                        |
|------------------------|-------------|----------------------------|
| `--color-primary`      | `#1A6B3A`   | Forest Green — primary     |
| `--color-primary-dark` | `#145530`   | Header, dark sections      |
| `--color-accent`       | `#C8922A`   | Warm Gold — CTAs, badges   |
| `--color-rust`         | `#B84C2A`   | Alerts, emergency          |
| `--color-cream`        | `#F9F5EF`   | Page background            |
| `--color-ink`          | `#1a1a18`   | Body text                  |

### Typography

- **Display / Headings**: Playfair Display (Google Fonts)
- **Body / UI**: DM Sans (Google Fonts)

---

## ➕ Adding Real Data

### Phase 1 — Static JSON

Edit the arrays inside the services:
- `src/app/core/services/places.service.ts`
- `src/app/core/services/businesses.service.ts`
- `src/app/core/services/notices.service.ts`

### Phase 2 — Firebase Firestore

1. Create a Firestore database in the Firebase console
2. Replace `signal<Place[]>([...])` with `collectionData()` from `@angular/fire`
3. Install: `npm install @angular/fire firebase`
4. Add `provideFirebaseApp()` and `provideFirestore()` to `app.config.ts`

---

## 📞 Contact Forms — EmailJS Setup

1. Sign up free at [emailjs.com](https://emailjs.com)
2. Create a service and template
3. In `notices.service.ts` → `ContactService.submitContactForm()`:
   ```typescript
   import emailjs from '@emailjs/browser';
   return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...}, 'YOUR_PUBLIC_KEY');
   ```
4. Install: `npm install @emailjs/browser`

---

## 📱 Mobile-First Approach

Breakpoints used:
| Size     | Width    |
|---------|----------|
| Mobile  | < 480px  |
| Tablet  | 480–768px|
| Desktop | > 768px  |

All components are tested for:
- Touch targets ≥ 44px
- Tap-to-call on phone numbers
- WhatsApp deep-links
- Horizontal scroll filter bars
- Bottom-sheet modals on mobile

---

## 🗺️ Phase 2 Roadmap

- [ ] Firestore integration (live data, no redeploy needed)
- [ ] Admin panel for approving business listings
- [ ] Community Events calendar (`/events`)
- [ ] Community Notice Board submissions
- [ ] PWA support (offline mode + install prompt)
- [ ] Multilingual support (Zulu, Sotho, Tswana, Xhosa)
- [ ] Photo upload for business profiles
- [ ] Google Maps embed for each place
- [ ] SEO: Angular Universal (SSR) + structured data

---

## 🤝 Contributing

This website belongs to the Tshepisong community.  
To suggest a business, place, or improvement — visit `/contact` or email hello@tshepisong.co.za.

---

## 📜 Licence

Built with love for Tshepisong. Free to use, adapt and share for community purposes.

---

*"Tshepisong — A Name That Means Hope."* 🇿🇦
