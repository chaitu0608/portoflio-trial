# Premium Dark Portfolio

A modern, minimal, and aesthetic dark portfolio website built with React, TypeScript, and Tailwind CSS. Features glassmorphism effects, Three.js animations, and a premium design system.

## ✨ Features

### 🎨 Design & UI
- **Premium Dark Theme**: Deep charcoal backgrounds with teal accent colors
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Neumorphism Elements**: Subtle 3D effects and shadows
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion micro-interactions
- **Three.js Background**: Animated gradient bokeh and particle effects

### 🚀 Technical Features
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** component library
- **Framer Motion** for animations
- **React Three Fiber** for 3D graphics
- **Data-driven Content**: YAML/JSON content management
- **CV Export**: HTML and text CV generation
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance Optimized**: Lazy loading and code splitting

### 📱 Pages & Sections
- **Home**: Hero section with animated avatar and call-to-action
- **About**: Personal story with stats and fun facts
- **Projects**: Showcase with filtering and detailed project cards
- **Skills**: Technical skills with proficiency indicators
- **Contact**: Modal with contact information and social links

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI framework
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool
- **Tailwind CSS 3.4.17** - Styling

### UI & Animation
- **shadcn/ui** - Component library
- **Framer Motion 11.0.0** - Animations
- **Lucide React** - Icons
- **React Three Fiber** - 3D graphics
- **@react-three/drei** - Three.js helpers

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript linting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portoflio-trial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── glass-card.tsx
│   │   ├── floating-dock.tsx
│   │   ├── project-card.tsx
│   │   └── background-canvas.tsx
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   └── Navigation.tsx   # Navigation bar
├── data/                # Content data
│   ├── portfolio.ts     # Main portfolio data
│   ├── projects.yml     # Projects data
│   ├── experience.yml   # Experience data
│   └── skills.json      # Skills data
├── lib/                 # Utilities
│   ├── utils.ts         # General utilities
│   ├── content.ts       # Content loading
│   └── cv-export.ts     # CV export functionality
├── pages/               # Page components
│   └── Index.tsx        # Main page
├── styles/              # Styling
│   └── index.css        # Global styles
└── types/               # TypeScript types
    └── index.ts         # Type definitions
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep charcoal (#0b0f12)
- **Secondary**: Gradient teal to purple to indigo
- **Accent**: Soft cyan (#20E3B2)
- **Gold**: Subtle gold for highlights (#F6AD55)

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (body text)
- **Mono**: JetBrains Mono (code)

### Components
- **GlassCard**: Frosted glass effect with backdrop blur
- **FloatingDock**: Bottom navigation with smooth animations
- **ProjectCard**: Interactive project showcase cards
- **BackgroundCanvas**: Three.js animated background

## 📝 Content Management

### Adding Projects
Edit `src/data/projects.yml`:

```yaml
- slug: my-project
  title: My Project
  subtitle: Project Description
  description: Detailed project description
  tech: ["React", "TypeScript", "Tailwind"]
  category: "Web Application"
  link: "https://example.com"
  repo: "https://github.com/username/repo"
```

### Adding Experience
Edit `src/data/experience.yml`:

```yaml
- company: "Company Name"
  title: "Job Title"
  period: "2023 - Present"
  achievements:
    - "Achievement 1"
    - "Achievement 2"
```

### Adding Skills
Edit `src/data/skills.json`:

```json
{
  "frontend": {
    "category": "Frontend Development",
    "skills": [
      {
        "name": "React",
        "level": 90,
        "years": "3+",
        "description": "Building modern UIs"
      }
    ]
  }
}
```

## 🎯 Features in Detail

### Glassmorphism Design
- Backdrop blur effects
- Semi-transparent backgrounds
- Subtle borders and shadows
- Smooth hover transitions

### Three.js Background
- Animated gradient spheres
- Particle system
- Mouse parallax effects
- Performance optimized

### CV Export
- HTML format with styling
- Text format for plain text
- Automatic data generation
- Download functionality

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Customization

### Changing Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: 173 80% 40%;        /* Teal */
  --accent: 173 80% 40%;         /* Teal */
  --background: 220 13% 9%;      /* Dark */
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Add to navigation in `src/data/portfolio.ts`
3. Import and use in `src/pages/Index.tsx`

### Modifying Animations
Update Framer Motion configurations in components:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting provider

## 📊 Performance

### Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Three.js components loaded on demand
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Optimized bundle size
- **Tree Shaking**: Unused code elimination

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the component library
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **React Three Fiber** for 3D graphics
- **Lucide** for beautiful icons

## 📞 Contact

**Chaitanya Dhamdhere**
- Email: c.dhamdhere@somaiya.edu
- GitHub: [@chaitu0608](https://github.com/chaitu0608)
- LinkedIn: [Chaitanya Dhamdhere](https://www.linkedin.com/in/chaitanya-dhamdhere/)

---

Built with ❤️ using React, TypeScript, and modern web technologies.