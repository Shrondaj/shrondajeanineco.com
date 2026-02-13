# Shronda Jeanine & Company Website

Professional, SEO-optimized website for holistic recovery support and nutrition programs in Phoenix, Arizona.

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Schema markup, meta tags, semantic HTML
- **Fast Loading** - Optimized CSS and JavaScript
- **Accessible** - WCAG compliant
- **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript
- **Easy to Update** - Clean, well-documented code

## 📁 Site Structure

```
shrondajeanineco-website/
├── index.html              # Homepage
├── recovery-support.html   # Recovery services page
├── abundant-harvest.html   # Nutrition program page
├── resources.html          # Blog and resources
├── privacy.html            # Privacy policy
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── .gitlab-ci.yml          # GitLab Pages deployment
└── README.md               # This file
```

## 🚀 GitLab Pages Deployment

### Automatic Deployment (Recommended)

1. **Create a GitLab Repository**
   - Go to GitLab.com
   - Click "New Project" → "Create blank project"
   - Name it `shrondajeanineco-website`
   - Set visibility to Public or Private
   - Click "Create project"

2. **Push Your Code**
   ```bash
   cd /path/to/shrondajeanineco-website
   git init
   git add .
   git commit -m "Initial commit - Complete website"
   git remote add origin https://gitlab.com/YOUR_USERNAME/shrondajeanineco-website.git
   git push -u origin main
   ```

3. **GitLab Pages Will Auto-Deploy**
   - GitLab CI/CD will automatically build and deploy
   - Your site will be live at: `https://YOUR_USERNAME.gitlab.io/shrondajeanineco-website`

4. **Custom Domain Setup**
   - Go to Settings → Pages in your GitLab project
   - Click "New Domain"
   - Enter `shrondajeanineco.com`
   - Add the DNS records shown to your domain provider
   - Enable HTTPS (recommended)

### Manual Deployment

If automatic deployment doesn't work:

```bash
mkdir public
cp *.html *.css *.js public/
git add public/
git commit -m "Add public folder"
git push
```

## 🔧 Customization

### Update Contact Form

The contact forms currently use Formspree placeholder. To activate:

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in the HTML files:
   ```html
   <form action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
   ```

### Update Phone Number & Email

Search and replace throughout all HTML files:
- Phone: `(602) 902-2677`
- Email: `shrondajeanine@shrondajeanineco.com`

### Add Social Media Links

Add to the footer in each HTML file:
```html
<div class="footer-section">
    <h4>Follow Us</h4>
    <a href="https://facebook.com/yourpage">Facebook</a>
    <a href="https://instagram.com/yourpage">Instagram</a>
</div>
```

### Update Colors

Edit `styles.css` at the `:root` section:
```css
:root {
    --primary-color: #2d5f4f;    /* Main green */
    --secondary-color: #d4a574;  /* Accent gold */
    /* ... other colors */
}
```

## 📊 SEO Optimization

### Current SEO Features

- ✅ Semantic HTML5 markup
- ✅ Schema.org LocalBusiness markup
- ✅ Optimized meta descriptions (150-160 characters)
- ✅ Keyword-rich page titles
- ✅ Alt text for images (add when images are added)
- ✅ Canonical URLs
- ✅ Open Graph tags for social sharing
- ✅ Fast loading (no heavy dependencies)
- ✅ Mobile-responsive

### Improve SEO Further

1. **Add Images**
   - Add professional photos to `/images/` folder
   - Include descriptive alt text
   - Compress images (use TinyPNG.com)

2. **Google Search Console**
   - Submit sitemap at `https://shrondajeanineco.com/sitemap.xml`
   - Monitor search performance

3. **Local SEO**
   - Create Google Business Profile
   - Get listed in Phoenix directories
   - Encourage client reviews

4. **Add Blog Content**
   - Post 1-2 articles per month to resources.html
   - Focus on Phoenix-specific recovery topics
   - Use keyword research tools

## 💰 Monetization (Client Acquisition Focus)

**Important:** This site is optimized for CLIENT ACQUISITION (which generates far more revenue than AdSense for therapy/wellness businesses).

### Why NOT Google AdSense?

- ❌ Health/therapy sites often rejected by AdSense
- ❌ Low revenue (needs 100k+ visitors/month for meaningful income)
- ❌ Ads distract from client conversion
- ❌ Unprofessional appearance for therapy services

### Revenue Optimization Strategy

1. **Client Bookings** (Primary Revenue)
   - Optimize contact forms for conversion
   - Add online booking system (Calendly, Acuity)
   - Follow up on all inquiries within 24 hours

2. **Abundant Harvest Sales**
   - Add product catalog
   - Implement payment system (Stripe, Square)
   - Offer subscription meal plans

3. **Workshop/Class Fees**
   - Create Eventbrite for workshops
   - Offer both free and paid classes
   - Package deals for multiple classes

4. **Grants & Funding**
   - Apply for nonprofit grants
   - Community foundation funding
   - SAMHSA grants for recovery services

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

Test on:
- Chrome DevTools
- Real devices
- Google Mobile-Friendly Test

## 🔒 Security & Privacy

- ✅ Privacy policy included
- ✅ HIPAA considerations mentioned
- ⚠️ Add SSL certificate (automatic with GitLab Pages)
- ⚠️ Review 42 CFR Part 2 compliance for recovery services

## 📈 Analytics Setup

Add Google Analytics to track visitors:

1. Create Google Analytics account
2. Get tracking ID
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🐛 Troubleshooting

### Site Not Deploying
- Check GitLab CI/CD pipelines (CI/CD → Pipelines)
- Ensure `.gitlab-ci.yml` is in root directory
- Verify branch name is `main` or `master`

### Styles Not Loading
- Check file paths are correct
- Ensure `styles.css` is in same directory as HTML files
- Clear browser cache

### Forms Not Working
- Update Formspree form ID
- Check form action URL
- Test form submission

## 📞 Support

For website issues or updates:
- **Email:** shrondajeanine@shrondajeanineco.com
- **Phone:** (602) 902-2677

## 📜 License

© 2026 Shronda Jeanine & Company. All rights reserved.

---

## ✅ Pre-Launch Checklist

- [ ] Update Formspree form IDs
- [ ] Test all contact forms
- [ ] Add professional photos
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Spell check all content
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Create social media accounts
- [ ] Add social media links to footer

## 🎯 Next Steps for Revenue Generation

1. **Week 1:** Deploy site, set up Google Business Profile, start collecting reviews
2. **Week 2:** Add online booking system, create social media presence
3. **Week 3:** Run local Facebook ads targeting Phoenix recovery community
4. **Week 4:** Partner with local treatment centers for referrals
5. **Ongoing:** Publish 2 blog posts/month, engage on social media, optimize based on analytics

**Remember:** Your revenue comes from CLIENTS, not ads. Focus on conversion optimization!
