# 🚀 Deployment Guide — Akshata Mhase Portfolio

---

## STEP 1 — Set Up EmailJS (Mail Notifications)

> Every time someone fills your contact form, you will get an email in your inbox.

### 1.1 Create Account
1. Go to **https://www.emailjs.com** → Sign Up (free)
2. Confirm your email

### 1.2 Connect Your Gmail
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** → click **Connect Account**
3. Sign in with `akshatasmhase123@gmail.com`
4. **Copy the Service ID** (looks like `service_xxxxxx`) — save it

### 1.3 Create Email Template
1. Dashboard → **Email Templates** → **Create New Template**
2. Set **Subject** to:
   ```
   New Portfolio Message from {{from_name}}
   ```
3. Set **Body** to:
   ```
   Name:    {{from_name}}
   Email:   {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
4. Set **To Email** → `akshatasmhase123@gmail.com`
5. Click **Save** → **Copy the Template ID** (looks like `template_xxxxxx`)

### 1.4 Get Your Public Key
1. Dashboard → **Account** → **General**
2. Copy **Public Key** (looks like `xxxxxxxxxxxxxxxxxxxxxx`)

### 1.5 Create Your .env File
In the project root, create a file named `.env`:
```
VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key_here
VITE_EMAILJS_SERVICE_ID=paste_your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=paste_your_template_id_here
```

---

## STEP 2 — Add Your Resume

1. Place your PDF file in the **`public/`** folder:
   ```
   public/Akshata_Sopan_Mhase.pdf
   ```
2. The portfolio already links to it — no other changes needed.

---

## STEP 3 — Install & Run Locally

```bash
# 1. Open terminal in the project folder
cd akshata-portfolio

# 2. Install dependencies
npm install

# 3. Start local server
npm run dev

# Open http://localhost:5173 in your browser
```

---

## STEP 4 — Deploy to Vercel (Recommended — Free & Fast)

> ✅ Best option. Auto-deploys on every Git push. Free custom domain.

### 4.1 Push to GitHub
```bash
# In the project folder:
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main

# Create a repo on github.com, then:
git remote add origin https://github.com/akshata1805/portfolio.git
git push -u origin main
```

### 4.2 Deploy on Vercel
1. Go to **https://vercel.com** → Sign Up with GitHub
2. Click **New Project** → Import your portfolio repo
3. Framework: **Vite** (auto-detected)
4. Click **Environment Variables** → Add all 3 from your `.env`:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
5. Click **Deploy**
6. Your site is live at: `https://your-project.vercel.app`

### 4.3 Custom Domain (Optional)
1. Vercel Dashboard → your project → **Domains**
2. Add domain (e.g., `akshata.dev` or `akshata.vercel.app`)

---

## STEP 5 — Deploy to Netlify (Alternative — Also Free)

### 5.1 Build the Project
```bash
npm run build
# Creates a `dist/` folder
```

### 5.2 Deploy
1. Go to **https://netlify.com** → Sign Up
2. Drag & drop the **`dist/`** folder onto the Netlify dashboard
3. Site is live instantly!

### 5.3 Add Environment Variables on Netlify
1. Site Settings → **Environment Variables** → Add Variable
2. Add the same 3 EmailJS variables

---

## STEP 6 — Deploy to GitHub Pages (Free, no backend needed)

### 6.1 Update vite.config.js
```js
// Change base to your repo name:
base: '/portfolio/',  // or whatever your repo is named
```

### 6.2 Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 6.3 Add deploy script to package.json
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

### 6.4 Deploy
```bash
npm run deploy
```

### 6.5 Enable GitHub Pages
1. GitHub repo → **Settings** → **Pages**
2. Source: **Deploy from branch** → `gh-pages`
3. Live at: `https://akshata1805.github.io/portfolio/`

---

## STEP 7 — Update Content Anytime

All portfolio content is in **one file**:
```
src/data/portfolioData.js
```

Edit name, links, projects, skills, books, etc. there — the whole site updates automatically.

---

## Quick Checklist Before Launch

- [ ] `.env` file created with real EmailJS keys
- [ ] Tested contact form locally (check Gmail inbox)
- [ ] Resume PDF placed in `public/` folder
- [ ] All project GitHub links correct
- [ ] `npm run build` runs without errors
- [ ] Deployed and live URL works
- [ ] EmailJS environment variables added in Vercel/Netlify
- [ ] Contact form tested on live site

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Contact form says "Could not send" | Check EmailJS keys in `.env` — make sure no spaces |
| Resume 404 | Make sure file is in `public/` folder, exact name match |
| Blank page after deploy | Check browser console; add `base: '/repo-name/'` in vite.config.js if on GitHub Pages |
| Stars/cursor not visible | Clear browser cache, try incognito |
| Local server won't start | Run `npm install` again |

---

*Portfolio built with React + Vite · EmailJS for notifications · Deploy on Vercel for best experience*
