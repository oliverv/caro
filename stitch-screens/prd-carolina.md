# Product Requirements Document (PRD) & Design Brief
**Project:** Carolina Barcellona · Women's Health & Longevity 40+ (Plan Gran Diosa)  
**Deliverable:** Web Suite & Interactive Digital Experience  
**Status:** Completed / Production-Ready  
**Version:** 1.0.0  

---

## 1. Executive Summary & Vision

### 1.1 Product Overview
The **Carolina Barcellona Web Suite** is a high-converting, editorial-grade web experience tailored for **Women's Health & Longevity 40+**. Built upon Carolina Barcellona's proprietary clinical framework—**El Método Código Diosa**—the website repositions menopause, perimenopause, and metabolic health not as aging decline, but as a biological transition that can be optimized through epigenetics, precision lifestyle medicine, and functional movement.

### 1.2 Core Objectives
- **Elevate Brand Authority**: Transition from a generic nutritionist aesthetic to a science-backed, high-end longevity clinic look (inspired by editorial longevity platforms like *Peak Method*).
- **Drive Conversions**: Direct traffic towards qualified leads through a multi-tiered conversion funnel:
  1. *Bible Sheet 🌺*: Free diagnostic intake & lead capture.
  2. *Discovery Call*: 20-minute Calendly consultation.
  3. *High-Ticket Program*: El Método Diosa 180-day transformation (6 × 160 €/month or 960 € single payment).
- **Integrate Original Assets & Copy**: Preserve 100% authentic clinical copy, real patient reviews, verified accreditations, and original imagery from Carolina Barcellona.

---

## 2. Target Audience & User Personas

### 2.1 Primary Persona: "Elena" (The High-Performing Woman 40+)
- **Demographics**: Woman, 42–56 years old; residing in Madrid, European capitals (Paris, London, Geneva, Zurich), or remote worldwide.
- **Pain Points**:
  - Experiencing sudden hot flashes, midnight insomnia, cognitive brain fog, and unexplained visceral fat accumulation.
  - Frustrated with standard medical dismissal ("it's just age") or restrictive generic diets that damage metabolic rate.
- **Desires**: Rigorous, scientific biohacking combined with compassionate human guidance; sustainable energy; feeling strong and radiant in her body.
- **Conversion Trigger**: Empathy, verified clinical credentials, transparent pricing, and seamless booking.

---

## 3. Brand Identity & Design System

### 3.1 Design Direction & Mood
- **Style Archetype**: *Warm Editorial Wellness & Longevity*.
- **Visual Rhythm**: High-contrast editorial typography, generous negative space, warm organic textures, subtle glassmorphic overlays (`backdrop-blur`), and architectural framing (soft arch photography containers).

### 3.2 Color Tokens (*Plan Gran Diosa* Palette)
| Token Name | Hex Code | Purpose |
|---|---|---|
| **Primary (Warm Coral)** | `#FF6161` | Primary CTA buttons, key highlight accents, active badges |
| **Accent (Berry / Frambuesa)** | `#EE295C` | Emphasized badge text, micro-accents, special tags |
| **Warm Amber (Solar)** | `#F69C05` | Warning/attention highlights, secondary badge accents |
| **Noble Gold (Olive Gold)** | `#C7A46B` | Premium credentials, luxury accents, partner stamps |
| **Surface (Warm Linen)** | `#FFF8F7` | Global background canvas, soothing non-sterile tone |
| **Surface Container Low** | `#FFF0F0` | Card containers, diagnostic question blocks |
| **Text Main (Deep Charcoal)** | `#2B2525` | High-contrast editorial body copy |

### 3.3 Typography Stack
- **Display & Headings**: `Vollkorn` (Warm serif conveying medical pedigree and editorial elegance).
- **Body & Functional UI**: `Plus Jakarta Sans` / System Sans-serif (Clean, readable, clinical clarity).

---

## 4. Information Architecture & Key Page Modules

The web suite is organized into a cohesive long-form landing page accompanied by interactive states:

### 4.1 Master Landing Page Sections
1. **Persistent Global Navigation**:
   - Original bilingual brand wordmark.
   - Anchor navigation: *Inicio, Sobre mí, El Método Código Diosa, Planes & Axo, Artículos, Contacto*.
   - Language selector (`ES` | `EN` | `FR`).
   - Sticky direct conversion button: *"Aplicar al Método"*.
2. **Hero Section**:
   - Headline: *"Reprograma tu biología: El arte de habitar en ti"*.
   - Subhead: Epigenetic nutrition, metabolic sovereignty, and lifestyle medicine.
   - Architectural arched portrait of Carolina in nature.
   - Trust proof points: *6+ Años de Trayectoria*, *100% Personalizado*, *5.0 en Google Reviews*.
3. **Trayectoria & Clinical Credentials**:
   - Bio narrative highlighting Carolina's transition into functional medicine.
   - Certification badges: *Nirakara Labs · Universidad Complutense de Madrid*, *UCAM Nutrición Ortomolecular*, *IKYTA Kundalini Yoga & Mindfulness*.
   - Quote block on biological sovereignty and nervous system coherence.
4. **Diagnostic Symptoms Grid ("Después de los 40, tu cuerpo habla un idioma nuevo")**:
   - 6 Interactive Symptom Cards: *Sofocos*, *Insomnio y despertares*, *Cambios de ánimo*, *Niebla mental*, *Cansancio mitocondrial*, *Resistencia metabólica*.
5. **Functional Movement & Longevity Pillar**:
   - *"Músculo: El órgano de la longevidad"*—strength training without metabolic exhaustion.
6. **4-Phase Roadmap Timeline**:
   - *Paso 0: Diagnóstico* (Semana 0–2)
   - *Fase 1: Activación* (Meses 1–2)
   - *Fase 2: Construcción* (Meses 3–4)
   - *Fase 3: Optimización & Longevidad* (Meses 5–6)
7. **The Offer: Plan Integral El Método Diosa (180 Días)**:
   - 9-point comprehensive breakdown (1:1 sessions, functional movement, orthomolecular supplementation protocol, direct WhatsApp concierge).
   - Strategic Partnership Card: **Axo Longevity** (+100 biomarkers blood panel with coupon `CARO` for €50 off).
   - Clear pricing: 6 payments of €160/month or €960 one-time.
8. **Native Interactive Bible Sheet 🌺**:
   - Full Google Forms integration directly embedded inside an styled responsive container, complete with fullscreen modal toggle.
9. **Patient Proof & Verified Stories**:
   - Verbatim testimonials from real clients (Raquel Llorente, Carmen Moreno, Vanesa Carolina) with 5-star ratings and Google verification tags.
10. **Scientific FAQ Accordion**:
    - Detailed answers regarding qualifications, why it is not a fad diet (addressing MLM/Herbalife objections), supplementation guidelines, and climacteric care.
11. **Clinical Contact & Studio Pozuelo**:
    - Structured 3-step valuation form, physical clinic location (*Biolifestyle Studio Pozuelo, Madrid*), international patient protocol, and Calendly / WhatsApp links.
12. **Footer & Global WhatsApp Concierge**:
    - Legal policies, cookie policy, Sunday newsletter subscription, and floating WhatsApp contact button.

---

## 5. Interactive UI States

### 5.1 Slide-Out Navigation Drawer (`Screen 3`)
- **Trigger**: Mobile/desktop hamburger menu toggle.
- **UX Behavior**: Backdrop-blur overlay preventing page interaction, staggered menu items, quick links to *Bible Sheet*, and direct WhatsApp/Instagram/LinkedIn links.

### 5.2 Success Confirmation Modal (`Screen 5`)
- **Trigger**: Submission of the valuation inquiry or diagnostic form.
- **UX Behavior**:
  - Warm confirmation badge: *"¡Solicitud Recibida con Éxito!"*.
  - Commitment to reply within <24 working hours.
  - Immediate action buttons: Agendar videollamada 20 min (Calendly) & Consultar vía WhatsApp.
  - 3-step timeline review indicator.

---

## 6. Technical Specifications & Stack

- **Markup & Styling**: Semantic HTML5, Tailwind CSS utilities with custom CSS variables for design system tokens.
- **Responsive Breakpoints**:
  - Desktop: 1440px / 1280px container max-widths.
  - Tablet/Mobile: Responsive flex-col stacks, touch-friendly tap targets (minimum 44x44px).
- **Performance & Media**:
  - Image assets loaded via secure CDN paths with explicit aspect ratios to avoid Cumulative Layout Shift (CLS).
  - Native browser smooth scrolling (`scroll-smooth`) and keyboard-accessible accordion states.
- **Integrations**:
  - Google Forms (Bible Sheet autodiagnosis iframe).
  - Calendly (20-min video discovery call).
  - WhatsApp Business API (direct concierge chat).

---

## 7. Deliverables & Artifact Index

| Artifact ID | Name / Description | Format |
|---|---|---|
| `{{DATA:SCREEN:SCREEN_7}}` | **Carolina Barcellona - Con Formulario Bible Sheet Integrado** (Production Master) | Renderable HTML/CSS Screen |
| `{{DATA:SCREEN:SCREEN_3}}` | **Carolina Barcellona - Menú Desplegado (Drawer)** (Navigation State) | Renderable HTML/CSS Screen |
| `{{DATA:SCREEN:SCREEN_5}}` | **Carolina Barcellona - Estado Éxito Formulario (Modal)** (Conversion State) | Renderable HTML/CSS Screen |
| `{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}` | **Warm Editorial Wellness** (Design Tokens & Styles) | Design System |
| `{{DATA:DOCUMENT:DOCUMENT_32}}` | Extracted Live Web Copy & Clinical Content | Document |
| `{{DATA:IMAGE:IMAGE_23}}` – `{{DATA:IMAGE:IMAGE_29}}` | Original Photography & Brand Assets | High-Resolution Images |
