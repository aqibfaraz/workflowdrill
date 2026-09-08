# Capstone 2 — AF SOFTWARE hero

Branch 2 of the AI Fluency Workflow Audit. Same landing page as `capstone-1`,
rebuilt with the Explore → Plan → Code → Verify loop from a design screenshot
(`../Design Image/Screenshot 2026-09-08 194013.png`).

## Run

```
npm install      # first time only
npm run dev      # http://localhost:5174/
npm run build    # production build into dist/
```

Runs fully offline once `node_modules` is installed — the display font
(`src/assets/fonts/anton.woff2`), avatars and portfolio thumbnails are all
bundled local assets. No CDN / network requests at runtime.

## Structure

```
src/
  App.jsx                 composition root
  main.jsx                React 18 mount
  styles/global.css       reset + theme tokens + all component rules + @font-face
  data/content.js         verbatim screenshot copy (logo overridden to "AF")
  data/nav.js             nav items
  hooks/useTheme.js       theme state, localStorage 'capstone2-theme', <html data-theme>
  components/
    Header, Logo, Nav, ThemeToggle
    Hero, ThumbCollage, SocialProof, StarRating, IntroBlock, IconButton
    FloatingContact
  assets/fonts|avatars|thumbs
```

## Theme

Dark by default. Header toggle flips `data-theme` on `<html>`; plain-CSS custom
properties in `global.css` do the rest. Choice persists in `localStorage`, and
`index.html` runs a tiny pre-React script so there is no theme flash on reload.

Placeholder thumbnails in `src/assets/thumbs/t1..t9.svg` can be replaced with
real 16:10 images (same filenames) with no layout change.

## Verification checklist

- [ ] `npm run build` exits 0, no errors
- [ ] `npm run dev` serves HTTP 200 on :5174
- [ ] no external hosts referenced in `dist/`
- [ ] heading renders on two lines: `SAAS. APP.` / `WEB SOLUTION`
- [ ] portfolio thumbnail collage sits top-right, overlapping the heading
- [ ] bottom-left: 4 overlapping avatars + 5 red stars + "Trusted by 150+ clients"
- [ ] bottom-right: intro paragraph + `VIEW PORTFOLIO` pill + circular arrow
- [ ] floating `•••` / phone widget fixed bottom-right
- [ ] theme toggle flips the palette and survives a full page reload
- [ ] below ~960px the collage drops under the heading and the hero row stacks
