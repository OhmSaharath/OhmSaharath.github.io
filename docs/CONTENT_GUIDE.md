# Portfolio Content Guide

## Case-study formula

Every main project should answer five questions:

1. What real problem existed?
2. Who experienced it?
3. What did Saharath build or change?
4. How was it integrated into the existing operation?
5. What evidence shows that it is real and useful?

## Evidence levels

Use the strongest available evidence and keep the wording proportional to it.

- **Publicly inspectable:** live URL, public repository, visible product feature
- **Documented:** Resume, certificate, project handover, approved screenshot
- **Owner-confirmed:** platform review count, private operating metric, role detail
- **Inference:** interpretation of why a result happened; label carefully or omit

Do not turn an owner-confirmed metric into a causal claim. For example, restaurant ratings can demonstrate real operations and customer handling, but not that software alone produced the ratings.

## Adding a project

Add an object to both `content.en.projects` and `content.th.projects` with the same keys:

```js
{
  number: "03",
  title: "...",
  url: "https://...",
  displayUrl: "...",
  summary: "...",
  problem: "...",
  outcomes: ["..."],
  tags: ["..."],
  visualNote: "..."
}
```

Then run `npm run check` and inspect both language states.

## Updating metrics

When review counts, ratings, views, or other metrics change:

1. Record the date and source in `PROJECT_STATUS.md`.
2. Use conservative rounded language such as `190+` rather than a fragile exact count.
3. Update both English and Thai.
4. Check that the new number does not imply unsupported causation.

## Tone

- Direct, calm, and specific
- Confident about shipped work
- Honest about experience depth
- Business-aware without corporate filler
- Technical enough to invite follow-up questions

Avoid inflated labels and generic claims such as “passionate innovator” or “AI expert.” Let the live systems carry the credibility.
