# Saharath Lertkirawong Portfolio

A bilingual English/Thai portfolio for Saharath Lertkirawong: engineer, restaurant operator, and AI-assisted product builder based in Bangkok.

The site is deliberately static and dependency-free. It is fast, easy to audit, easy for another AI agent to continue, and deploys directly to GitHub Pages.

## What the portfolio demonstrates

- Two live production products: [fatcat.stream](https://fatcat.stream) and [order.fatcat.stream](https://order.fatcat.stream)
- Restaurant operations and product ownership backed by real customer reviews
- TypeScript, Python, Supabase, PostgreSQL, Vercel, Docker, and API integration experience
- AI-assisted development with Claude, Gemini, Codex, and Hermes Agent
- Three years of transferable engineering, technical support, and project delivery experience
- A 20M THB robotics lab project and additional data engineering work

## Run locally

No installation is required. Use Node.js 18 or newer.

```bash
npm run check
npm run serve
```

Open `http://127.0.0.1:4173`.

## Edit content

Most recruiter-facing copy lives in [`content.js`](content.js). English and Thai use the same object shape. Any content change must be made in both languages.

- Page structure: `index.html`
- Visual design and responsive behavior: `styles.css`
- Language switching and rendering: `app.js`
- English/Thai content: `content.js`
- Resume download: `assets/Saharath_Lertkirawong_Resume.pdf`
- Agent handoff instructions: `GEMINI.md`
- Current project state: `PROJECT_STATUS.md`

Run `npm run check` after every content or structure change.

## Deployment

The workflow at `.github/workflows/pages.yml` deploys the repository root to GitHub Pages whenever `main` is updated.

Expected public URL: `https://ohmsaharath.github.io/`

## ภาษาไทย

เว็บไซต์นี้เป็น Portfolio สองภาษา ไทย/อังกฤษ สำหรับสหรัถ เลิศคีรีวงศ์ โดยเน้นผลงานที่เปิดใช้งานจริง ประสบการณ์ดำเนินธุรกิจร้านอาหาร การประยุกต์ใช้ AI ในการพัฒนาระบบ และพื้นฐานงานวิศวกรรม

แก้เนื้อหาหลักได้ที่ `content.js` และต้องแก้ทั้งภาษาอังกฤษกับภาษาไทยทุกครั้ง จากนั้นรัน `npm run check` เพื่อตรวจว่าโครงสร้างเนื้อหาทั้งสองภาษายังตรงกัน

## Privacy

Never commit customer records, platform exports, financial details, API keys, tokens, or private screenshots. Public examples must use sanitized or demo data.
