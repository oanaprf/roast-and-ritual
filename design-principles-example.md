# Design Principles — Roast & Ritual

## Core Aesthetic
Roast & Ritual is built on a **cozy, warm, earthy** aesthetic that evokes the sensory experience of a neighborhood coffee shop — the smell of fresh grounds, the warmth of ceramic mugs, and the comfort of a well-worn armchair.

---

## Color System

| Role              | Color     | Hex       |
|-------------------|-----------|-----------|
| Background (dark) | Espresso  | `#2E1F1C` |
| Primary brand     | Roast     | `#6F4E37` |
| Accent / muted    | Latte     | `#C4A484` |
| Background (light)| Cream     | `#F5EBDD` |

### Usage Rules
- **Espresso** is used for dark section backgrounds and primary headings on light backgrounds.
- **Roast** is the primary interactive color — buttons, links, and highlights.
- **Latte** is used for borders, secondary text, and subtle decorative elements.
- **Cream** is the default light background and body text color on dark surfaces.

---

## Typography

- **Display / Hero headings**: Serif font (e.g., Playfair Display) — conveys warmth, tradition, and craft.
- **Body / UI**: Sans-serif (e.g., Inter) — clean and readable.
- **Hierarchy**: Large, confident headlines; modest, generous body text spacing.

### Type Scale (Tailwind)
| Level       | Class              |
|-------------|--------------------|
| Hero        | `text-5xl lg:text-7xl` |
| Section H2  | `text-3xl lg:text-5xl` |
| Sub-heading | `text-xl lg:text-2xl`  |
| Body        | `text-base lg:text-lg` |
| Caption     | `text-sm`          |

---

## Spacing & Layout

- Use generous whitespace — sections breathe with `py-20 lg:py-32`.
- Full-width sections alternate between cream and espresso backgrounds.
- Max content width: `max-w-6xl mx-auto` with `px-6 lg:px-8` gutters.

---

## Component Patterns

### Buttons
```
Primary: bg-roast text-cream hover:bg-espresso transition-colors
Secondary: border border-latte text-roast hover:bg-latte/20 transition-colors
```

### Cards
- Rounded corners: `rounded-2xl`
- Subtle shadow: `shadow-md hover:shadow-lg transition-shadow`
- Background: `bg-cream` on dark sections, `bg-espresso/5` on light sections

### Section Headers
- Centered, with a short decorative divider (`<hr>` or thin border)
- Small eyebrow label in latte color above main heading

---

## Imagery Guidelines
- Prefer warm-toned, high-contrast photographs
- Use texture (coffee beans, burlap, wood grain) as background overlays with reduced opacity
- Maintain consistent grain/noise filter to unify imagery

---

## Motion & Interaction
- Keep animations subtle: `transition-all duration-300 ease-in-out`
- No excessive motion — this is a calm, grounded brand
- Hover states on interactive elements should feel responsive but gentle

---

## Accessibility
- Maintain WCAG AA contrast ratios for all text
- All images must have descriptive `alt` text
- Interactive elements must have `:focus-visible` ring styles
- Use semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<main>`)
