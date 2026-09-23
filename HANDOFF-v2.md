# CARO — Production Handoff v2 ("El Método Código Diosa")

Site: `caro-rosy-zeta.vercel.app` · Spec: client feedback Sep 2026 · Implemented: 2026-09-23
Preview: `http://127.0.0.1:4173/` (run `npm run preview -- --port 4173`)
Verify: `npx tsc --noEmit` clean · `npm run build` succeeds · 0 stale "90-day" strings in bundle.

Single source of truth: `src/data/codigoDiosa.ts` (plan length, links, phases, payments, pain points).

## §0 Brand assets — PARTIAL (files missing, scaffolding live)

- Palette already matched spec (`#FF6161 #F8CFD5 #EE295C #F69C05 #F6F1EA #C7A46B`) — method card + dossier restyled to cream/gold; dark-navy/pink CTA styling removed from these surfaces.
- Type stacks wired in `src/index.css`: `TAN Tangkiwood` → Vollkorn fallback · `The Something Script` → Ms Madi (interim Google fallback) · `Garet` → Plus Jakarta Sans fallback. Utilities `font-display` / `font-script` used in dossier + card.
- Logo: `src/components/BrandMark.tsx` loads `public/assets/Logo-C_barcellona_bicolor_2.jpg` first, auto-falls-back to current wordmark. Header, mobile drawer, footer all use it.
- **TODO (Oliver):** drop `Logo-C_barcellona_bicolor_2.jpg` + moodboard into `public/assets/` (exact filename, no code change needed); add licensed font files via `@font-face` in `src/index.css` when received.

## §1 Partners — DONE (baseline links)

- `Official Partners` blocks on: method card (`PracticalAreas.tsx`), dossier modal (`ProgramModal.tsx`), plan page (`PlanesPage.tsx`), site strip (`Collaborations.tsx` — replaces generic lab names).
- Axo → `https://axo.link/carolina` · Epixlife → `https://epixlife.com/informe-optimizacion/`.
- **TODO (Carolina):** any extra explanatory copy for the Axo blocks.

## §2 Plan & pricing — DONE (price pending state)

- 180 days / 6 months everywhere; old 90-day / €750 framing fully removed (grep-verified, incl. `server.ts`, `geminiService.ts` fallbacks).
- Price card = "Precio a consultar … pendiente de confirmación" + WhatsApp fallback. No number published.
- Payments: Stripe + Klarna (plan page + footer; replaces Bizum/PayPal/Transferencia).
- Axo/Epixlife shown as external add-ons, "se compran en sus webs".

## §3 Apply flow — DONE

- All "Aplicar" CTAs → confirmed form `1FAIpQLSfKDIAwk20xEIZWxstOqi2-L51rfwUAhV9ymJI3vy_ZgqE5Vw`.
- Second form link (`…Sd98nx_XUr…`) intentionally NOT implemented — flagged in code comment (`codigoDiosa.ts`).

## §4 Detail landing (dossier modal) — DONE

- Hero + expanded pain chips: falta de tiempo · cambios en el cuerpo · falta de energía · **sofocos · insomnio · cambios en el estado de ánimo**.
- "Esto no es otro programa de fitness" block; partners; price-pending card; testimonials pending note. All copy original.

## §5 Method structure — DONE

- Diagnóstico ("Eres única y tus necesidades también lo son…") → Activación → Reparación o Construcción → Optimización, rendered as one continuous flow with connector line + "cada dato alimenta las fases" note.
- On-page B/N/M/H pillar section left intact (content pillars, not the retired journey framing) — flag if it should also become the phase flow.

## §6 About Carolina — PROPOSAL ONLY (not published)

Bio blend + CTA options A/B drafted in previous session report — awaiting her sign-off. Current live bio untouched.

## §7 Outstanding before production

1. Final € price (180d) — then replace `pricePending` + "Precio a consultar" strings.
2. Second Google Form purpose.
3. Axo explanatory info (optional).
4. Bio + CTA A/B sign-off.
5. Which testimonials are cleared.
6. Logo / moodboard / font files (see §0).

## Key element IDs (QA)

`#program-modal-container` `#modal-cta-apply` `#modal-cta-whatsapp` `#btn-explorar-diosa-90` (details) `#btn-aplicar-diosa` `#collab-axo` `#collab-epixlife` `#practical-areas-title` `#area-cuerpo`
