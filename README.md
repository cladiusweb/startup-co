<div align="center">

# 🤖 StartupCo
### Next-Generation B2B Autonomous Robotics & Deterministic Embedded Software

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-049EF4?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Build Status](https://img.shields.io/badge/CI-Passing-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>Unifying physical hardware mechanics and intelligent software into a single, sub-millisecond deterministic core.</b>
  <br />
  Engineered for aerospace, automotive, and mission-critical automated production lines.
</p>

[Explore Solutions](#-core-solutions-showcase) • [Architecture](#-system-architecture) • [Getting Started](#-installation--quickstart) • [API Reference](#-api-specifications) • [Contributing](#-contributing)

</div>

---

## ⚡ Executive Overview

**StartupCo** is an enterprise deep-tech digital platform and corporate interface representing an autonomous robotics and embedded systems manufacturer. 

The application is built with **Next.js 14 (App Router)**, **React 18**, **Three.js / React Three Fiber**, and **Vanilla CSS Design Tokens**, presenting an ultra-minimalist, high-performance Swiss engineering aesthetic with zero layout bloat.

### Key Engineering Benchmarks
| Metric | Specification | Verification Standard |
| :--- | :--- | :--- |
| **Microkernel Cycle Latency** | `< 0.25 ms` | SynapseOS RTOS Deterministic Loop |
| **Operational Reliability** | `99.999% (Five Nines)` | 24/7 Industrial Automated Stress Test |
| **Kinematic Precision** | `± 0.02 mm Repeatability` | Aerospace Titanium-Carbon 6-DOF Frame |
| **Functional Safety Rating** | `ASIL-D / ISO-26262` | Redundant Fail-Safe Hardware Isolation |

---

## 🌟 Core Solutions Showcase

```
+-----------------------------------------------------------------------------------+
|                            STARTUPCO UNIFIED CORE                                 |
+-----------------------------------------------------------------------------------+
|  [ APEXARM MANIPULATOR ]   |   [ SYNAPSEOS MICROKERNEL ]   |   [ IRISVISION AI ]  |
|  • 6-DOF Articulation     |   • Hard Real-Time Determinism|   • Sub-mm Edge Vision|
|  • Titanium-Carbon Frame   |   • Memory Space Isolation    |   • Defect Neural Net|
|  • 1,450 mm Work Radius    |   • Priority Inversion Safe   |   • 1,200 FPS Pipeline|
+-----------------------------------------------------------------------------------+
```

### 1. ApexArm 6-DOF Industrial Manipulator
- **Structure**: Aerospace-grade titanium-carbon articulated segments offering optimal weight-to-payload efficiency.
- **Payload Capacity**: Engineered for rapid pick-and-place, micro-welding, and precision assembly lines.
- **Dynamic CAD Schematic**: Integrated vector CAD schematic view with live interactive engineering specs.

### 2. SynapseOS Deterministic RTOS Microkernel
- **Hard Real-Time Guarantees**: Guaranteed actuator command dispatch under 250 microseconds without priority inversion.
- **Memory Protection**: Isolated process memory pools; third-party inference crashes never compromise physical robot safety.

### 3. IrisVision Optical Inspection Suite
- **Optical Accuracy**: 1,200 FPS telecentric optical cameras with on-device tensor processing.
- **Quality Assurance**: Detects microscopic surface fractures and assembly misalignments before finished units exit the cell.

---

## 📸 Interactive Showcase Highlights

- **Bespoke Engineering CAD Visualizer**: Vector-accurate technical blueprint (`StudioRoboticArmVisual.js`) displaying rotational joints (J1–J6), actuator housings, and working envelope guidelines.
- **Micro-Interactions & Transitions**: Smooth, accessible viewport animations powered by Framer Motion (`FadeUp.js`).
- **Validated B2B Lead Engine**: Corporate contact form (`MinimalContactForm.js`) paired with an optimized Next.js Route Handler (`/api/contact`) providing instant client-side validation and request ID tokenization.
- **Modular Subpage Structure**:
  - `/` — Homepage: Hero manifesto, enterprise metrics, core pillars, interactive CAD diagram, and B2B contact CTA.
  - `/urunler` — Hardware & software product line catalog (ApexArm, SynapseOS, IrisVision, SentinelCloud).
  - `/teknoloji` — Deep-dive engineering manifesto, architectural principles, and safety certifications.
  - `/hakkimizda` — Company background, engineering pedigree, leadership vision, and research laboratory.
  - `/iletisim` — Dedicated corporate consultation, demonstration booking, and NDA-guaranteed inquiries.

---

## 🏗️ System Architecture

```
startupco/
├── .github/
│   ├── workflows/
│   │   └── ci.yml                 # Automated CI/CD pipeline (Lint & Production Build)
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md          # Structured bug report template
│   │   └── feature_request.md     # Feature and enhancement proposal template
│   └── PULL_REQUEST_TEMPLATE.md   # Standardized code review checklist
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js           # Server-side API endpoint for B2B inquiries
│   ├── fonts/                     # Self-hosted typography assets
│   ├── hakkimizda/
│   │   └── page.js                # Corporate overview & vision
│   ├── iletisim/
│   │   └── page.js                # Contact & consultation interface
│   ├── teknoloji/
│   │   └── page.js                # Engineering manifesto & RTOS deep-dive
│   ├── urunler/
│   │   └── page.js                # Industrial product catalog & specs
│   ├── favicon.ico                # Multi-resolution browser icon
│   ├── globals.css                # Comprehensive design tokens, layout & utilities
│   ├── icon.svg                   # Vector brand favicon
│   ├── layout.js                  # Root layout, metadata, SEO openGraph & typography
│   ├── page.js                    # Enterprise landing page
│   └── page.module.css            # Scoped layout styles
├── components/
│   ├── FadeUp.js                  # Viewport scroll animation wrapper
│   ├── Footer.js                  # Semantic footer with corporate links & legal
│   ├── Logo.js                    # Brand vector mark with precision geometry
│   ├── MinimalContactForm.js      # Interactive form with feedback states & confetti
│   ├── Navbar.js                  # Sticky glassmorphism header with active states
│   ├── StudioRoboticArmVisual.js  # Scalable vector CAD schematic component
│   └── ToastNotification.js       # Non-intrusive status toast system
├── public/                        # Static assets, diagrams, and media
├── .eslintrc.json                 # Strict ESLint configuration
├── .gitignore                     # Git tracking exclusions (Node, Next, caches)
├── CONTRIBUTING.md                # Development workflow and PR guidelines
├── LICENSE                        # MIT Open Source License
├── next.config.mjs                # Next.js optimization & environment configuration
├── package.json                   # Project dependencies and operational scripts
└── README.md                      # Primary project documentation
```

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `14.2.35` | Server-Side Rendering, App Router, Static Optimization |
| **Core Library** | [React](https://react.dev/) | `18.x` | Declarative component UI model |
| **CAD Visuals** | Vector SVG / CSS3 | Modern | Lightweight, high-precision industrial robotics schematics |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) | `13.2.x` | Hardware-accelerated viewport transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | `1.45.x` | Clean, lightweight SVG technical icons |
| **Feedback** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) | `1.9.x` | Success micro-celebration on demo booking |
| **Styling** | Vanilla CSS Tokens | CSS3 / HSL | High-efficiency design system without compiler overhead |
| **Code Quality** | ESLint & Next Linter | `8.x` | Standardized JavaScript linting |

---

## 🚀 Installation & Quickstart

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm** (`v9+`), **pnpm** (`v8+`), or **yarn** (`v1.22+`)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/startupco.git
cd startupco
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Environment Setup (Optional)
Copy the example environment file if integrating third-party mailers or CRM services:
```bash
cp .env.example .env.local
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**. Hot-reload will reflect changes instantly.

### 5. Production Build & Validation
```bash
# Validate code formatting and linting
npm run lint

# Generate production-optimized build
npm run build

# Start production server
npm run start
```

---

## 📡 API Specifications

### `POST /api/contact`
Processes B2B lead generation requests with server-side validation and simulated database transaction latency.

#### Request Headers
```http
Content-Type: application/json
```

#### Request Payload
```json
{
  "fullName": "Alexander Vance",
  "companyName": "Vance Industrial Robotics GmbH",
  "workEmail": "a.vance@vance-robotics.de",
  "interest": "ApexArm 6-DOF Manipulator",
  "message": "We would like to request technical specifications for cleanroom integration."
}
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "referenceId": "REQ-M7XY89",
  "message": "Talebiniz alınmıştır. Ekibimiz en kısa sürede iletişime geçecektir."
}
```

#### Error Response (`400 Bad Request`)
```json
{
  "success": false,
  "error": "Lütfen ad soyad, şirket adı ve kurumsal e-posta alanlarını doldurunuz."
}
```

---

## 🚢 Deployment Guidelines

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js 14 and configures the optimal build preset (`next build`).
4. Set any required environment variables in the project settings.
5. Click **Deploy**.

### Self-Hosted Deployment (Node.js & PM2)
```bash
# Build the production bundle
npm run build

# Run via PM2 process manager
pm2 start npm --name "startupco" -- start -- -p 3000
```

### Docker Deployment
```dockerfile
# Multi-stage production Dockerfile
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. **Fork the Project** (`https://github.com/your-username/startupco/fork`)
2. **Create your Feature Branch** (`git checkout -b feature/AutonomousPerception`)
3. **Commit your Changes** (`git commit -m 'feat: add telecentric vision module'`)
4. **Push to the Branch** (`git push origin feature/AutonomousPerception`)
5. **Open a Pull Request** via the GitHub web UI.

Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting code.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms and copyright notices.

---

<div align="center">
  <sub>Developed with precision by <b>StartupCo Robotics Lab</b> • Designed for the future of deterministic industrial automation.</sub>
</div>
