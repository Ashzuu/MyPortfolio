# Portfolio Website

A modern, responsive portfolio website built with **Nuxt 4** and **Vue 3**. Showcase your projects, music, and connect with visitors through a beautiful, interactive interface.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and responsive design using Vue 3 components
- 🎵 **Music Section** - Dedicated space to showcase your music or audio projects
- 🚀 **Projects Showcase** - Display your projects with detailed information
- 📧 **Contact Section** - Easy-to-use contact form for visitors
- ⚡ **High Performance** - Built on Nuxt 4 with optimized bundle size
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **SEO Friendly** - Server-side rendering for better search engine visibility
- 🛠️ **Modern Stack** - TypeScript, Vue 3, and latest Nuxt features

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ (with npm, yarn, pnpm, or bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or use your preferred package manager:
   ```bash
   # pnpm
   pnpm install
   
   # yarn
   yarn install
   
   # bun
   bun install
   ```

### Development

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

The application will automatically reload when you make changes to the code.

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
portfolio/
├── app/                          # Main application files
│   ├── app.vue                  # Root component
│   ├── assets/                  # Static assets
│   │   └── css/                # Stylesheets
│   │       ├── style.css        # Global styles
│   │       ├── contact-section.css
│   │       ├── music-section.css
│   │       ├── primary-section.css
│   │       ├── project-section.css
│   │       └── components/      # Component-specific styles
│   └── components/              # Vue components
│       ├── FirstSectionComponent.vue      # Hero/intro section
│       ├── ProjectSectionComponent.vue    # Projects showcase
│       ├── MusicSectionComponent.vue      # Music section
│       ├── ContactSectionComponent.vue    # Contact form
│       └── usable/              # Reusable components
│           ├── Badge.vue
│           └── Button.vue
├── public/                      # Static files
├── nuxt.config.ts              # Nuxt configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Project dependencies

```

## 🔧 Configuration

### Nuxt Configuration

The project uses Nuxt 4 with the following modules:

- **@nuxt/eslint** - Code linting and formatting
- **@nuxt/fonts** - Font management
- **@nuxt/icon** - Icon system

See `nuxt.config.ts` for more details.

### TypeScript

TypeScript is configured in `tsconfig.json` for type safety across the project.

## 📦 Technologies Used

- **[Nuxt 4](https://nuxt.com/)** - The intuitive Vue framework
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Sass](https://sass-lang.com/)** - Advanced CSS preprocessor
- **ESLint** - Code quality and consistency

## 🎨 Customization

### Adding Content

1. **First Section** - Edit `FirstSectionComponent.vue` to customize your intro/hero section
2. **Projects** - Modify `ProjectSectionComponent.vue` to showcase your projects
3. **Music** - Update `MusicSectionComponent.vue` for your music content
4. **Contact** - Customize `ContactSectionComponent.vue` with your contact information

### Styling

Global styles are in `app/assets/css/style.css`. Component-specific styles are located in their respective CSS files.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site
- `npm run postinstall` - Prepare Nuxt after install

## 🚀 Deployment

This project can be deployed to various platforms. Check the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific instructions.

Popular deployment options:
- **Vercel** - Optimized for Nuxt
- **Netlify** - One-click deployment
- **GitHub Pages** - Free static hosting
- **Docker** - Containerized deployment

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests to help improve this project.

## 📧 Contact

Have questions or feedback? Reach out through the contact section on the portfolio website.

---

**Made with ❤️ by Ashzuu using Nuxt 4 and Vue 3**

