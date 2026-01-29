# Haute Developers - Deployment Guide

## 🚀 Automated Deployment (CI/CD)

This project uses GitHub Actions for automated deployment. Every push to `main` branch automatically builds and deploys the site.

### Setup Instructions:

1. **Add GitHub Secrets** (Required for EmailJS):
   - Go to: Repository → Settings → Secrets and variables → Actions
   - Add the following secrets:
     ```
     VITE_EMAILJS_SERVICE_ID=service_u5ylylg
     VITE_EMAILJS_TEMPLATE_ID=template_34dqkl8
     VITE_EMAILJS_REGISTRATION_TEMPLATE_ID=template_3z79n5c
     VITE_EMAILJS_PUBLIC_KEY=zFqKU2QymbtNzgodj
     ```

2. **Enable GitHub Pages**:
   - Go to: Repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/` (root)
   - Custom domain: `hautedevelopers.com` (if applicable)
   - Save

3. **Push to Deploy**:
   ```bash
   git add .
   git commit -m "Deploy update"
   git push origin main
   ```

## 📦 Manual Build & Deploy

### Build for Production:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

### Deploy to Various Platforms:

#### Vercel:
```bash
npm i -g vercel
vercel --prod
```

#### Netlify:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Docker:
```bash
docker build -t hautedevelopers .
docker run -p 80:80 hautedevelopers
```

## 🔍 SEO Checklist

✅ Sitemap.xml added
✅ Robots.txt configured
✅ Meta tags optimized
✅ Open Graph tags
✅ Twitter cards
✅ Structured data (Schema.org)
✅ Canonical URLs
✅ Mobile responsive
✅ Fast loading (optimized build)

## 🌐 Post-Deployment Steps

1. **Submit Sitemap to Google**:
   - Go to: [Google Search Console](https://search.google.com/search-console)
   - Add property: `https://hautedevelopers.com`
   - Submit sitemap: `https://hautedevelopers.com/sitemap.xml`

2. **Verify Domain**:
   - Add DNS TXT record from Google Search Console
   - Verify ownership

3. **Monitor Performance**:
   - Google Analytics (if configured)
   - PageSpeed Insights
   - Core Web Vitals

## 🛡️ Environment Variables

Create `.env` file (already in `.gitignore`):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_REGISTRATION_TEMPLATE_ID=your_registration_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📊 Performance Optimizations

- ✅ Code splitting enabled
- ✅ Tree shaking configured
- ✅ Console logs removed in production
- ✅ Minification enabled
- ✅ Lazy loading images
- ✅ CSS optimization

## 🔒 Security

- Environment variables secured
- No sensitive data in client code
- HTTPS enforced (via hosting platform)
- CORS properly configured

## 📱 Testing

Before deployment, test:
```bash
npm run build
npm run preview
```

Check:
- All pages load correctly
- Forms submit successfully
- Images display properly
- Mobile responsiveness
- EmailJS integration works

## 🆘 Troubleshooting

**Build fails?**
- Check all dependencies: `npm install`
- Clear cache: `rm -rf node_modules dist && npm install`

**EmailJS not working?**
- Verify environment variables are set in GitHub Secrets
- Check EmailJS dashboard for API limits

**Site not updating?**
- Clear browser cache
- Wait 2-3 minutes for GitHub Pages to update
- Check GitHub Actions logs

## 📞 Support

For deployment issues, contact: hautedevelopers2@gmail.com
