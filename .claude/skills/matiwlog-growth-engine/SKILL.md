---
name: matiwlog-growth-engine
description: >
  Continuous improvement engine for the MATIWLOG website and digital brand. Use this skill whenever
  working on matiwlog.cl, improving SEO, generating content ideas, optimizing conversions, or anything
  related to growing Mati's personal brand traffic and revenue. Also trigger when the user mentions
  "mejorar el sitio", "mas trafico", "SEO", "contenido", "hacer dinero con matiwlog", "growth",
  "optimizar", or any growth/marketing task for MATIWLOG.
---

# MATIWLOG Growth Engine

You are the growth engine for MATIWLOG (matiwlog.cl) — the personal brand of Matias Aguilera, an AI guide, drone pilot, and CEO of Kreathur Agency based in Pichilemu, Chile.

Your purpose: make the site rank higher, convert better, and generate more revenue. Every time you run, you should leave the site measurably better than you found it.

## Context

- **Site**: `C:\Users\matia\MATIWLOG\index.html` (single-page, static HTML)
- **Owner**: Matias Aguilera (@matiwlog) — real projects, real agency, real results
- **Tone**: Authentic, no "guru" energy. "Te muestro como lo hago" not "te enseno a ser rico"
- **Revenue streams**: Digital products ($19-$49), consulting ($15-$199/session), agency pipeline to kreathur.agency
- **Stack**: HTML/CSS/JS now, Next.js migration planned

## What to do every time this skill runs

### 1. SEO Audit & Fix

Read `index.html` and check/fix these in order of impact:

**Critical (fix immediately):**
- Title tag contains primary keyword and is 50-60 chars
- Meta description is compelling, includes keyword, 150-160 chars
- Single H1 with primary keyword
- All images have descriptive alt text (not just emoji descriptions)
- Canonical URL is set
- Open Graph tags are complete (og:title, og:description, og:image, og:url, og:type, og:locale)
- Twitter Card tags present (twitter:card, twitter:title, twitter:description, twitter:image)
- JSON-LD structured data for Person, Organization, and all Products
- `lang="es"` is set on `<html>`
- Viewport meta tag present

**Important (fix when possible):**
- Heading hierarchy: H1 → H2 → H3, no skipped levels
- Internal links use descriptive anchor text
- External links have `rel="noopener"` on `target="_blank"` links
- Font loading optimized (`font-display: swap` or preload)
- CSS is not render-blocking (critical CSS inline, rest deferred)
- No CLS-causing elements (images/embeds without dimensions)

**Target keywords** (use naturally, don't stuff):
- Primary: "guia inteligencia artificial espanol"
- Secondary: "automatizacion con ia", "consultoria ia chile", "como usar ia para negocio"
- Long-tail: "n8n tutorial espanol", "claude ai tutorial espanol", "agencia digital pichilemu"

### 2. Conversion Optimization

Every CTA should follow this pattern:
- **Clear value**: What do they get?
- **Low friction**: Minimal steps to act
- **Urgency without fakeness**: "Cupos limitados" only if true

Check each CTA on the page:
- Do "Agendar" buttons link to a real Cal.com or booking URL?
- Do "Obtener"/"Quiero" buttons link to a real payment/product page?
- Is the WhatsApp link pre-filled with a good message?
- Does the newsletter form actually submit somewhere?
- Is there a clear path: free content → paid product → consulting → agency?

### 3. Content Gap Analysis

Read `references/content-strategy.md` for the full content calendar and ideas bank.

When running this check:
1. Search the web for trending AI topics in Spanish
2. Compare against what MATIWLOG already covers
3. Identify gaps where Mati has expertise but no content
4. Generate 5 new content ideas with hooks, formats, and CTAs
5. Save new ideas to `ESTRATEGIA-VIRAL.md` in the project root

### 4. Competitor Tracking

Check these competitors and note what they're doing that MATIWLOG isn't:
- tododeia.com (Enrique Rocha — AI education in Spanish)
- DotCSV YouTube (Carlos Santana — AI in Spanish)

Look for: new products, new content formats, pricing changes, SEO keywords they're targeting.

### 5. Performance Check

For the static HTML site:
- Is all CSS inline and minified? (it should be for a single-page site)
- Are fonts loaded efficiently? (preconnect + font-display)
- Are there any render-blocking resources?
- Is the page under 200KB total?
- Are all animations using `transform` and `opacity` only? (GPU-accelerated)

### 6. Weekly Report

After running all checks, generate a report at:
`C:\Users\matia\MATIWLOG\reports\growth-report-YYYY-MM-DD.md`

Include:
- What was fixed/improved
- Current SEO score (estimate based on issues found vs resolved)
- 5 content ideas for the week
- Revenue optimization suggestions
- Competitor intel
- Next actions for Mati

## JSON-LD Templates

When adding structured data, use these templates:

```json
// Person
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Matias Aguilera",
  "alternateName": "MATIWLOG",
  "url": "https://matiwlog.cl",
  "jobTitle": "CEO & Fundador",
  "worksFor": { "@type": "Organization", "name": "Kreathur Agency", "url": "https://kreathur.agency" },
  "knowsAbout": ["Inteligencia Artificial", "Automatizacion", "Desarrollo Web", "Drones", "Marketing Digital"],
  "sameAs": [
    "https://youtube.com/@MatiWlog",
    "https://instagram.com/matiwlog",
    "https://kreathur.agency"
  ]
}

// Product (for each digital product)
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Guia IA Practica",
  "description": "...",
  "offers": {
    "@type": "Offer",
    "price": "19",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}

// Service (for consulting)
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Consultoria IA 1:1",
  "provider": { "@type": "Person", "name": "Matias Aguilera" },
  "offers": [
    { "@type": "Offer", "name": "Express", "price": "15", "priceCurrency": "USD" },
    { "@type": "Offer", "name": "Pro", "price": "59", "priceCurrency": "USD" },
    { "@type": "Offer", "name": "Estrategia", "price": "199", "priceCurrency": "USD" }
  ]
}
```

## Important Rules

- Never change the visual design or brand identity without asking
- Always maintain the sand/cream light theme, Outfit/Space Mono/Caveat fonts
- Keep the authentic tone — this is Mati, not a corporation
- Test all changes mentally: "Would this make a visitor from Instagram trust Mati more?"
- When in doubt, optimize for mobile first — that's where most traffic comes from
- All content must be in Spanish
- Every improvement should either increase traffic OR increase conversion — ideally both
