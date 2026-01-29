# 🏗️ Haute Developers - Expressway Residency

> Government-Approved Residential Plots on Delhi-Meerut Expressway (NE-3)

[![Deploy Status](https://github.com/yourusername/hautedevelopers/workflows/Deploy%20to%20Production/badge.svg)](https://github.com/yourusername/hautedevelopers/actions)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev/)

## 🌟 Features

- 🏡 **Property Listings** - Showcase of residential plots on Delhi-Meerut Expressway
- 📝 **Online Registration** - Complete registration form with EmailJS integration
- 💳 **Payment Information** - Secure payment details with copy-to-clipboard functionality
- 📱 **Fully Responsive** - Mobile-first design with smooth animations
- 🎨 **Modern UI** - Beautiful gradients, animations, and interactive elements
- ⚡ **Lightning Fast** - Optimized with Vite and code splitting
- 🔍 **SEO Optimized** - Complete meta tags, structured data, and sitemap

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hautedevelopers.git
cd hautedevelopers

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your EmailJS credentials

# Start development server
npm run dev
```

Visit `http://localhost:3000`

## 📦 Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Automated (Recommended)

Push to `main` branch - GitHub Actions will automatically build and deploy!

```bash
git add .
git commit -m "Your message"
git push origin main
```

### Manual Deployment Options

**Quick Deploy (Windows):**
```bash
deploy.bat
```

**Quick Deploy (Mac/Linux):**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Vercel:**
```bash
npm i -g vercel
vercel --prod
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📁 Project Structure

```
hautedevelopers/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── public/
│   ├── robots.txt             # SEO crawler instructions
│   ├── sitemap.xml            # Site structure for search engines
│   └── _redirects             # SPA routing config
├── src/
│   ├── components/            # React components
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── RegistrationForm.jsx
│   │   ├── UpcomingProjects.jsx
│   │   └── ...
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── .env.example              # Environment template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_REGISTRATION_TEMPLATE_ID=your_registration_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create templates for Contact and Registration
4. Copy credentials to `.env`

## 📊 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Tech Stack

- **Frontend:** React 19.2
- **Build Tool:** Vite 7.2
- **Routing:** React Router DOM 7.13
- **Styling:** CSS3 with custom properties
- **Animations:** AOS (Animate On Scroll)
- **Email:** EmailJS
- **Icons:** React Icons
- **Deployment:** GitHub Actions + GitHub Pages

## 📈 Performance

- ⚡ Lighthouse Score: 90+
- 🎯 First Contentful Paint: < 1.8s
- 📦 Optimized bundle with code splitting
- 🖼️ Lazy loaded images
- 🗜️ Minified and compressed assets

## 🔍 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph for social sharing
- ✅ Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Canonical URLs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.
© 2026 Haute Developers. All rights reserved.

## 📞 Contact

**Haute Developers**
- Website: [hautedevelopers.com](https://hautedevelopers.com)
- Email: hautedevelopers2@gmail.com

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Detailed deployment instructions
- [Deployment Complete](./DEPLOYMENT_COMPLETE.md) - Setup completion checklist

---

Made with ❤️ by Haute Developers
