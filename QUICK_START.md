# 🚀 QUICK START DEPLOYMENT GUIDE

## Deploy to GitLab Pages in 10 Minutes

### Step 1: Create GitLab Account (if needed)
1. Go to https://gitlab.com
2. Sign up for free account
3. Verify your email

### Step 2: Create New Project
1. Click "New Project" button
2. Select "Create blank project"
3. Project name: `shrondajeanineco-website`
4. Visibility: Public (or Private if preferred)
5. Click "Create project"

### Step 3: Upload Your Files

**Option A: Use GitLab Web IDE (Easiest)**
1. In your new project, click "Web IDE" button
2. Click "Upload" and select all the files from the zip
3. Click "Create commit"
4. Type commit message: "Initial website deployment"
5. Click "Commit"

**Option B: Use Git Command Line**
```bash
# Navigate to your website folder
cd /path/to/downloaded/website/files

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial website deployment"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://gitlab.com/YOUR_USERNAME/shrondajeanineco-website.git

# Push to GitLab
git push -u origin main
```

### Step 4: Wait for Deployment (2-3 minutes)
1. Go to CI/CD → Pipelines
2. Watch the deployment pipeline run
3. Wait for green checkmark ✅

### Step 5: View Your Live Site!
Your site will be live at:
```
https://YOUR_USERNAME.gitlab.io/shrondajeanineco-website
```

## 🌐 Connect Your Custom Domain (shrondajeanineco.com)

### In GitLab:
1. Go to Settings → Pages
2. Click "New Domain"
3. Enter: `shrondajeanineco.com`
4. You'll see DNS instructions

### In Your Domain Provider (GoDaddy/Namecheap/etc):
1. Log into your domain provider
2. Go to DNS settings
3. Add these records:

**A Record:**
- Host: `@`
- Points to: `35.185.44.232`
- TTL: 3600

**TXT Record:**
- Host: `_gitlab-pages-verification-code`
- Value: (copy from GitLab)
- TTL: 3600

4. Wait 1-24 hours for DNS propagation

### Enable HTTPS:
1. In GitLab Pages settings
2. Check "Force HTTPS"
3. Certificate will auto-generate

## ⚡ IMMEDIATE UPDATES NEEDED

### 1. Activate Contact Forms (CRITICAL)
**Without this, you won't receive inquiries!**

1. Go to https://formspree.io
2. Sign up (free)
3. Create new form
4. Copy your form ID (looks like: `mzzbqpxx`)
5. In each HTML file, find: `action="https://formspree.io/f/YOUR_FORM_ID"`
6. Replace `YOUR_FORM_ID` with your actual ID
7. Save and push to GitLab

**Files to update:**
- index.html (line ~374)
- recovery-support.html (line ~197)
- abundant-harvest.html (line ~201)

### 2. Set Up Google Analytics (Track Visitors)
1. Go to https://analytics.google.com
2. Create account
3. Get tracking ID
4. Add code to all HTML files before `</head>`:

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

### 3. Create Google Business Profile (Local SEO)
1. Go to https://business.google.com
2. Add your business
3. Verify location
4. Add photos, hours, services
5. **This is critical for appearing in Google Maps!**

## 📱 REVENUE GENERATION SETUP

### Week 1 Priorities:
- ✅ Deploy website
- ✅ Set up Google Business Profile
- ✅ Create Facebook Business Page
- ✅ Create Instagram account
- ✅ Test all contact forms
- ✅ Add booking system (Calendly free account)

### Week 2:
- ✅ Run Facebook ads targeting Phoenix ($5-10/day)
- ✅ Join Phoenix recovery/wellness Facebook groups
- ✅ Partner with local treatment centers
- ✅ Network with social workers

### Ongoing:
- Post to blog 2x/month (resources.html)
- Respond to all inquiries within 24 hours
- Request reviews from satisfied clients
- Engage on social media daily

## 💰 IMPORTANT: Why NO AdSense

Your site is designed for CLIENT ACQUISITION, NOT ad revenue:

**AdSense Reality:**
- Needs 50,000+ visitors/month for $100-200/month
- Health/therapy sites often REJECTED
- Ads hurt professional credibility
- Distracts from client conversion

**Client Acquisition Reality:**
- 1 client = $500-2,000+ in revenue
- 5 meal prep clients/week = $10,000/month
- Focus on CONVERSIONS, not clicks

## 🔥 TROUBLESHOOTING

**Site not deploying?**
- Check CI/CD → Pipelines for errors
- Ensure `.gitlab-ci.yml` file exists
- Branch should be named `main`

**Forms not working?**
- Update Formspree form ID
- Check form action URL
- Test submission

**Custom domain not working?**
- Wait 24 hours for DNS
- Verify DNS records
- Use DNS checker tools

## 📞 NEXT STEPS CHECKLIST

- [ ] Deploy to GitLab Pages
- [ ] Update contact form IDs
- [ ] Set up Google Analytics
- [ ] Create Google Business Profile
- [ ] Set up Facebook & Instagram
- [ ] Add Calendly booking link
- [ ] Take professional photos
- [ ] Write first blog post
- [ ] Request 5 client reviews
- [ ] Run first Facebook ad

## 🎯 SUCCESS METRICS

Track these weekly:
- Website visitors (Google Analytics)
- Form submissions
- Phone calls
- Client bookings
- Social media engagement
- Google Business Profile views

**Goal:** 10 qualified leads/month → 2-3 new clients/month

---

**Your website is READY. Now focus on CLIENTS!** 🚀
