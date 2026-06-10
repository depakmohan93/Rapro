# Rapro Chennai — Claude Code Context

## Project
Landing page for Rajam Property — Chennai operations.  
Live URL: https://chennai.rajamproperty.com  
Local folder: `~/Documents/Claude Folder/rapro-chennai`  
Stack: Next.js 16, TypeScript, Tailwind CSS 3, GSAP + ScrollTrigger, App Router

## Repository & Deploy
GitHub: `depakmohan93/Rapro` → branch: `main`  
Vercel: auto-deploys on push to main

Push command:
```bash
cd ~/Documents/Claude\ Folder/rapro-chennai
git add . && git commit -m "message" && git push origin main
# (PAT token stored in local git remote credentials, not in this file)
```

---

## Brand Colors
| Name            | Hex       | Usage                          |
|-----------------|-----------|--------------------------------|
| Primary Green   | `#73B130` | Buttons, icons, accents        |
| Dark Green      | `#0D631B` | Navbar gradient, badges        |
| Mid Green       | `#2C7B30` | Gradients                      |
| Section Green   | `#319F38` | Benefits section background    |
| Card Background | `#F9F9F9` | Services section cards         |
| Dark Background | `#1A1C1E` | Footer                         |

## Typography
- Headings: **Quicksand**, weight 600
- Body: **Poppins**, weight 400
- Misc: Inter, Mulish

## Spacing System (active: balanced)
Section padding: `py-[60px] md:py-[100px]` or utility class `section-py`  
Switch scale in `src/app/layout.tsx` (`data-spacing="balanced"`) and `src/lib/spacing.ts` (`ACTIVE_SCALE`)  
Scales: tight / **balanced** (active) / airy

---

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # GTM (GTM-NFMKXL2F + GTM-NGXPZKCD), HubSpot, favicons
│   ├── page.tsx            # Section assembly
│   └── thank-you/page.tsx  # Post-form redirect
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx            # Video bg, consultation form, GSAP, stat card
    ├── Testimonials.tsx
    ├── Services.tsx
    ├── CTA.tsx / CTA2.tsx / CTA3.tsx
    ├── Partners.tsx
    ├── Benefits.tsx
    ├── WhyChoose.tsx
    ├── ProblemSolution.tsx
    ├── FAQ.tsx
    ├── Footer.tsx
    ├── FloatingWidgets.tsx  # WhatsApp + Phone, fixed bottom-right
    └── useSectionAnimation.ts
public/
    hero_bg.mp4
    Logo_light.svg / Logo_dark.svg
    Card_bg.png             # Used by all 3 CTA sections
    fav_32.png / fav_256.png
```

## Section Order (page.tsx)
Navbar → Hero → Testimonials → Services → CTA → Partners → Benefits → WhyChoose → CTA2 → ProblemSolution → CTA3 → FAQ → Footer

---

## Component Patterns

### CTA Sections (CTA.tsx, CTA2.tsx, CTA3.tsx)
- Background image: `Card_bg.png`
- All buttons → `href="#consultation-form"`
- White button with shine hover:
```tsx
className="text-black bg-white py-[10px] px-6 text-base rounded-md font-semibold
  relative overflow-hidden inline-flex items-center justify-center cursor-pointer
  before:absolute before:inset-0 before:rounded-[inherit]
  before:bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,0.4)_50%,transparent_75%)]
  before:bg-[length:250%_250%] before:bg-[position:200%_0]
  before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000
  hover:before:bg-[position:-100%_0]"
```

### Section Headings
```tsx
<h2 className="font-quicksand" style={{ fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: '1.27' }}>
```

### CTA Headings
```tsx
style={{ fontWeight: 600, fontSize: 'clamp(2rem, 3.5vw, 2.625rem)', lineHeight: '1.4' }}
```

### Navbar
- Desktop: `Logo_light.svg` + nav links + green gradient CTA "Get Free Consultation"
- Mobile: `Logo_light.svg` left + "Book Free Callback" CTA right (`py-[8px] px-[22px]`) — no hamburger

### Footer
- Logo: `Logo_dark.svg`, bg: `#1A1C1E`
- Socials: Facebook, Instagram, LinkedIn, YouTube

### FloatingWidgets
- Phone: `#0D631B`, WhatsApp: `#25D366`, fixed bottom-right
- Number: +917299914181

---

## Consultation Form (Hero.tsx)
- Form ID: `id="consultation-form"`
- Fields: Full Name, Phone (Indian validation), Email, Property Type, Property Location (with "Other" → free text)
- On submit: `router.push('/thank-you')`
- Env var: `NEXT_PUBLIC_APPS_SCRIPT_URL` (set in Vercel)
- Sheet ID: `1mcge45CmZAADWm96_SuJEoAchVvOsvG6qtbtFOLOaMA`
- Sheet columns (Sheet1): A=Timestamp, B=Full Name, C=Phone, D=Email, E=Property Type, F=Location

---

## Tracking
- GTM: `GTM-NFMKXL2F` and `GTM-NGXPZKCD`
- HubSpot: portal `246155920` (`//js-na2.hs-scripts.com/246155920.js`)

## Contact
- Phone: +91 72999 14181
- Email: enquiry@rajamproperty.in

---

## Working Style
1. One change per message
2. Always name the file — "update Services.tsx" not "update the services section"
3. Exact values for styling — "font-size 1.5rem mobile" not "make it smaller"
4. `npm run dev` locally to verify before pushing
5. Complete files preferred over partial diffs

## Related Projects
- **Bangalore**: `~/Documents/Claude Folder/rapro-bangalore` → `depakmohan93/Rapro-Bangalore` → `bangalore.rajamproperty.com`
- **Vivo City**: inside Bangalore at `public/buy-plot/index.html` → `bangalore.rajamproperty.com/buy-plot`
