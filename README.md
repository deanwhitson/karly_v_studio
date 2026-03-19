# Karly V Studio

A modern, minimalist, editorial-style personal website built with React and Tailwind CSS.

## Features

- **Clean, Editorial Design**: Minimalist aesthetic with thoughtful typography and generous whitespace
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **Subtle Animations**: Smooth fade-in effects and gentle transitions
- **Component-Based Architecture**: Reusable React components for maintainability
- **Custom Design System**: Tailwind CSS configuration with custom color palette and typography

## Design Principles

- Clean, calm, and intentional (not startup/tech looking)
- Editorial / magazine feel (like a high-end essay publication)
- Lots of whitespace
- Elegant typography (serif for headings, sans-serif for body)
- Soft, neutral color palette (off-white, charcoal, muted tones)
- Subtle animations only (fade-in, gentle transitions)

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Playfair Display (serif) and Inter (sans-serif)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation header with scroll effects
│   ├── Hero.js        # Landing section with call-to-action
│   ├── About.js       # About section with bio and stats
│   ├── Work.js        # Portfolio grid with project previews
│   ├── Contact.js     # Contact information and form
│   └── Footer.js      # Site footer with links and info
├── App.js             # Main app component
├── index.css          # Global styles and Tailwind imports
└── index.js           # React DOM entry point
```

## Customization

### Color Palette
- Off-white (`#FAFAF9`) - Main background
- Warm white (`#FFFBF5`) - Accent background
- Charcoal (`#2C2C2C`) - Primary text
- Medium gray (`#6B6B6B`) - Secondary text
- Light gray (`#A8A8A8`) - Muted text
- Pale gray (`#E8E8E8`) - Borders and dividers
- Accent (`#8B7355`) - Brand accent color

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- Custom font sizes and line heights for optimal readability

## Deployment

Ready for deployment to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

The build command creates optimized static files in the `build` directory.
