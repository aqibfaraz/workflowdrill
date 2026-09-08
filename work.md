# Capstone Comparison — Prompting Workflow Audit

Two builds of the same landing page (header + SaaS hero), identical stack
(React + Vite, plain CSS), different prompting workflows.

## Capstone 1 — Plain prompt

**Prompt:** one run-on sentence describing the layout from memory — "header
logo left, menu right, Let's Talk button… hero heading… 4 circle images…
trusted by 150+ clients… View Portfolio button".

**Experience:** Instant. No questions, no plan, no reference material. Spacing,
colours, copy and image treatment were all guessed. Zero back-and-forth, but
also zero shared understanding — the result was whatever seemed reasonable.

**Output:** One 59-line `App.jsx`, one 163-line `index.css`. Everything inline:
copy as string literals, magic numbers throughout, `<a href="#">` standing in
for buttons, crude SVG avatars, no theming, a single guessed breakpoint. It
runs and looks plausible, but it is not the design and is awkward to extend.

## Capstone 2 — Structured prompt

**Prompt:** goal + **file references** (reuse capstone-1, the design
screenshot, the avatar assets) + **hard constraints** (React+Vite, no CDN,
fully offline, component split, exact colour tokens, semantic HTML) + **example
behaviours** (button hover, avatar overlap, mobile rules) + **verification
steps** (build passes, serves 200, no external requests, file/line report).

**Experience:** Slower to start. An Explore pass (read capstone-1 and the
screenshot), a clarifying Q&A round, then a written plan that had to be
approved before any code. One change was captured mid-plan (logo → "AF"). More
effort upfront; far fewer surprises afterwards.

**Output:** 12 components plus a `useTheme` hook, a tokenised `global.css` with
**dark/light themes** (persisted, no-flash), an accessible star rating, real
`<button>`/`<a>` elements, a self-hosted display font, a drop-in placeholder
collage, and a documented verification checklist. It matches the screenshot.

## Takeaway

Same model, same stack. The plain prompt bought speed and a throwaway; the
structured prompt cost ~15 minutes of setup and produced something shaped like
the design and safe to build on.
