# Shronda Jeanine & Company - Modern Website

A beautiful, single-page website with smooth transitions and easy content management.

## ✨ Key Features

- **Single-Page Architecture**: Smooth transitions between sections with no page reloads
- **Easy Content Updates**: All content is stored in `content.js` - update text without touching HTML
- **Beautiful UI/UX**: Organic, warm design with flowing animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Fast Performance**: Lightweight vanilla JavaScript (no frameworks needed)

## 📁 File Structure

```
your-site/
├── index.html      # Main HTML structure (rarely needs editing)
├── styles.css      # All styling (can customize colors/fonts here)
├── content.js      # ⭐ EDIT THIS to update all site content
└── app.js          # Application logic (handles routing & animations)
```

## 🎯 How to Update Content

### Step 1: Open `content.js`

This file contains ALL your site content in one easy-to-edit place:

```javascript
const SITE_CONTENT = {
    hero: {
        title: "Restoring Wholeness. Building Abundance.",
        // ... edit any text here
    },
    about: {
        // ... edit about section
    },
    services: {
        // ... edit services
    },
    // etc.
}
```

### Step 2: Edit the Content

You can update:
- ✅ All text and headings
- ✅ Service descriptions and pricing
- ✅ Membership tiers and features
- ✅ Blog posts
- ✅ Testimonials
- ✅ Contact information
- ✅ Links and CTAs

### Step 3: Save and Refresh

That's it! Your changes will appear immediately when you refresh the page.

## 🎨 Customizing Colors & Fonts

Open `styles.css` and edit the CSS variables at the top:

```css
:root {
    /* Colors */
    --color-primary: #C85C3F;      /* Main brand color */
    --color-secondary: #7A9B76;     /* Secondary accent */
    --color-accent: #D4A574;        /* Highlights */
    
    /* Fonts */
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'Karla', sans-serif;
}
```

### To Change Fonts:

1. Go to [Google Fonts](https://fonts.google.com)
2. Choose your fonts
3. Copy the `<link>` code
4. Replace the font link in `index.html` (line 10)
5. Update the font variables in `styles.css`

## 📱 Sections Included

1. **Home** - Hero section with main CTA
2. **About** - Mission, philosophy, founder bio, values
3. **Services** - All service offerings with pricing
4. **Membership** - Three membership tiers
5. **Community** - Community programs and initiatives
6. **Blog** - Latest blog posts (customizable)
7. **Contact** - Contact form and information

## 🚀 Deployment

### Deploy to Vercel (Current Host):

1. Push all files to your GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy! ✨

The site will be live at your Vercel URL.

### Deploy to Other Platforms:

This is a static site, so it works on:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

Just upload all 4 files to your hosting provider.

## 🆘 Need Help?

### Common Tasks:

**Q: How do I add a new service?**
A: Open `content.js`, find the `services.offerings` array, and add a new object:

```javascript
{
    icon: "🌟",
    title: "New Service Name",
    description: "Service description here",
    price: "$99/session"
}
```

**Q: How do I change the phone number?**
A: Search for "602-902-2677" in `content.js` and replace all instances.

**Q: How do I add a new blog post?**
A: Add to the `blog.posts` array in `content.js`:

```javascript
{
    date: "December 1, 2025",
    title: "Your Post Title",
    excerpt: "Brief description...",
    icon: "✨",
    link: "#blog"
}
```

**Q: How do I change colors?**
A: Edit the CSS variables at the top of `styles.css`

## 💡 Pro Tips

1. **Keep backups**: Save a copy of `content.js` before making major changes
2. **Test locally**: Open `index.html` in a browser before deploying
3. **Gradual updates**: Change one section at a time and test
4. **Use emojis**: The current design uses emojis as icons - keep this style consistent

## 🎨 Design Philosophy

This site uses:
- Warm earth tones (terracotta, sage, cream)
- Elegant serif headings (Cormorant Garamond)
- Clean sans-serif body text (Karla)
- Smooth, flowing animations
- Generous whitespace
- Organic, natural aesthetic

## 📞 Support

For technical questions or customization help, reach out to your developer or consult the code comments in each file.

---

Built with care for Shronda Jeanine & Company ✨
