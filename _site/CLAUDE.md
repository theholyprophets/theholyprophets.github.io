# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-powered website about Islamic prophets that provides educational content about the lives and teachings of Islamic prophets through multiple content types: biographical information, articles, videos, and gallery images. The site uses Tailwind CSS via CDN for styling and Jekyll for content management and templating.

## Architecture

The website follows Jekyll's standard structure with layouts, includes, collections, and data files:

### Layouts
- **default.html** - Base layout with navigation, footer, and meta tags
- **home.html** - Homepage layout with hero section and content sections
- **page.html** - Standard page layout with optional hero section
- **prophet.html** - Individual prophet biography layout
- **article.html** - Article layout with related articles section

### Collections
- **_prophets/** - Prophet biographies with front matter for metadata
- **_articles/** - Article content with categories and metadata
- **_videos/** - Video content (if needed for individual video pages)

### Data Files
- **_data/gallery.yml** - Gallery image data with categories and descriptions

### Key Pages
- **index.md** - Homepage
- **prophets.md** - Prophet listing with filtering and search
- **articles.md** - Article collection with category filtering
- **videos.md** - Video library with category filtering
- **gallery.md** - Image gallery with lightbox functionality

### Assets
- **assets/js/script.js** - JavaScript for interactive functionality
- **assets/css/styles.css** - Custom CSS for Islamic-themed styling

## Content Management

### Adding New Prophets
Create a new file in `_prophets/` with front matter:
```yaml
---
title: Prophet Name
title_arabic: Arabic name
subtitle: Brief description
description: Longer description
period: Time period
gradient: Tailwind gradient classes
categories: [major, messenger, early/late]
timeline_order: Number for chronological ordering
lessons:
  - title: Lesson title
    description: Lesson description
---
```

### Adding New Articles
Create a new file in `_articles/` with front matter:
```yaml
---
title: Article Title
category: biography/lessons/miracles
read_time: Number
date: YYYY-MM-DD
gradient: Tailwind gradient classes
category_color: Color for category badges
excerpt: Brief article summary
---
```

### Gallery Management
Edit `_data/gallery.yml` to add new gallery items:
```yaml
- title: "Image Title"
  description: "Image description"
  category: "architecture/calligraphy/historical/art"
  gradient: "Tailwind gradient classes"
  aspect: "square" or "3/4" (optional)
```

## Development Workflow

### Local Development
```bash
# Install dependencies (first time only)
bundle install

# Start development server
bundle exec jekyll serve

# With drafts
bundle exec jekyll serve --drafts

# Build for production
bundle exec jekyll build
```

### File Structure
```
├── _config.yml           # Jekyll configuration
├── Gemfile               # Ruby dependencies
├── _layouts/             # Page templates
├── _includes/            # Reusable page components
├── _prophets/            # Prophet collection
├── _articles/            # Article collection
├── _data/                # YAML data files
├── assets/               # CSS, JS, images
└── *.md                  # Pages (index, prophets, etc.)
```

## Styling Approach

- **Tailwind CSS**: Used via CDN for rapid UI development
- **Custom CSS**: Islamic-themed patterns, animations, and component styles in `assets/css/styles.css`
- **Typography**: Crimson Text (serif) for headings, Inter (sans-serif) for body text
- **Color Scheme**: Emerald/teal primary colors with amber accents
- **Responsive Design**: Mobile-first approach with breakpoint-specific adjustments

## JavaScript Features

The `assets/js/script.js` file provides:
- Mobile responsive navigation with hamburger menu
- Scroll-based animations using Intersection Observer
- Multi-page filtering system (prophets, articles, videos, gallery)
- Search functionality for prophets
- Carousel/slider functionality with touch support
- Lightbox for gallery images
- View toggle between grid and timeline layouts
- Form validation and notification system
- Accessibility features (reduced motion, focus management)

## Common Development Tasks

- **Adding content**: Create new markdown files in appropriate collections
- **Modifying layouts**: Edit files in `_layouts/` and `_includes/`
- **Updating data**: Edit YAML files in `_data/`
- **Styling changes**: Use Tailwind utility classes or add custom CSS to `assets/css/styles.css`
- **Interactive features**: Extend functionality in `assets/js/script.js`
- **Configuration**: Modify `_config.yml` for site-wide settings

## Deployment

The site can be deployed to:
- **GitHub Pages**: Automatic deployment from repository
- **Netlify**: Drag and drop `_site` folder or connect repository
- **Static hosting**: Upload `_site` folder contents to any web server

Build command: `bundle exec jekyll build`
Output directory: `_site/`