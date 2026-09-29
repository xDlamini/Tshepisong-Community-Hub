# Tshepisong Community Platform — Full Project Structure

```
src/
├── index.html
├── main.ts
├── styles.css
│
└── app/
    ├── app.component.ts
    ├── app.config.ts
    ├── app.routes.ts
    │
    ├── core/
    │   ├── models/
    │   │   └── index.ts
    │   └── services/
    │       ├── businesses.service.ts
    │       ├── notices.service.ts
    │       └── places.service.ts
    │
    ├── shared/
    │   └── components/
    │       ├── audience-selector/
    │       │   ├── audience-selector.component.ts
    │       │   ├── audience-selector.component.html
    │       │   └── audience-selector.component.css
    │       ├── business-card/
    │       │   ├── business-card.component.ts
    │       │   └── business-card.component.css
    │       ├── filter-bar/
    │       │   ├── filter-bar.component.ts
    │       │   └── filter-bar.component.css
    │       ├── footer/
    │       │   ├── footer.component.ts
    │       │   ├── footer.component.html
    │       │   └── footer.component.css
    │       ├── header/
    │       │   ├── header.component.ts
    │       │   ├── header.component.html
    │       │   └── header.component.css
    │       ├── notice-card/
    │       │   └── notice-card.component.ts
    │       ├── place-card/
    │       │   ├── place-card.component.ts
    │       │   └── place-card.component.css
    │       └── section-header/
    │           └── section-header.component.ts
    │
    └── features/
        ├── about/
        │   ├── about.component.ts
        │   ├── about.component.html
        │   └── about.component.css
        ├── businesses/
        │   ├── businesses.component.ts
        │   ├── businesses.component.html
        │   └── businesses.component.css
        ├── contact/
        │   ├── contact.component.ts
        │   ├── contact.component.html
        │   └── contact.component.css
        ├── home/
        │   ├── home.component.ts
        │   ├── home.component.html
        │   └── home.component.css
        ├── leaders/
        │   ├── leaders.component.ts
        │   ├── leaders.component.html
        │   └── leaders.component.css
        ├── services/
        │   ├── services.component.ts
        │   ├── services.component.html
        │   └── services.component.css
        ├── spotlight/
        │   ├── spotlight.component.ts
        │   ├── spotlight.component.html
        │   └── spotlight.component.css
        ├── service-tracker/
        │   ├── models/
        │   │   └── issue.model.ts
        │   ├── services/
        │   │   └── issues.service.ts
        │   ├── components/
        │   │   ├── report-issue-form/
        │   │   │   ├── report-issue-form.component.ts
        │   │   │   ├── report-issue-form.component.html
        │   │   │   └── report-issue-form.component.css
        │   │   └── issues-list/
        │   │       ├── issues-list.component.ts
        │   │       ├── issues-list.component.html
        │   │       └── issues-list.component.css
        │   ├── service-tracker-page.component.ts
        │   ├── service-tracker-page.component.html
        │   └── service-tracker-page.component.css
        │
        ├── kiddies/
        │   ├── kiddies-home/
        │   │   ├── kiddies-home.component.ts
        │   │   ├── kiddies-home.component.html
        │   │   └── kiddies-home.component.css
        │   └── kiddies-games/
        │       ├── kiddies-games.component.ts
        │       ├── kiddies-games.component.html
        │       ├── kiddies-games.component.css
        │       └── games/
        │           ├── memory-game/
        │           │   ├── memory-game.component.ts
        │           │   ├── memory-game.component.html
        │           │   └── memory-game.component.css
        │           └── number-puzzle/
        │               └── number-puzzle.component.ts
        │
        ├── youth/
        │   └── youth-home/
        │       ├── youth-home.component.ts
        │       ├── youth-home.component.html
        │       ├── youth-home.component.css
        │       └── sections/
        │           ├── opportunities/
        │           │   └── opportunities-section.component.ts
        │           ├── careers/
        │           │   └── careers-section.component.ts
        │           ├── coding/
        │           │   └── coding-section.component.ts
        │           └── notices/
        │               └── notices-section.component.ts
        │
        └── adults/
            └── adults-home/
                ├── adults-home.component.ts
                ├── adults-home.component.html
                ├── adults-home.component.css
                └── sections/
                    ├── resources/
                    │   └── resources-section.component.ts
                    ├── health/
                    │   └── health-section.component.ts
                    ├── finance/
                    │   └── finance-section.component.ts
                    └── forms/
                        └── forms-section.component.ts
```

## Routes

| Route | Component | Title |
|---|---|---|
| `/` | HomeComponent | Home |
| `/about` | AboutComponent | About Tshepisong |
| `/spotlight` | SpotlightComponent | Community Spotlight |
| `/businesses` | BusinessesComponent | Local Businesses |
| `/services` | ServicesComponent | Services |
| `/leaders` | LeadersComponent | Community Leaders |
| `/contact` | ContactComponent | Get Involved |
| `/service-tracker` | ServiceTrackerPageComponent | Service Delivery Tracker |
| `/kiddies` | KiddiesHomeComponent | Kiddies Corner |
| `/kiddies/games` | KiddiesGamesComponent | Games |
| `/youth` | YouthHomeComponent | Youth Corner |
| `/adults` | AdultsHomeComponent | Adults Corner |

## New Components Added This Session

- `AudienceSelectorComponent` — homepage band guiding users to their corner
- `KiddiesHomeComponent` — landing page for Kiddies Corner
- `KiddiesGamesComponent` — game selector with signal-driven `@if` rendering
- `MemoryGameComponent` — fully playable Angular memory card game
- `NumberPuzzleComponent` — sequence number puzzle with signal state
- `YouthHomeComponent` — tab-driven page using `activeTab` signal
- `OpportunitiesSectionComponent` — bursaries and learnerships list
- `CareersSectionComponent` — career guidance cards
- `CodingSectionComponent` — free coding resource directory
- `NoticesSectionComponent` — youth-specific notices
- `AdultsHomeComponent` — anchor-scrollable long-form page
- `ResourcesSectionComponent` — government and community resources
- `HealthSectionComponent` — clinic and health service info
- `FinanceSectionComponent` — financial guidance for residents
- `FormsSectionComponent` — government forms how-to guides

## Header Changes

- Added **"Our Corners" dropdown** in desktop nav linking to `/kiddies`, `/youth`, `/adults`
- Mobile menu now has a **"Community Corners" section** with colour-coded links
- Dropdown closes on outside click and on `Escape` key

## Footer Changes

- Added **Community Corners column** with colour-coded links
- Added **Corners Strip** — a distinct band above the copyright line highlighting all three corners
- `currentYear` is computed dynamically from `new Date()`
