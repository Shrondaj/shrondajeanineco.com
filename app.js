// MAIN APPLICATION LOGIC

// Page Templates
const templates = {
    home: () => `
        <section class="hero">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title animate-in">${SITE_CONTENT.hero.title}</h1>
                    <p class="hero-subtitle animate-in delay-1">${SITE_CONTENT.hero.subtitle}</p>
                    <div class="hero-actions animate-in delay-2">
                        <a href="${SITE_CONTENT.hero.cta1.link}" class="btn-primary">${SITE_CONTENT.hero.cta1.text}</a>
                        <a href="${SITE_CONTENT.hero.cta2.link}" class="btn-secondary">${SITE_CONTENT.hero.cta2.text}</a>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <span>Scroll to explore</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <div class="features-grid">
                    <div class="feature-card animate-on-scroll">
                        <div class="feature-icon">🌱</div>
                        <h3>Who We Are</h3>
                        <p>We help people transition from unhealthy places into lives rooted in self-worth, love, and purpose.</p>
                        <a href="#about" class="link-arrow">Learn more →</a>
                    </div>
                    <div class="feature-card animate-on-scroll delay-1">
                        <div class="feature-icon">🧘</div>
                        <h3>Our Services</h3>
                        <p>Group healing sessions, personalized coaching, crisis support, and holistic wellness programs.</p>
                        <a href="#services" class="link-arrow">See services →</a>
                    </div>
                    <div class="feature-card animate-on-scroll delay-2">
                        <div class="feature-icon">🤝</div>
                        <h3>Community Action</h3>
                        <p>Garden projects, family circles, and practical support that brings healing to our neighbors.</p>
                        <a href="#community" class="link-arrow">Get involved →</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <div class="testimonials-slider">
                    ${SITE_CONTENT.testimonials.map((testimonial, index) => `
                        <div class="testimonial animate-on-scroll delay-${index}">
                            <p class="testimonial-quote">"${testimonial.quote}"</p>
                            <p class="testimonial-author">— ${testimonial.author}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content animate-on-scroll">
                    <h2>${SITE_CONTENT.contact.title}</h2>
                    <p>${SITE_CONTENT.contact.subtitle}</p>
                    <div class="cta-actions">
                        <a href="#contact" class="btn-primary">Contact Us</a>
                        <a href="tel:${SITE_CONTENT.contact.phone.replace(/[^0-9]/g, '')}" class="btn-secondary">Call: ${SITE_CONTENT.contact.phone}</a>
                    </div>
                </div>
            </div>
        </section>
    `,

    about: () => `
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content animate-in">
                    <span class="page-icon">🪷</span>
                    <h1>${SITE_CONTENT.about.title}</h1>
                    <p class="lead">${SITE_CONTENT.about.subtitle}</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="mission-statement animate-on-scroll">
                    <h2>Our Mission</h2>
                    <p class="large-text">${SITE_CONTENT.about.mission}</p>
                </div>

                <div class="philosophy-grid">
                    ${SITE_CONTENT.about.philosophy.map((item, index) => `
                        <div class="philosophy-card animate-on-scroll delay-${index}">
                            <div class="card-icon">${item.icon}</div>
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="founder-section animate-on-scroll">
                    <span class="founder-icon">🌸</span>
                    <h2>Meet ${SITE_CONTENT.about.founder.name}</h2>
                    <p class="founder-bio">${SITE_CONTENT.about.founder.bio}</p>
                </div>

                <div class="values-section">
                    <h2 class="animate-on-scroll">Our Core Values</h2>
                    <div class="values-grid">
                        ${SITE_CONTENT.about.values.map((value, index) => `
                            <div class="value-card animate-on-scroll delay-${index % 3}">
                                <h4>${value.title}</h4>
                                <p>${value.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    `,

    services: () => `
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content animate-in">
                    <h1>${SITE_CONTENT.services.title}</h1>
                    <p class="lead">${SITE_CONTENT.services.subtitle}</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="services-grid">
                    ${SITE_CONTENT.services.offerings.map((service, index) => `
                        <div class="service-card animate-on-scroll delay-${index % 3}">
                            <div class="service-icon">${service.icon}</div>
                            <h3>${service.title}</h3>
                            <p>${service.description}</p>
                            <div class="service-price">${service.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content animate-on-scroll">
                    <h2>Ready to Begin?</h2>
                    <p>Book a consultation or explore our membership options</p>
                    <div class="cta-actions">
                        <a href="#contact" class="btn-primary">Contact Us</a>
                        <a href="#membership" class="btn-secondary">View Membership</a>
                    </div>
                </div>
            </div>
        </section>
    `,

    membership: () => `
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content animate-in">
                    <h1>${SITE_CONTENT.membership.title}</h1>
                    <p class="lead">${SITE_CONTENT.membership.subtitle}</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="pricing-grid">
                    ${SITE_CONTENT.membership.tiers.map((tier, index) => `
                        <div class="pricing-card ${tier.featured ? 'featured' : ''} animate-on-scroll delay-${index}">
                            ${tier.featured ? '<div class="featured-badge">Most Popular</div>' : ''}
                            <h3 class="tier-name">${tier.name}</h3>
                            <div class="tier-price">
                                <span class="price">${tier.price}</span>
                                <span class="period">/${tier.period}</span>
                            </div>
                            <p class="tier-description">${tier.description}</p>
                            <ul class="tier-features">
                                ${tier.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            <a href="#contact" class="btn-primary ${tier.featured ? '' : 'btn-outline'}">Choose ${tier.name}</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    community: () => `
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content animate-in">
                    <h1>${SITE_CONTENT.community.title}</h1>
                    <p class="lead">${SITE_CONTENT.community.subtitle}</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="community-grid">
                    ${SITE_CONTENT.community.programs.map((program, index) => `
                        <div class="community-card animate-on-scroll delay-${index % 2}">
                            <div class="community-image">${program.image}</div>
                            <h3>${program.title}</h3>
                            <p>${program.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content animate-on-scroll">
                    <h2>Join Our Community Programs</h2>
                    <p>Everyone is welcome. Come as you are.</p>
                    <div class="cta-actions">
                        <a href="#contact" class="btn-primary">Get Involved</a>
                    </div>
                </div>
            </div>
        </section>
    `,

    blog: () => `
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content animate-in">
                    <h1>${SITE_CONTENT.blog.title}</h1>
                    <p class="lead">${SITE_CONTENT.blog.subtitle}</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="blog-grid">
                    ${SITE_CONTENT.blog.posts.map((post, index) => `
                        <article class="blog-card animate-on-scroll delay-${index}">
                            <div class="blog-icon">${post.icon}</div>
                            <time class="blog-date">${post.date}</time>
                            <h3>${post.title}</h3>
                            <p>${post.excerpt}</p>
                            <a href="${post.link}" class="link-arrow">Read More →</a>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    contact: () => `
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content animate-in">
                    <h1>Get in Touch</h1>
                    <p class="lead">We're here to support you on your healing journey</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-info animate-on-scroll">
                        <h2>Contact Information</h2>
                        
                        <div class="contact-item">
                            <h4>Email</h4>
                            <a href="mailto:${SITE_CONTENT.contact.email}">${SITE_CONTENT.contact.email}</a>
                        </div>

                        <div class="contact-item">
                            <h4>Phone</h4>
                            <a href="tel:${SITE_CONTENT.contact.phone.replace(/[^0-9]/g, '')}">${SITE_CONTENT.contact.phone}</a>
                        </div>

                        <div class="contact-item">
                            <h4>Location</h4>
                            <p>${SITE_CONTENT.contact.location}</p>
                        </div>

                        <div class="contact-item crisis">
                            <h4>Crisis Support</h4>
                            <p>Local: <a href="tel:${SITE_CONTENT.contact.crisis.local.replace(/[^0-9]/g, '')}">${SITE_CONTENT.contact.crisis.local}</a></p>
                            <p>National: <a href="tel:${SITE_CONTENT.contact.crisis.national}">${SITE_CONTENT.contact.crisis.national}</a></p>
                            <p class="crisis-note">Available 24/7</p>
                        </div>
                    </div>

                    <div class="contact-form animate-on-scroll delay-1">
                        <h2>Send a Message</h2>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone (Optional)</label>
                                <input type="tel" id="phone" name="phone">
                            </div>

                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="6" required></textarea>
                            </div>

                            <button type="submit" class="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Router
class Router {
    constructor() {
        this.routes = templates;
        this.currentPage = null;
        this.init();
    }

    init() {
        // Handle initial load
        this.loadPage(this.getPageFromHash() || 'home');

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.loadPage(this.getPageFromHash());
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const hash = e.target.getAttribute('href').substring(1);
                window.location.hash = hash;
            }
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        navToggle?.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Scroll effects
        this.handleScroll();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    getPageFromHash() {
        const hash = window.location.hash.substring(1);
        return hash || 'home';
    }

    async loadPage(page) {
        if (!this.routes[page]) page = 'home';
        if (page === this.currentPage) return;

        const mainContent = document.getElementById('mainContent');
        
        // Fade out
        mainContent.classList.add('fade-out');
        
        await this.wait(300);
        
        // Load new content
        mainContent.innerHTML = this.routes[page]();
        this.currentPage = page;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${page}`) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Fade in
        mainContent.classList.remove('fade-out');
        
        // Trigger animations
        await this.wait(100);
        this.triggerAnimations();
    }

    handleScroll() {
        const nav = document.getElementById('mainNav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Trigger scroll animations
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible && !el.classList.contains('animated')) {
                el.classList.add('animated');
            }
        });
    }

    triggerAnimations() {
        const elements = document.querySelectorAll('.animate-in');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 100);
        });
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new Router();
});
