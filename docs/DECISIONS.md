# Design and Architecture Decisions

## 1. Static and buildless

The portfolio uses HTML, CSS, and JavaScript without a framework. The content does not require server rendering or a database, and this approach minimizes deployment and handoff risk.

Reconsider this only if a future feature requires authenticated data, a CMS, server-side forms, or complex application state.

## 2. English and Thai in one content model

Both languages live in `content.js` with matching shapes. This makes the language toggle instant and forces changes to remain synchronized. `scripts/check-site.mjs` fails when the structures diverge.

## 3. Live products are evidence

The two production products are embedded as iframes where allowed and always paired with direct links. The visitor can inspect real work without pretending that a screenshot is the product.

## 4. Operations before technology

The narrative begins with the real operating context. Technology is presented as the implementation layer, not the identity claim. This differentiates Saharath from candidates who only list tools or tutorial projects.

## 5. Honest AI positioning

The site explicitly treats AI as leverage. It describes approximately six months of applied AI-assisted work and keeps the three-year figure attached to engineering, support, and project delivery.

## 6. GitHub Pages target

The intended repository is `OhmSaharath/OhmSaharath.github.io`, producing the short recruiter-friendly URL `https://ohmsaharath.github.io/` without an extra path segment.

## 7. Public-safety boundary

The portfolio may show public product behavior and sanitized operational outcomes. It must never include real customer records, platform exports, private financial values, credentials, or admin screenshots containing sensitive data.
