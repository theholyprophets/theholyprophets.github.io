# TheHolyProphets.com

A beautiful Jekyll-powered website dedicated to exploring the lives and teachings of Islamic prophets. Built with modern web technologies and designed with Islamic aesthetics in mind.

## 🌟 Features

- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Prophet Biographies**: Detailed pages for each prophet with lessons and teachings
- **Article Collection**: Educational articles about prophetic stories and wisdom
- **Interactive Gallery**: Islamic art and historical sites with lightbox functionality
- **Video Library**: Curated video content about the prophets
- **Search & Filtering**: Easy navigation through content with multiple filter options
- **Islamic Design**: Authentic Islamic patterns, calligraphy, and color schemes

## 🚀 Live Demo

Visit the live site: [TheHolyProphets.com](https://theholyprophets.com)

## 🛠️ Built With

- **Jekyll** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Markdown** - Content management
- **YAML** - Data management

## 📁 Project Structure

```
├── _config.yml           # Jekyll configuration
├── Gemfile               # Ruby dependencies
├── _layouts/             # Page templates
│   ├── default.html      # Base layout
│   ├── home.html         # Homepage layout
│   ├── page.html         # Standard page layout
│   ├── prophet.html      # Prophet biography layout
│   └── article.html      # Article layout
├── _includes/            # Reusable components
│   ├── navigation.html   # Site navigation
│   ├── footer.html       # Site footer
│   └── *.html           # Other components
├── _prophets/            # Prophet collection
├── _articles/            # Article collection
├── _data/                # YAML data files
│   └── gallery.yml       # Gallery images data
├── assets/               # Static assets
│   ├── css/styles.css    # Custom CSS
│   └── js/script.js      # JavaScript
└── *.md                  # Pages (index, prophets, etc.)
```

## 🔧 Local Development

### Prerequisites

- Ruby (2.7 or higher)
- Bundler gem

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/the-holy-prophets-html.git
   cd the-holy-prophets-html
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   ```
   http://localhost:4000
   ```

### Development Commands

```bash
# Start development server
bundle exec jekyll serve

# Start with drafts
bundle exec jekyll serve --drafts

# Build for production
bundle exec jekyll build

# Clean build files
bundle exec jekyll clean
```

## 📝 Content Management

### Adding New Prophets

Create a new file in `_prophets/` directory:

```yaml
---
title: Prophet Name
title_arabic: Arabic name
subtitle: Brief description
description: Longer description
period: Time period
gradient: from-emerald-500 to-teal-600
categories: [major, messenger, early]
timeline_order: 10
lessons:
  - title: Lesson Title
    description: Lesson description
---

Prophet biography content in Markdown...
```

### Adding New Articles

Create a new file in `_articles/` directory:

```yaml
---
title: Article Title
category: biography
read_time: 5
date: 2024-03-15
gradient: from-emerald-400 to-teal-500
category_color: emerald
excerpt: Brief article summary
---

Article content in Markdown...
```

### Managing Gallery

Edit `_data/gallery.yml`:

```yaml
- title: "Image Title"
  description: "Image description"
  category: "architecture"
  gradient: "from-emerald-400 to-teal-500"
  aspect: "square"
```

## 🚀 GitHub Pages Deployment

This site is configured for easy deployment to GitHub Pages.

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"

3. **Configure Custom Domain (Optional)**
   - Add a `CNAME` file with your domain
   - Configure DNS settings with your domain provider

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
bundle exec jekyll build

# The _site folder contains your built website
# Upload contents to your web server
```

### GitHub Pages Configuration

The site includes a `.github/workflows/jekyll.yml` file for GitHub Actions deployment:

```yaml
name: Build and deploy Jekyll site to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  github-pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/configure-pages@v1
      - uses: actions/upload-pages-artifact@v1
        with:
          path: _site/
      - uses: actions/deploy-pages@v1
```

## 🎨 Customization

### Colors and Styling

- Edit `assets/css/styles.css` for custom styles
- Modify Tailwind classes in templates
- Update color scheme in `_config.yml`

### Layout Modifications

- Edit layout files in `_layouts/`
- Modify component files in `_includes/`
- Update navigation in `_data/navigation.yml`

## 📱 Responsive Design

The site is built with a mobile-first approach:

- **Mobile**: Single column layout
- **Tablet**: Two column grid
- **Desktop**: Three+ column grid with advanced features

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion support
- High contrast mode compatibility

## 🔍 SEO Features

- Meta tags and Open Graph
- Structured data markup
- XML sitemap generation
- RSS feed
- Optimized loading performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.

## 🙏 Acknowledgments

- Islamic calligraphy and geometric patterns inspiration
- Tailwind CSS for the utility-first approach
- Jekyll community for the amazing static site generator
- All contributors who help make this project better

---

**Built with ❤️ for the Muslim community**