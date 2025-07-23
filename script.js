// Proxilaze Website JavaScript with Dropdown and Enhanced Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const categoriesDropdown = document.getElementById('categories-dropdown');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    
    // Dropdown functionality
    if (categoriesDropdown) {
        const dropdownMenu = categoriesDropdown.nextElementSibling;
        
        // Toggle dropdown on click
        categoriesDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isVisible = dropdownMenu.classList.contains('opacity-0');
            
            if (isVisible) {
                dropdownMenu.classList.remove('opacity-0', 'invisible');
                dropdownMenu.classList.add('opacity-100', 'visible');
            } else {
                dropdownMenu.classList.add('opacity-0', 'invisible');
                dropdownMenu.classList.remove('opacity-100', 'visible');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!categoriesDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('opacity-0', 'invisible');
                dropdownMenu.classList.remove('opacity-100', 'visible');
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdownMenu.classList.add('opacity-0', 'invisible');
                dropdownMenu.classList.remove('opacity-100', 'visible');
            }
        });
    }
    
    // Mobile menu functionality
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isVisible = mobileMenu.classList.contains('opacity-0');
            
            if (isVisible) {
                mobileMenu.classList.remove('opacity-0', 'invisible');
                mobileMenu.classList.add('opacity-100', 'visible');
            } else {
                mobileMenu.classList.add('opacity-0', 'invisible');
                mobileMenu.classList.remove('opacity-100', 'visible');
            }
        });
    }
    
    // Newsletter subscription
    if (newsletterForm && newsletterEmail) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterEmail.value.trim();
            
            if (email) {
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
                    newsletterEmail.value = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    console.log('Newsletter subscription:', email);
                }, 1000);
            }
        });
    }
    
    // Articles page form handling
    const articleForm = document.getElementById('article-form');
    if (articleForm) {
        articleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                title: document.getElementById('article-title').value,
                category: document.getElementById('article-category').value,
                author: document.getElementById('article-author').value,
                readTime: document.getElementById('article-read-time').value,
                image: document.getElementById('article-image').value,
                summary: document.getElementById('article-summary').value,
                content: document.getElementById('article-content').value
            };
            
            if (formData.title && formData.category && formData.author && formData.content) {
                // Add article to the grid
                addArticleToGrid(formData);
                showNotification('Article published successfully!', 'success');
                articleForm.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }
    
    // About page form handling
    const aboutForm = document.getElementById('about-form');
    if (aboutForm) {
        aboutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const mission = document.getElementById('mission-statement').value;
            const story = document.getElementById('our-story').value;
            const whatWeDo = document.getElementById('what-we-do').value;
            const values = document.getElementById('our-values').value;
            
            // Update display sections
            document.getElementById('display-mission').textContent = mission;
            document.getElementById('display-story').textContent = story;
            document.getElementById('display-what-we-do').textContent = whatWeDo;
            document.getElementById('display-values').textContent = values;
            
            showNotification('About page updated successfully!', 'success');
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                email: document.getElementById('contact-email').value,
                organization: document.getElementById('organization').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            if (formData.firstName && formData.lastName && formData.email && formData.subject && formData.message) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate sending
                setTimeout(() => {
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    console.log('Contact form submission:', formData);
                }, 1500);
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }
    
    // Genetics form handling
    const geneticsForm = document.getElementById('genetics-form');
    if (geneticsForm) {
        geneticsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                topic: document.getElementById('research-topic').value,
                institution: document.getElementById('research-institution').value,
                researcher: document.getElementById('lead-researcher').value,
                date: document.getElementById('publication-date').value,
                phase: document.getElementById('trial-phase').value,
                summary: document.getElementById('research-summary').value,
                analysis: document.getElementById('detailed-analysis').value
            };
            
            if (formData.topic && formData.researcher && formData.summary) {
                showNotification('Genetics research added successfully!', 'success');
                geneticsForm.reset();
                console.log('Genetics research data:', formData);
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.25)';
                nav.style.backdropFilter = 'blur(25px)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.1)';
                nav.style.backdropFilter = 'blur(20px)';
            }
        });
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.blog-card, .glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effects to category cards
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Search functionality
    document.querySelectorAll('[data-lucide="search"]').forEach(searchBtn => {
        searchBtn.closest('button').addEventListener('click', function() {
            const searchTerm = prompt('Enter search term:');
            if (searchTerm) {
                console.log('Search for:', searchTerm);
                showNotification(`Searching for "${searchTerm}"...`, 'info');
            }
        });
    });
    
    // Social media link handling
    document.querySelectorAll('[data-lucide="twitter"], [data-lucide="linkedin"], [data-lucide="youtube"], [data-lucide="instagram"]').forEach(socialBtn => {
        socialBtn.closest('button').addEventListener('click', function() {
            const iconName = socialBtn.getAttribute('data-lucide');
            
            const socialLinks = {
                twitter: 'https://twitter.com/proxilaze',
                linkedin: 'https://linkedin.com/company/proxilaze',
                youtube: 'https://youtube.com/proxilaze',
                instagram: 'https://instagram.com/proxilaze'
            };
            
            if (socialLinks[iconName]) {
                window.open(socialLinks[iconName], '_blank');
            }
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-animation');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Function to add article to grid dynamically
function addArticleToGrid(articleData) {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;
    
    const categoryColors = {
        genetics: 'bg-pastel-green',
        neuroscience: 'bg-pastel-yellow',
        immunology: 'bg-pastel-pink',
        cardiology: 'bg-pastel-blue'
    };
    
    const articleCard = document.createElement('div');
    articleCard.className = 'glass-card rounded-2xl overflow-hidden blog-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2';
    
    const currentDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
    
    articleCard.innerHTML = `
        <img src="${articleData.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400'}" alt="${articleData.title}" class="w-full h-48 object-cover">
        <div class="p-6">
            <div class="flex items-center space-x-2 mb-3">
                <span class="px-3 py-1 ${categoryColors[articleData.category] || 'bg-pastel-purple'} text-slate-700 rounded-full text-sm font-medium">${articleData.category.charAt(0).toUpperCase() + articleData.category.slice(1)}</span>
                <span class="text-slate-500 text-sm">${currentDate}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">${articleData.title}</h3>
            <p class="text-slate-600 mb-4 line-clamp-3">${articleData.summary}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <i data-lucide="user" class="w-4 h-4 text-soft-purple"></i>
                    <span class="text-sm text-slate-600">${articleData.author}</span>
                </div>
                <span class="text-sm text-slate-500">${articleData.readTime}</span>
            </div>
        </div>
    `;
    
    articlesGrid.insertBefore(articleCard, articlesGrid.firstChild);
    
    // Re-initialize Lucide icons for the new card
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    const colors = {
        success: 'var(--soft-purple)',
        error: '#ef4444',
        info: 'var(--soft-cyan)',
        warning: 'var(--soft-amber)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        backdrop-filter: blur(16px);
        max-width: 400px;
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 18px;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
            }
            .notification-close:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
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
    } else {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.notification').forEach(notification => {
            notification.remove();
        });
        
        // Close dropdown menus
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.add('opacity-0', 'invisible');
            menu.classList.remove('opacity-100', 'visible');
        });
        
        // Close mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('opacity-0', 'invisible');
            mobileMenu.classList.remove('opacity-100', 'visible');
        }
    }
    
    if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('blog-card')) {
            focusedElement.click();
        }
    }
});

// Error handling for failed network requests
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration (for PWA features - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add PWA features
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// Analytics tracking
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
}

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Export functions for external use
window.ProxilazeWeb = {
    showNotification,
    trackEvent,
    validateEmail,
    validateUrl,
    addArticleToGrid
};