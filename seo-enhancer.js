/**
 * Enhanced SEO Optimizer for Seaspray Shipping Company
 * Automatically applies SEO improvements to all pages
 */

(function() {
    'use strict';

    // SEO Configuration
    const SEO_CONFIG = {
        baseUrl: 'https://seasprayshipping.com',
        companyName: 'Seaspray Shipping Company Ltd',
        defaultDescription: 'Leading provider of comprehensive ship management services with 20+ years experience. Managing 30+ vessels globally with 500+ crew members.',
        keywords: 'ship management, maritime services, vessel management, shipping company, crew management, maritime solutions, global shipping, tanker management, bulk carrier, container ships, maritime industry, seafarer recruitment, ship operations',
        themeColor: '#0066cc',
        socialMedia: {
            linkedin: 'https://www.linkedin.com/company/seaspray-shipping',
            facebook: 'https://www.facebook.com/seasprayshipping',
            twitter: 'https://twitter.com/seasprayshipping'
        }
    };

    // Page-specific configurations
    const PAGE_CONFIGS = {
        '/': {
            title: 'Seaspray Shipping Company Ltd - Leading Ship Management Services | Global Maritime Solutions',
            description: 'Leading provider of comprehensive ship management services with 20+ years experience. Managing 30+ vessels globally with 500+ crew members.',
            keywords: 'ship management, maritime services, vessel management, shipping company, crew management'
        },
        '/about.html': {
            title: 'About Us | Seaspray Shipping Company Ltd - Maritime Excellence Since 2004',
            description: 'Learn about Seaspray Shipping Company Ltd - your trusted partner in global ship management with 20+ years of maritime industry experience.',
            keywords: 'about seaspray shipping, maritime company history, ship management company, maritime excellence'
        },
        '/services.html': {
            title: 'Maritime Services | Seaspray Shipping Company Ltd - Comprehensive Ship Management',
            description: 'Comprehensive ship management services including crew management, technical management, safety management, and maritime consulting solutions.',
            keywords: 'maritime services, ship management services, crew management, technical management, safety management'
        },
        '/fleet.html': {
            title: 'Our Fleet | Seaspray Shipping Company Ltd - Modern Vessel Management',
            description: 'Explore our managed fleet of 30+ vessels including tankers, bulk carriers, and container ships with state-of-the-art technology.',
            keywords: 'managed fleet, tanker fleet, bulk carrier, container ships, vessel management'
        },
        '/gallery.html': {
            title: 'Maritime Gallery | Seaspray Shipping Company Ltd - Ship Management Photos',
            description: 'Browse our maritime gallery showcasing our vessels, crew, operations, and global presence across major shipping routes.',
            keywords: 'maritime gallery, ship photos, vessel images, crew photos, shipping operations'
        },
        '/team.html': {
            title: 'Our Team | Seaspray Shipping Company Ltd - Maritime Professionals',
            description: 'Meet our experienced team of maritime professionals dedicated to providing exceptional ship management services worldwide.',
            keywords: 'maritime team, ship management professionals, maritime experts, crew management team'
        },
        '/testimonials.html': {
            title: 'Client Testimonials | Seaspray Shipping Company Ltd - Seafarer Reviews',
            description: 'Read testimonials from our satisfied seafarers and clients about our ship management services and professional crew support.',
            keywords: 'maritime testimonials, seafarer reviews, ship management reviews, client feedback'
        },
        '/contact.html': {
            title: 'Contact Us | Seaspray Shipping Company Ltd - Global Maritime Solutions',
            description: 'Contact Seaspray Shipping Company Ltd for ship management services, crew recruitment, and maritime consulting worldwide.',
            keywords: 'contact seaspray shipping, maritime contact, ship management contact, crew recruitment contact'
        }
    };

    class EnhancedSEOOptimizer {
        constructor() {
            this.config = SEO_CONFIG;
            this.currentPath = window.location.pathname;
            this.pageConfig = PAGE_CONFIGS[this.currentPath] || PAGE_CONFIGS['/'];
        }

        // Initialize all SEO optimizations
        init() {
            console.log('🚀 Initializing Enhanced SEO Optimizer...');
            
            this.updateTitle();
            this.addMetaTags();
            this.addOpenGraphTags();
            this.addTwitterCardTags();
            this.addCanonicalUrl();
            this.addStructuredData();
            this.addBreadcrumbData();
            this.addTestimonialSchema();
            this.improveImageAlt();
            this.improveAccessibility();
            this.addPreconnectLinks();
            this.addPerformanceOptimizations();
            
            console.log('✅ Enhanced SEO optimization completed!');
        }

        // Update page title
        updateTitle() {
            if (document.title !== this.pageConfig.title) {
                document.title = this.pageConfig.title;
            }
        }

        // Add comprehensive meta tags
        addMetaTags() {
            const metaTags = [
                { name: 'description', content: this.pageConfig.description },
                { name: 'keywords', content: this.pageConfig.keywords },
                { name: 'author', content: this.config.companyName },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                { name: 'googlebot', content: 'index, follow' },
                { name: 'theme-color', content: this.config.themeColor },
                { name: 'msapplication-TileColor', content: this.config.themeColor },
                { name: 'application-name', content: this.config.companyName },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
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
                { property: 'og:title', content: this.pageConfig.title },
                { property: 'og:description', content: this.pageConfig.description },
                { property: 'og:image', content: `${this.config.baseUrl}/images/SS-logo.png` },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:site_name', content: this.config.companyName },
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
                { property: 'twitter:title', content: this.pageConfig.title },
                { property: 'twitter:description', content: this.pageConfig.description },
                { property: 'twitter:image', content: `${this.config.baseUrl}/images/SS-logo.png` }
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

        // Add comprehensive structured data
        addStructuredData() {
            // Organization Schema
            const organizationData = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": this.config.companyName,
                "url": this.config.baseUrl,
                "logo": `${this.config.baseUrl}/images/SS-logo.png`,
                "description": this.config.defaultDescription,
                "foundingDate": "2004",
                "numberOfEmployees": "100+",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "UK"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "url": `${this.config.baseUrl}/contact.html`
                },
                "sameAs": Object.values(this.config.socialMedia)
            };

            this.addStructuredDataScript(organizationData);

            // Local Business Schema
            const localBusinessData = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": this.config.companyName,
                "image": `${this.config.baseUrl}/images/SS-logo.png`,
                "description": this.config.defaultDescription,
                "url": this.config.baseUrl,
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "UK"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.5074",
                    "longitude": "-0.1278"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "17:00"
                },
                "priceRange": "$$"
            };

            this.addStructuredDataScript(localBusinessData);
        }

        // Add breadcrumb structured data
        addBreadcrumbData() {
            const breadcrumbs = [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": this.config.baseUrl
                }
            ];

            if (this.currentPath !== '/' && this.currentPath !== '/index.html') {
                const pageName = this.getPageName(this.currentPath);
                breadcrumbs.push({
                    "@type": "ListItem",
                    "position": 2,
                    "name": pageName,
                    "item": this.config.baseUrl + this.currentPath
                });
            }

            const breadcrumbData = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs
            };

            this.addStructuredDataScript(breadcrumbData);
        }

        // Add testimonial schema markup
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
                            "name": this.config.companyName
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5",
                            "bestRating": "5"
                        }
                    };

                    this.addStructuredDataScript(reviewData);
                }
            });
        }

        // Helper method to add structured data script
        addStructuredDataScript(data) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(data);
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

        // Improve image alt attributes
        improveImageAlt() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (!img.alt || img.alt === '') {
                    const fileName = img.src.split('/').pop().split('.')[0];
                    img.alt = `${this.config.companyName} - ${fileName.replace(/[-_]/g, ' ')}`;
                }
                
                // Add loading="lazy" for performance
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
            });
        }

        // Improve accessibility
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
                main.id = 'main-content';
            }

            // Add role to footer
            const footer = document.querySelector('footer');
            if (footer && !footer.getAttribute('role')) {
                footer.setAttribute('role', 'contentinfo');
            }

            // Add aria-current to active navigation links
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === this.currentPath || 
                    (this.currentPath === '/' && link.getAttribute('href') === 'index.html')) {
                    link.setAttribute('aria-current', 'page');
                }
            });

            // Add skip link for accessibility
            this.addSkipLink();
        }

        // Add skip link for accessibility
        addSkipLink() {
            if (!document.querySelector('.skip-link')) {
                const skipLink = document.createElement('a');
                skipLink.href = '#main-content';
                skipLink.className = 'skip-link';
                skipLink.textContent = 'Skip to main content';
                skipLink.style.cssText = `
                    position: absolute;
                    top: -40px;
                    left: 6px;
                    background: #0066cc;
                    color: white;
                    padding: 8px;
                    text-decoration: none;
                    z-index: 1000;
                    transition: top 0.3s;
                `;
                
                skipLink.addEventListener('focus', () => {
                    skipLink.style.top = '6px';
                });
                
                skipLink.addEventListener('blur', () => {
                    skipLink.style.top = '-40px';
                });
                
                document.body.insertBefore(skipLink, document.body.firstChild);
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

        // Add performance optimizations
        addPerformanceOptimizations() {
            // Add resource hints
            const resourceHints = [
                { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' },
                { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }
            ];

            resourceHints.forEach(hint => {
                if (!document.querySelector(`link[href="${hint.href}"]`)) {
                    const link = document.createElement('link');
                    link.rel = hint.rel;
                    link.href = hint.href;
                    document.head.appendChild(link);
                }
            });
        }
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            const seoOptimizer = new EnhancedSEOOptimizer();
            seoOptimizer.init();
        });
    } else {
        const seoOptimizer = new EnhancedSEOOptimizer();
        seoOptimizer.init();
    }

})(); 