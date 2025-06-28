/**
 * SEO Optimizer Script for Seaspray Shipping Company Website
 * This script automatically adds SEO improvements to all pages
 */

class SEOOptimizer {
    constructor() {
        this.baseUrl = 'https://seasprayshipping.com';
        this.companyName = 'Seaspray Shipping Company Ltd';
        this.defaultDescription = 'Leading provider of comprehensive ship management services with 20+ years experience. Managing 30+ vessels globally with 500+ crew members.';
    }

    // Add structured data to page
    addStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": this.companyName,
            "url": this.baseUrl,
            "logo": `${this.baseUrl}/images/SS-logo.png`,
            "description": this.defaultDescription,
            "foundingDate": "2004",
            "numberOfEmployees": "100+",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "UK"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": `${this.baseUrl}/contact.html`
            },
            "sameAs": [
                "https://www.linkedin.com/company/seaspray-shipping",
                "https://www.facebook.com/seasprayshipping"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }

    // Add WebSite structured data
    addWebsiteStructuredData() {
        const websiteData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": this.companyName,
            "url": this.baseUrl,
            "description": this.defaultDescription,
            "publisher": {
                "@type": "Organization",
                "name": this.companyName
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(websiteData);
        document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    addBreadcrumbData() {
        const path = window.location.pathname;
        const breadcrumbs = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": this.baseUrl
            }
        ];

        // Add current page to breadcrumbs
        if (path !== '/' && path !== '/index.html') {
            const pageName = this.getPageName(path);
            breadcrumbs.push({
                "@type": "ListItem",
                "position": 2,
                "name": pageName,
                "item": this.baseUrl + path
            });
        }

        const breadcrumbData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);
    }

    // Get page name from path
    getPageName(path) {
        const pageMap = {
            '/about.html': 'About Us',
            '/services.html': 'Services',
            '/fleet.html': 'Fleet',
            '/gallery.html': 'Gallery',
            '/team.html': 'Team',
            '/testimonials.html': 'Testimonials',
            '/contact.html': 'Contact'
        };
        return pageMap[path] || 'Page';
    }

    // Add meta tags if they don't exist
    addMetaTags() {
        const metaTags = [
            { name: 'description', content: this.defaultDescription },
            { name: 'keywords', content: 'ship management, maritime services, vessel management, shipping company, crew management, maritime solutions, global shipping, tanker management, bulk carrier, container ships, maritime industry' },
            { name: 'author', content: this.companyName },
            { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            { name: 'googlebot', content: 'index, follow' },
            { name: 'theme-color', content: '#0066cc' },
            { name: 'msapplication-TileColor', content: '#0066cc' },
            { name: 'application-name', content: this.companyName }
        ];

        metaTags.forEach(tag => {
            if (!document.querySelector(`meta[name="${tag.name}"]`)) {
                const meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    // Add Open Graph tags
    addOpenGraphTags() {
        const ogTags = [
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: window.location.href },
            { property: 'og:title', content: document.title },
            { property: 'og:description', content: this.defaultDescription },
            { property: 'og:image', content: `${this.baseUrl}/images/SS-logo.png` },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:site_name', content: this.companyName },
            { property: 'og:locale', content: 'en_US' }
        ];

        ogTags.forEach(tag => {
            if (!document.querySelector(`meta[property="${tag.property}"]`)) {
                const meta = document.createElement('meta');
                meta.setAttribute('property', tag.property);
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    // Add Twitter Card tags
    addTwitterCardTags() {
        const twitterTags = [
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:url', content: window.location.href },
            { property: 'twitter:title', content: document.title },
            { property: 'twitter:description', content: this.defaultDescription },
            { property: 'twitter:image', content: `${this.baseUrl}/images/SS-logo.png` }
        ];

        twitterTags.forEach(tag => {
            if (!document.querySelector(`meta[property="${tag.property}"]`)) {
                const meta = document.createElement('meta');
                meta.setAttribute('property', tag.property);
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    // Add canonical URL
    addCanonicalUrl() {
        if (!document.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.href;
            document.head.appendChild(canonical);
        }
    }

    // Add preconnect links for performance
    addPreconnectLinks() {
        const preconnectUrls = [
            'https://cdnjs.cloudflare.com',
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com'
        ];

        preconnectUrls.forEach(url => {
            if (!document.querySelector(`link[href="${url}"]`)) {
                const link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = url;
                document.head.appendChild(link);
            }
        });
    }

    // Improve image alt attributes
    improveImageAlt() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt || img.alt === '') {
                const fileName = img.src.split('/').pop().split('.')[0];
                img.alt = `${this.companyName} - ${fileName.replace(/[-_]/g, ' ')}`;
            }
        });
    }

    // Add ARIA labels and roles for accessibility
    improveAccessibility() {
        // Add role to navigation
        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'Main navigation');
        }

        // Add role to main content
        const main = document.querySelector('main') || document.querySelector('.hero');
        if (main && !main.getAttribute('role')) {
            main.setAttribute('role', 'main');
        }

        // Add role to footer
        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
            footer.setAttribute('role', 'contentinfo');
        }

        // Add aria-current to active navigation links
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath || 
                (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    // Add schema markup for testimonials
    addTestimonialSchema() {
        const testimonials = document.querySelectorAll('.testimonial');
        testimonials.forEach((testimonial, index) => {
            const text = testimonial.querySelector('p')?.textContent;
            if (text) {
                const reviewData = {
                    "@context": "https://schema.org",
                    "@type": "Review",
                    "reviewBody": text,
                    "author": {
                        "@type": "Person",
                        "name": "Seafarer"
                    },
                    "itemReviewed": {
                        "@type": "Organization",
                        "name": this.companyName
                    }
                };

                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(reviewData);
                document.head.appendChild(script);
            }
        });
    }

    // Initialize all SEO optimizations
    init() {
        console.log('Initializing SEO Optimizer...');
        
        // Add all SEO improvements
        this.addMetaTags();
        this.addOpenGraphTags();
        this.addTwitterCardTags();
        this.addCanonicalUrl();
        this.addPreconnectLinks();
        this.addStructuredData();
        this.addWebsiteStructuredData();
        this.addBreadcrumbData();
        this.addTestimonialSchema();
        this.improveImageAlt();
        this.improveAccessibility();

        console.log('SEO optimization completed!');
    }
}

// Initialize SEO optimizer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const seoOptimizer = new SEOOptimizer();
    seoOptimizer.init();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOOptimizer;
} 