# Deployment Guide for Printo

This guide will help you deploy your Printo application to Vercel easily.

## Prerequisites

1. **Node.js** (version 16 or higher)
2. **Git** (for version control)
3. **Vercel account** (free at [vercel.com](https://vercel.com))

## Quick Deployment Steps

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
```bash
npm install -g vercel
```

2. **Navigate to your project directory:**
```bash
cd /Users/deveshfuloria/Printo/Printo
```

3. **Login to Vercel:**
```bash
vercel login
```

4. **Deploy to production:**
```bash
npm run deploy
```

5. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name: **printo** (or your preferred name)
   - Directory: **./** (current directory)
   - Override settings? **No**

### Method 2: Deploy via GitHub Integration

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/printo.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

### Method 3: Manual Upload

1. **Build the project:**
```bash
npm run build
```

2. **Upload to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Drag and drop the `dist` folder
   - Click "Deploy"

## Project Configuration

The project is already configured for Vercel deployment with:

- ✅ **vercel.json** - Vercel configuration
- ✅ **Optimized Vite config** - Production build settings
- ✅ **Proper routing** - SPA routing support
- ✅ **Asset optimization** - Image and CSS optimization

## Build Configuration

### Vite Configuration
- **Output Directory**: `dist`
- **Assets Directory**: `assets`
- **Minification**: Terser
- **Code Splitting**: Vendor chunks
- **Source Maps**: Disabled for production

### Vercel Configuration
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: Configured for React Router

## Environment Variables

No environment variables are required for this project.

## Custom Domain (Optional)

1. **Add custom domain in Vercel dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add your domain
   - Follow DNS configuration instructions

## Performance Optimization

The project includes:
- ✅ **Image optimization** - WebP format images
- ✅ **CSS optimization** - Tailwind CSS with purging
- ✅ **JavaScript optimization** - Code splitting and minification
- ✅ **Lazy loading** - Modal components
- ✅ **Responsive images** - Multiple breakpoints

## Monitoring and Analytics

After deployment, you can:
- Monitor performance in Vercel dashboard
- View analytics and usage statistics
- Set up custom analytics (Google Analytics, etc.)

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (16+)
   - Run `npm install` to ensure dependencies are installed
   - Check for TypeScript errors

2. **Images not loading:**
   - Ensure image paths are correct
   - Check if images are in the `public` or `src` directory
   - Verify file extensions

3. **Routing issues:**
   - Ensure `vercel.json` is present
   - Check SPA routing configuration

4. **Styling issues:**
   - Verify Tailwind CSS is properly configured
   - Check CSS file imports

### Build Commands:

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
npm run deploy
```

## Post-Deployment Checklist

- [ ] Test all pages and functionality
- [ ] Verify responsive design on mobile
- [ ] Check all modal interactions
- [ ] Test image loading
- [ ] Verify navigation works
- [ ] Check form submissions
- [ ] Test search functionality
- [ ] Verify store locator
- [ ] Check social media links
- [ ] Test contact forms

## Support

If you encounter any issues:
1. Check the Vercel deployment logs
2. Review the build output
3. Test locally with `npm run preview`
4. Check the Vercel documentation

## Success! 🎉

Your Printo application should now be live on Vercel with a URL like:
`https://printo-xxxxx.vercel.app`

You can share this URL with users and it will work seamlessly across all devices!
