# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS — no build step, no framework; served as flat files or via any static host.

## Users

Primary: **recruiters and hiring managers** evaluating Natnael Tilahun for software engineering roles or internships. Secondary: **potential freelance clients** assessing technical capability, and **fellow developers** exploring project work. Visitors arrive from LinkedIn, GitHub, X, or a shared link and need to form a hire/no-hire judgment within 30 seconds.

## Product Purpose

A personal developer portfolio that proves Natnael Tilahun is a strong hire. It consolidates projects, technical skills, a downloadable CV, and a direct contact channel into a single page so a visitor can evaluate competence, review work samples, and take action (download resume or send a message) without leaving the site.

## Positioning

A self-contained, zero-dependency portfolio that loads instantly on any device. No framework overhead, no backend — everything a visitor needs is on one page with immediate access to proof (project screenshots, GitHub links, resume PDF).

## Operating Context

Visitors land on the portfolio from a social profile link or shared URL. Typical flow: scan profile → browse projects → download CV or send a contact message. The site runs as a static deployment (GitHub Pages or equivalent) with no server-side processing. Contact form submissions are handled by FormSubmit (third-party email relay).

## Capabilities and Constraints

- Single-page portfolio with profile section, stats, project showcase, skills display, and contact modal.
- Dark/light theme toggle via settings gear icon.
- Tab-based navigation switching between Portfolio (project cards with detail modals) and Skills (icon grid).
- Project detail modals display image, description, tech stack badges, and GitHub repository link.
- CV download triggers a browser download of a local PDF file.
- Contact form posts to FormSubmit API — no backend required.
- No routing, no JavaScript framework, no build pipeline.
- All assets (images, PDF) are local to the repository.

## Brand Commitments

- Name: **Natnael Tilahun**
- Title: Computer Science Student
- No binding visual constraints — open to evolution as long as the portfolio serves its purpose.

## Evidence on Hand

- Profile photo: `Icons/ProfilePicturepng.jpg`
- Project screenshots: `Icons/Online_Banking.png`, `Icons/Expense-Tracker.png`, `Icons/Workout-tracker.jpg`
- Resume PDF: `My-Resume.pdf`
- Live GitHub repositories for each showcased project.
- No testimonials, case studies, or press. Future work must not fabricate these.

## Product Principles

1. **Prove, don't claim.** Every section backs up competence with evidence — real projects with real links, a downloadable resume, working screenshots.
2. **Respect the visitor's time.** A recruiter scanning 50 portfolios needs to get the signal in under 30 seconds. Structure and hierarchy serve speed.
3. **Zero friction to act.** Download CV and Contact Me are always one click away, never buried.
4. **Ship light.** No build tools, no framework overhead. The portfolio loads fast on any connection and deploys anywhere static files are served.
5. **Grow with the developer.** The structure supports adding projects, skills, and experience without architectural changes.

## Accessibility & Inclusion

WCAG AA contrast compliance confirmed via Impeccable detector. No product-specific accessibility requirements established beyond standard web accessibility best practices.
