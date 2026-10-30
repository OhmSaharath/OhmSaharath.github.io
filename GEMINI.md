# Gemini Handoff Guide

This file is the operating contract for Gemini or any AI agent continuing this portfolio.

## Mission

Maintain a bilingual, evidence-based portfolio that helps recruiters understand Saharath Lertkirawong as an engineer and product builder who converts real operational problems into production systems.

The site must remain honest, inspectable, fast, accessible, and safe to publish publicly.

## Read first

Before changing anything, read these files in order:

1. `PROJECT_STATUS.md`
2. `README.md`
3. `docs/DECISIONS.md`
4. `docs/CONTENT_GUIDE.md`
5. `content.js`
6. `app.js`
7. `styles.css`

Then run:

```bash
npm run check
```

## Factual guardrails

Do not inflate experience or combine unrelated durations.

- Saharath has **3+ years** across electrical engineering, technical support, and project delivery.
- He has approximately **6 months of hands-on AI-assisted development and automation experience** applied to production restaurant systems.
- Position him as an **applied practitioner / product builder**, not a senior AI or ML expert.
- The restaurant has **190+ LINE MAN reviews at 4.8** and **60+ Grab reviews at 4.9**, based on owner-provided platform data. Do not state that the software or AI alone caused these ratings.
- The restaurant metrics demonstrate real operations, customer handling, and product context.
- `fatcat.stream` consolidates Grab and LINE MAN sales, fees, deductions, food costs, net payouts, and profitability signals.
- `order.fatcat.stream` supports direct ordering and connects confirmed orders to Loyverse for the existing kitchen-print workflow.
- The public order product visibly includes menu search, cart, customer account, reorder, rewards, and order history features.
- The 20M THB Robotics Lab belongs to Saharath's professional project-delivery experience.
- English level should remain described as basic working communication unless the owner asks to change it.
- Target roles are Monday–Friday in Bangkok. Hybrid or remote is welcome but not required.

If a new claim cannot be supported by a public product, repository, document, screenshot, or the owner's direct confirmation, flag it in `PROJECT_STATUS.md` instead of publishing it as fact.

## Architecture

This is a buildless static site.

```text
index.html                    Semantic structure and SEO metadata
styles.css                   Full responsive visual system
content.js                   All bilingual recruiter-facing content
app.js                       Rendering, language toggle, mobile nav, reveal behavior
assets/                      Public assets and resume PDF
scripts/check-site.mjs       Local integrity and EN/TH parity checks
scripts/serve.mjs            Dependency-free local preview server
.github/workflows/pages.yml  GitHub Pages deployment
docs/                        Decisions and content policy
```

No framework or build step is currently required. Do not add dependencies unless a requested feature clearly justifies them.

## Required workflow for every change

1. Update `PROJECT_STATUS.md` to mark the task in progress.
2. Make the smallest coherent change.
3. Update both `content.en` and `content.th` when recruiter-facing copy changes.
4. Run `npm run check`.
5. Run `npm run serve` and visually inspect desktop and mobile widths.
6. Test both language states, all external links, the Resume PDF, navigation, and keyboard focus.
7. Check the browser console for errors.
8. Update `CHANGELOG.md` and `PROJECT_STATUS.md` with the result and verification performed.
9. Commit with a concise message describing the visitor-facing outcome.

## Content rules

- Lead with outcomes and evidence, not a list of tools.
- Keep the distinction between **restaurant performance** and **software performance** explicit.
- Explain the problem, decision, shipped system, and operational result for each case study.
- Prefer concrete verbs: built, deployed, integrated, automated, operated, validated, reconciled.
- Avoid expert, visionary, revolutionary, cutting-edge, and other unsupported labels.
- Thai should sound natural, not like a literal translation of English.
- English should remain direct and easy to discuss in an interview.
- Do not expose customer names, phone numbers, order records, private financial values, API credentials, or platform exports.

## Design rules

- Preserve the dark technical/editorial visual direction and lime accent unless the owner requests a redesign.
- Keep the page useful without decorative animation.
- Respect `prefers-reduced-motion`.
- Maintain WCAG-friendly contrast and visible keyboard focus.
- The live product iframes must always have visible fallback links because a product may later block embedding.
- Test at approximately 390px, 768px, 1024px, and 1440px widths.

## Deployment

The repository is intended for `OhmSaharath/OhmSaharath.github.io` with public URL:

`https://ohmsaharath.github.io/`

GitHub Pages deploys from the included Actions workflow. If deployment fails:

1. Read the failing Actions job.
2. Confirm Pages is enabled with GitHub Actions as the source.
3. Confirm the default branch is `main`.
4. Do not rewrite history or delete the workflow to silence a failure.

## Completion standard

A task is not complete until the site works in English and Thai, the local check passes, the visual layout is inspected, documentation is updated, and the published URL is verified when deployment is in scope.
