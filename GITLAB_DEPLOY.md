# GitLab Pages Deployment Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Upload Files to GitLab

1. Go to your GitLab repository
2. Navigate to the root directory
3. Upload these files (or use Git):
   - `index.html`
   - `content.js`
   - `app.js`
   - `styles.css`
   - `.gitlab-ci.yml`
   - `README.md` (optional)

### Step 2: GitLab Auto-Deploys

GitLab Pages will automatically build and deploy your site when you commit.

### Step 3: Access Your Site

Your site will be live at:
```
https://yourusername.gitlab.io/yourproject
```

Or if you have a custom domain configured, it will use that.

## 📁 File Structure in GitLab

```
your-repository/
├── .gitlab-ci.yml   # Auto-deployment config
├── index.html       # Main HTML structure
├── styles.css       # All styling
├── content.js       # ⭐ EDIT THIS to update content
├── app.js          # Application logic
└── README.md       # Documentation
```

## ✏️ How to Update Content

### Method 1: GitLab Web Editor (Easiest)

1. Go to your repository on GitLab
2. Click on `content.js`
3. Click **Edit** button
4. Make your changes
5. Click **Commit changes**
6. GitLab auto-deploys (takes ~1 minute)
7. Refresh your site - changes are live! ✨

### Method 2: Local Git (If you use Git)

```bash
# Clone your repo
git clone https://gitlab.com/yourusername/yourproject.git
cd yourproject

# Edit content.js in your text editor
nano content.js  # or use VS Code, etc.

# Commit and push
git add content.js
git commit -m "Updated services pricing"
git push

# GitLab auto-deploys
```

## 🎨 Common Updates

### Change Phone Number
1. Edit `content.js`
2. Find and replace `(602) 902-2677`
3. Save/commit

### Add New Service
1. Edit `content.js`
2. Find `services.offerings` array
3. Add new service object:
```javascript
{
    icon: "🌟",
    title: "New Service",
    description: "Description here",
    price: "$99/session"
}
```

### Update Membership Pricing
1. Edit `content.js`
2. Find `membership.tiers`
3. Change price values

### Add Blog Post
1. Edit `content.js`
2. Find `blog.posts`
3. Add new post object

## 🔧 Troubleshooting

### Site not updating?
- Check GitLab CI/CD pipeline status (Settings → CI/CD → Pipelines)
- Make sure `.gitlab-ci.yml` is in root directory
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Error?
- Make sure `index.html` is in the root directory
- Check GitLab Pages is enabled (Settings → Pages)

### Build failed?
- Check `.gitlab-ci.yml` is properly formatted
- Look at the pipeline error logs in GitLab

## 💡 Pro Tips

1. **Test locally first**: Open `index.html` in a browser before committing
2. **Use GitLab's Web IDE**: Edit multiple files at once
3. **Keep backups**: GitLab automatically versions your files
4. **Preview changes**: GitLab shows you a diff before committing

## 📞 Need Help?

- **GitLab Pages Docs**: https://docs.gitlab.com/ee/user/project/pages/
- **Check pipeline status**: Your-repo → CI/CD → Pipelines
- **View site logs**: Your-repo → Deployments → Pages

---

Your site is now live and easy to update! 🎉
