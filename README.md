# The Holy Prophets - Landing Page

A validation landing page for an interactive Islamic prophets learning platform.

## Setup on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select `main` (or `develop`) branch and `/ (root)` folder
5. Click **Save**

Your site will be live at: `https://[username].github.io/[repo-name]/`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file with your domain (e.g., `theholyprophets.com`)
2. Configure DNS at your domain registrar:
   - For apex domain: Add `A` records pointing to GitHub's IPs
   - For subdomain: Add `CNAME` record pointing to `[username].github.io`

## Email Collection

Email signups are handled via [Kit.com](https://kit.com) (formerly ConvertKit). Subscribers appear in your Kit dashboard.

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Kit.com for email collection
