// Global Variables
let currentFilter = 'all';
let isAnimating = false;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupMobileMenu();
    setupScrollAnimations();
    setupFilterFunctionality();
    setupSearchFunctionality();
    setupCarousel();
    setupLightbox();
    setupViewToggle();
    setupSmoothScrolling();
    setupLoadingStates();
    setupFormValidation();
}

// Mobile Menu Functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate hamburger icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
    }
}

// Scroll Animations using Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for cards
                if (entry.target.classList.contains('prophet-card') || 
                    entry.target.classList.contains('article-card') ||
                    entry.target.classList.contains('video-card')) {
                    
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .prophet-card, .article-card, .video-card, .gallery-item');
    animatedElements.forEach(el => {
        observer.observe(el);
        
        // Initial state for cards
        if (el.classList.contains('prophet-card') || 
            el.classList.contains('article-card') ||
            el.classList.contains('video-card')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
        }
    });
}

// Filter Functionality for Prophets, Articles, Videos, Gallery
function setupFilterFunctionality() {
    // Prophet filters
    const prophetFilters = document.querySelectorAll('.filter-btn');
    prophetFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            if (isAnimating) return;
            
            const filter = this.dataset.filter;
            currentFilter = filter;
            
            // Update active state
            prophetFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter prophet cards
            filterProphetCards(filter);
        });
    });
    
    // Article category filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active state
            categoryFilters.forEach(b => {
                b.classList.remove('active');
                b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
                b.classList.remove('bg-emerald-600', 'text-white');
            });
            
            this.classList.add('active', 'bg-emerald-600', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            
            // Filter articles
            filterArticles(category);
        });
    });
    
    // Video filters
    const videoFilters = document.querySelectorAll('.video-filter');
    videoFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active state
            videoFilters.forEach(b => {
                b.classList.remove('active');
                b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
                b.classList.remove('bg-emerald-600', 'text-white');
            });
            
            this.classList.add('active', 'bg-emerald-600', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            
            // Filter videos
            filterVideos(category);
        });
    });
    
    // Gallery filters
    const galleryFilters = document.querySelectorAll('.gallery-filter');
    galleryFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active state
            galleryFilters.forEach(b => {
                b.classList.remove('active');
                b.classList.add('bg-gray-100', 'text-gray-700');
                b.classList.remove('bg-emerald-600', 'text-white');
            });
            
            this.classList.add('active', 'bg-emerald-600', 'text-white');
            this.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Filter gallery items
            filterGalleryItems(filter);
        });
    });
}

// Filter Prophet Cards
function filterProphetCards(filter) {
    isAnimating = true;
    const cards = document.querySelectorAll('.prophet-card');
    
    cards.forEach((card, index) => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        const shouldShow = filter === 'all' || categories.includes(filter);
        
        setTimeout(() => {
            if (shouldShow) {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }, index * 50);
    });
    
    setTimeout(() => {
        isAnimating = false;
    }, (cards.length * 50) + 300);
}

// Filter Articles
function filterArticles(category) {
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach((article, index) => {
        const articleCategory = article.dataset.category;
        const shouldShow = category === 'all' || articleCategory === category;
        
        setTimeout(() => {
            if (shouldShow) {
                article.style.display = 'block';
                article.style.opacity = '0';
                article.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    article.style.opacity = '1';
                    article.style.transform = 'translateY(0)';
                }, 50);
            } else {
                article.style.opacity = '0';
                article.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    article.style.display = 'none';
                }, 300);
            }
        }, index * 100);
    });
}

// Filter Videos
function filterVideos(category) {
    const videos = document.querySelectorAll('.video-card');
    
    videos.forEach((video, index) => {
        const videoCategory = video.dataset.category;
        const shouldShow = category === 'all' || videoCategory === category;
        
        setTimeout(() => {
            if (shouldShow) {
                video.style.display = 'block';
                video.style.opacity = '0';
                video.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    video.style.opacity = '1';
                    video.style.transform = 'translateY(0)';
                }, 50);
            } else {
                video.style.opacity = '0';
                video.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    video.style.display = 'none';
                }, 300);
            }
        }, index * 100);
    });
}

// Filter Gallery Items
function filterGalleryItems(filter) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach((item, index) => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        
        setTimeout(() => {
            if (shouldShow) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    item.style.display = 'none';
                }, 200);
            }
        }, index * 50);
    });
}

// Search Functionality
function setupSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.toLowerCase();
            
            searchTimeout = setTimeout(() => {
                searchProphets(query);
            }, 300);
        });
    }
}

// Search Prophets
function searchProphets(query) {
    const cards = document.querySelectorAll('.prophet-card');
    
    cards.forEach(card => {
        const name = card.dataset.name ? card.dataset.name.toLowerCase() : '';
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
        const description = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
        
        const matches = name.includes(query) || title.includes(query) || description.includes(query);
        
        if (query === '' || matches) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (card.style.opacity === '0') {
                    card.style.display = 'none';
                }
            }, 200);
        }
    });
}

// Carousel Functionality
function setupCarousel() {
    const carousel = document.getElementById('prophets-carousel');
    if (!carousel) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Mouse events
    carousel.addEventListener('mousedown', function(e) {
        isDown = true;
        carousel.classList.add('cursor-grabbing');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', function() {
        isDown = false;
        carousel.classList.remove('cursor-grabbing');
    });
    
    carousel.addEventListener('mouseup', function() {
        isDown = false;
        carousel.classList.remove('cursor-grabbing');
    });
    
    carousel.addEventListener('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchScrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('touchmove', function(e) {
        if (!touchStartX) return;
        
        const touchX = e.touches[0].clientX;
        const touchDiff = touchStartX - touchX;
        carousel.scrollLeft = touchScrollLeft + touchDiff;
    });
    
    carousel.addEventListener('touchend', function() {
        touchStartX = 0;
    });
}

// Lightbox Functionality
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeLightbox = document.getElementById('close-lightbox');
    
    if (!lightbox) return;
    
    // Open lightbox when clicking gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.dataset.title || 'Gallery Image';
            const description = this.dataset.description || 'Beautiful Islamic art and architecture';
            const bgClass = this.querySelector('div').className;
            
            lightboxImage.className = 'w-full h-96 ' + bgClass.split(' ').filter(c => c.includes('gradient')).join(' ');
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;
            
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            
            // Animate in
            setTimeout(() => {
                lightboxContent.style.transform = 'scale(1)';
                lightboxContent.style.opacity = '1';
            }, 10);
        });
    });
    
    // Close lightbox
    function closeLightboxFunction() {
        lightboxContent.style.transform = 'scale(0.9)';
        lightboxContent.style.opacity = '0';
        
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
        }, 200);
    }
    
    if (closeLightbox) {
        closeLightbox.addEventListener('click', closeLightboxFunction);
    }
    
    // Close on backdrop click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightboxFunction();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightboxFunction();
        }
    });
    
    // Initial styles
    lightboxContent.style.transform = 'scale(0.9)';
    lightboxContent.style.opacity = '0';
    lightboxContent.style.transition = 'all 0.2s ease-out';
}

// View Toggle (Grid/Timeline for Prophets page)
function setupViewToggle() {
    const gridViewBtn = document.getElementById('grid-view-btn');
    const timelineViewBtn = document.getElementById('timeline-view-btn');
    const gridView = document.getElementById('grid-view');
    const timelineView = document.getElementById('timeline-view');
    
    if (!gridViewBtn || !timelineViewBtn) return;
    
    gridViewBtn.addEventListener('click', function() {
        // Update button states
        gridViewBtn.classList.add('bg-white', 'shadow-sm');
        gridViewBtn.classList.remove('text-gray-400');
        timelineViewBtn.classList.remove('bg-white', 'shadow-sm');
        timelineViewBtn.classList.add('text-gray-400');
        
        // Show/hide views
        if (gridView) gridView.classList.remove('hidden');
        if (timelineView) timelineView.classList.add('hidden');
    });
    
    timelineViewBtn.addEventListener('click', function() {
        // Update button states
        timelineViewBtn.classList.add('bg-white', 'shadow-sm');
        timelineViewBtn.classList.remove('text-gray-400');
        gridViewBtn.classList.remove('bg-white', 'shadow-sm');
        gridViewBtn.classList.add('text-gray-400');
        
        // Show/hide views
        if (timelineView) timelineView.classList.remove('hidden');
        if (gridView) gridView.classList.add('hidden');
    });
}

// Smooth Scrolling for Anchor Links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = 80; // Account for sticky header
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Loading States for Dynamic Content
function setupLoadingStates() {
    // Add loading animation to buttons
    const loadMoreBtns = document.querySelectorAll('button:contains("Load More")');
    
    loadMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.disabled = true;
            this.innerHTML = '<div class="loading-spinner mx-auto"></div>';
            
            // Simulate loading
            setTimeout(() => {
                this.disabled = false;
                this.textContent = originalText;
            }, 2000);
        });
    });
}

// Form Validation
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value.trim();
                
                if (!email) {
                    showNotification('Please enter your email address', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Please enter a valid email address', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Subscribing...';
                    
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                        emailInput.value = '';
                        showNotification('Successfully subscribed! Thank you.', 'success');
                    }, 2000);
                }
            }
        });
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-emerald-500' : 
                   type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    notification.classList.add(bgColor, 'text-white');
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Scroll Progress Indicator
function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-0 h-1 bg-emerald-500 z-50 transition-all duration-150';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress on pages with long content
if (document.body.scrollHeight > window.innerHeight * 2) {
    setupScrollProgress();
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading setup
setupLazyLoading();

// Add to the initialization
document.addEventListener('DOMContentLoaded', function() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s');
    }
    
    // Add focus visible polyfill for better accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
});

// Export functions for potential use in other scripts
window.TheHolyProphetsApp = {
    filterProphetCards,
    filterArticles,
    filterVideos,
    filterGalleryItems,
    showNotification,
    searchProphets
};