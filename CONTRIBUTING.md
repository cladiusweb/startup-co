# Contributing to StartupCo

Thank you for your interest in contributing to StartupCo! We welcome contributions that improve performance, expand features, refine design aesthetics, or resolve bugs.

---

## 🛠️ Development Workflow

### 1. Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0` or higher
- **Git**

### 2. Fork and Clone
```bash
git clone https://github.com/your-username/startupco.git
cd startupco
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your local instance.

---

## 📋 Code Standards & Guidelines

1. **Linting**:
   Before committing, always run:
   ```bash
   npm run lint
   ```
   Ensure zero errors and warnings.

2. **Production Build Verification**:
   Always test that the production bundle builds without errors:
   ```bash
   npm run build
   ```

3. **Styling & Design System**:
   - Use CSS variables defined in [app/globals.css](file:///c:/Users/S1RALUC4RD/Desktop/startupco/app/globals.css) (HSL colors, border radius, typography hierarchy).
   - Maintain the ultra-minimalist, high-contrast engineering aesthetic.

4. **Git Commit Conventions**:
   Use conventional commits:
   - `feat:` for new features or capabilities
   - `fix:` for bug fixes
   - `docs:` for documentation updates
   - `style:` for formatting or CSS adjustments
   - `refactor:` for code reorganization without feature change
   - `chore:` for dependency or build config updates

---

## 🚀 Submitting a Pull Request

1. Create a descriptive feature branch: `git checkout -b feat/telecentric-lens`
2. Commit your changes with clear messages.
3. Push to your fork: `git push origin feat/telecentric-lens`
4. Submit a Pull Request against the `master` branch.
5. Fill in the Pull Request template completely.
