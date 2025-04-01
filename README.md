# Build to Wear

A minimal, editorial-style website for Build to Wear, optimized for GitHub Pages deployment.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/riadumitrescu/buildtowear.git
cd buildtowear
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 🛠️ Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build directories

## 📦 Project Structure

```
buildtowear/
├── src/              # Source files
│   ├── assets/      # Static assets
│   ├── components/  # Reusable components
│   ├── styles/      # Global styles
│   └── js/          # JavaScript files
├── public/          # Public static files
├── docs/           # Production build (deployed to GitHub Pages)
└── vite.config.js  # Vite configuration
```

## 🔧 Build Optimization

- Minified JavaScript with Terser
- Optimized CSS with PostCSS and CSSNano
- Asset optimization and inlining
- Source maps for debugging
- GitHub Pages base path configuration

## 📝 License

This project is private and confidential. 