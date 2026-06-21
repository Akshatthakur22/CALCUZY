# AdSense resubmission checklist — Calcuzy.app

Use this after deploying the content-quality updates to production.

## Before requesting review

1. Deploy latest `main` to production (Vercel or your host).
2. In [Google Search Console](https://search.google.com/search-console), request indexing for:
   - `https://calcuzy.app/`
   - `https://calcuzy.app/rent-affordability-calculator/`
   - `https://calcuzy.app/property-tax-estimator/`
   - `https://calcuzy.app/paint-cost-calculator/`
   - `https://calcuzy.app/bmi-calculator/`
   - `https://calcuzy.app/blog/`
3. Wait **7–14 days** for recrawl (optional but improves approval odds).
4. Confirm Privacy Policy mentions AdSense and links to Google partner sites policy.
5. Keep **one ad unit per page max** until approved (`MAX_AD_SLOTS_PER_PAGE = 1` in `lib/ads-config.ts`).

## Text to paste in AdSense “Request review”

```
We addressed the "Low value content" policy issue on calcuzy.app with the following changes:

1. Original educational content — Every major calculator page now includes formulas, step-by-step explanations, worked examples, limitations, and links to authoritative sources (IRS, WHO/CDC, HUD, NIST, etc.). Deep guides were added for rent affordability, property tax, and paint cost.

2. Removed low-quality filler — Replaced generic marketing copy and inaccurate claims (e.g., "cryptographically secure" on the random number tool) with accurate, user-first explanations.

3. Thin list pages — Name, quote, and individual holiday countdown pages (e.g., /love-quotes/, /days-until-christmas/) are set to noindex and removed from sitemap so Google focuses on our calculator and blog content.

4. Privacy Policy — Added a Google AdSense section with cookie disclosure and opt-out links per Google publisher requirements.

5. Ad placement — Limited to one ad slot per page so content always exceeds advertising on each screen.

6. EEAT — About page identifies the founder; blog guides link to live tools; finance/health pages include YMYL disclaimers.

Please re-review calcuzy.app. Thank you.
```

## After approval

1. Set `ADS_ENABLED = true` in `lib/ads-config.ts` only when ad units are configured.
2. Increase `MAX_AD_SLOTS_PER_PAGE` gradually (e.g., 1 → 2) on content-heavy pages only.
3. Do not re-enable indexing on thin list pages until they have unique editorial content.
