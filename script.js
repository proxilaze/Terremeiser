// Proxilaze Website JavaScript

// Newsletter Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Newsletter subscription
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterEmail.value.trim();
            
            if (email) {
                // Show loading state
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                // Simulate API call (replace with actual newsletter service)
                setTimeout(() => {
                    // Show success message
                    showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
                    
                    // Reset form
                    newsletterEmail.value = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Here you would typically send the email to your newsletter service
                    // Example: sendToMailchimp(email) or sendToConvertKit(email)
                    console.log('Newsletter subscription:', email);
                }, 1000);
            }
        });
    }
    
    // Mobile menu toggle (if you want to add mobile navigation later)
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Add mobile menu functionality here
            console.log('Mobile menu clicked');
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
    
    // Article card click handling
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function() {
            // Add your article navigation logic here
            console.log('Article card clicked');
            // Example: window.location.href = '/article/' + articleId;
        });
    });
    
    // Search functionality (placeholder)
    document.querySelectorAll('[data-lucide="search"]').forEach(searchBtn => {
        searchBtn.closest('button').addEventListener('click', function() {
            // Add search functionality here
            console.log('Search clicked');
            // Example: showSearchModal() or navigate to search page
        });
    });
    
    // Social media link handling
    document.querySelectorAll('[data-lucide="twitter"], [data-lucide="linkedin"], [data-lucide="youtube"], [data-lucide="instagram"]').forEach(socialBtn => {
        socialBtn.closest('button').addEventListener('click', function() {
            const iconName = socialBtn.getAttribute('data-lucide');
            
            // Replace with your actual social media links
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

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--soft-purple)' : 'var(--soft-cyan)'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        backdrop-filter: blur(16px);
    `;
    
    // Add animation styles
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
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
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
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close modals/notifications
    if (e.key === 'Escape') {
        document.querySelectorAll('.notification').forEach(notification => {
            notification.remove();
        });
    }
    
    // Enter key for accessibility
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

// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData) {
    // Example: Google Analytics
    // gtag('event', eventName, eventData);
    
    // Example: Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Export functions for external use
window.ProxilazeWeb = {
    showNotification,
    trackEvent
};