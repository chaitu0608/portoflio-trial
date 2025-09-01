# Portfolio Website Boilerplate

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark theme with beautiful gradients and animations.

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx   # Button component
│   │   ├── card.tsx     # Card component
│   │   ├── section.tsx  # Section layout components
│   │   └── ...          # Other UI components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience section
│   ├── Education.tsx    # Education section
│   ├── Projects.tsx     # Projects section
│   ├── TechStack.tsx    # Skills/Tech stack section
│   ├── Navigation.tsx   # Navigation component
│   └── Footer.tsx       # Footer component
├── data/                # Data and content
│   └── portfolio.ts     # All portfolio data
├── types/               # TypeScript type definitions
│   └── index.ts         # Type definitions
├── hooks/               # Custom React hooks
│   └── useScrollSpy.ts  # Scroll spy hook
├── utils/               # Utility functions
│   └── animations.ts    # Animation utilities
├── constants/           # App constants
│   └── index.ts         # Configuration constants
├── pages/               # Page components
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
├── index.css           # Global styles and design system
└── main.tsx            # App entry point
```

## 🎨 Design System

The project uses a comprehensive design system defined in `src/index.css`:

### Colors
- **Primary**: Blue gradient (`#667eea`)
- **Secondary**: Dark grays for cards and sections
- **Accent**: Gradient variations for visual interest
- All colors use HSL format for better theme consistency

### Gradients
- `--gradient-primary`: Main brand gradient
- `--gradient-secondary`: Secondary accent gradient
- `--gradient-accent`: Additional accent gradient
- `--text-gradient`: Text gradient for headings

### Shadows
- `--shadow-glow`: Glowing effect for interactive elements
- `--shadow-card`: Card depth shadows

## 📁 Key Files

### Data Management
- **`src/data/portfolio.ts`**: Contains all portfolio content (personal info, projects, experience, etc.)
- **`src/types/index.ts`**: TypeScript interfaces for type safety

### Components
- **`src/components/ui/section.tsx`**: Reusable layout components (Section, SectionHeader, Container)
- **Individual section components**: Hero, About, Experience, etc.

### Utilities
- **`src/utils/animations.ts`**: Animation and scroll utilities
- **`src/hooks/useScrollSpy.ts`**: Hook for navigation active states

## 🚀 Getting Started

### 1. Customize Your Data
Edit `src/data/portfolio.ts` to add your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ...
};

export const contactInfo = {
  email: "your.email@example.com",
  phone: "+1234567890",
  // Update URLs to your actual profiles
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  // ...
};
```

### 2. Update Projects
Add your projects in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project",
    subtitle: "Project Type",
    description: "Project description...",
    tech: ["React", "TypeScript", "etc"],
    type: "Web Application",
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com"
  },
  // ...
];
```

### 3. Customize Colors (Optional)
Update the color scheme in `src/index.css`:

```css
:root {
  --primary: 210 100% 50%; /* Your primary color in HSL */
  --gradient-primary: linear-gradient(135deg, #your-color1, #your-color2);
  /* ... */
}
```

### 4. Add Your Resume
- Place your resume PDF in the `public` folder
- Update `resumeUrl` in `src/data/portfolio.ts`

## 🎯 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Beautiful dark theme with gradients
- **Smooth Animations**: Hover effects and transitions
- **Type Safety**: Full TypeScript support
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Modular Architecture**: Easy to extend and maintain

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Lucide React** for icons
- **shadcn/ui** components
- **React Router** for navigation

## 📱 Sections Included

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal description and background
3. **Experience**: Work experience and achievements
4. **Education**: Educational background
5. **Projects**: Featured projects with links
6. **Tech Stack**: Technical skills organized by category
7. **Footer**: Contact information and social links

## 🎨 Customization Tips

### Adding New Sections
1. Create a new component in `src/components/`
2. Add data to `src/data/portfolio.ts`
3. Import and use in `src/pages/Index.tsx`

### Changing Animations
- Update animation utilities in `src/utils/animations.ts`
- Modify CSS animations in `src/index.css`

### Adding New UI Components
- Place reusable components in `src/components/ui/`
- Follow the existing pattern for consistency

## 🚀 Deployment

The project is ready for deployment on any static hosting service:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Deploy from Git
- **GitHub Pages**: Use GitHub Actions

## 📝 License

This boilerplate is free to use for personal and commercial projects.

---

**Happy coding! 🎉**