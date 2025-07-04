// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const customCursor = document.querySelector('.custom-cursor');
const customCursorFollower = document.querySelector('.custom-cursor-follower');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme for developer look
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Add terminal-style effect
    addTerminalEffect();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Terminal-style effect
function addTerminalEffect() {
    const terminal = document.createElement('div');
    terminal.className = 'terminal-effect';
    terminal.innerHTML = `
        <div class="terminal-content">
            <span class="terminal-prompt">$</span>
            <span class="terminal-command">theme-switch --mode=${currentTheme}</span>
            <span class="terminal-cursor">_</span>
        </div>
    `;
    
    terminal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--code-bg);
        color: var(--accent-color);
        padding: 1rem 2rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(terminal);
    
    // Animate in
    setTimeout(() => {
        terminal.style.opacity = '1';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        terminal.style.opacity = '0';
        setTimeout(() => {
            if (terminal.parentNode) {
                terminal.remove();
            }
        }, 300);
    }, 2000);
}

// Mobile Navigation
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth Scrolling for Navigation Links
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 60; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Custom Cursor - Terminal style
function updateCursor(e) {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
}

function addCursorEffects() {
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.style.transform = 'scale(1.5)';
            customCursor.style.background = 'var(--primary-color)';
        });
        
        element.addEventListener('mouseleave', () => {
            customCursor.style.transform = 'scale(1)';
            customCursor.style.background = 'var(--accent-color)';
        });
    });
}

// Scroll Animations
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add typing effect for skill items
                if (entry.target.classList.contains('skill-item')) {
                    addTypingEffect(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .contact-item, .about-details, .section-title');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Typing effect for skill items
function addTypingEffect(element) {
    const skillName = element.querySelector('span');
    if (skillName && !skillName.dataset.typed) {
        const text = skillName.textContent;
        skillName.textContent = '';
        skillName.dataset.typed = 'true';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                skillName.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }
}

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Error: Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Error: Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission with terminal effect
    showTerminalNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Terminal-style notification
function showTerminalNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `terminal-notification terminal-${type}`;
    
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    const color = type === 'success' ? 'var(--accent-color)' : type === 'error' ? '#ff6b6b' : 'var(--primary-color)';
    
    notification.innerHTML = `
        <div class="terminal-notification-content">
            <span class="terminal-icon" style="color: ${color}">${icon}</span>
            <span class="terminal-message">${message}</span>
            <button class="terminal-close">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--code-bg);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.terminal-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Legacy notification system (keeping for compatibility)
function showNotification(message, type = 'info') {
    showTerminalNotification(message, type);
}

// Skill Item Hover Effects
function addSkillHoverEffects() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Define custom skill levels for each technology
    const skillLevels = {
        'Python': 3,        // Advanced
        'C': 3,             // Advanced
        'HTML': 3,          // Advanced
        'CSS': 1,           // Beginner
        'Java': 2,          // Intermediate
        'SQL': 2,           // Intermediate
        'Git': 2,           // Intermediate
        'VSCode': 3,        // Advanced
        'Jupyter': 2,       // Intermediate
        'Problem Solving': 3, // Advanced
        'Machine Learning': 2, // Intermediate
        'Cyber Security': 1   // Beginner
    };
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skillName = item.getAttribute('data-skill');
            item.style.transform = 'translateY(-5px) scale(1.05)';
            item.style.boxShadow = '0 10px 25px rgba(0, 122, 204, 0.3)';
            
            // Get custom skill level or default to 2 (Intermediate)
            const level = skillLevels[skillName] || 2;
            const levelText = level === 1 ? 'Beginner' : level === 2 ? 'Intermediate' : 'Advanced';
            
            if (!item.querySelector('.skill-level')) {
                const levelElement = document.createElement('div');
                levelElement.className = 'skill-level';
                levelElement.textContent = `Level: ${levelText}`;
                levelElement.style.cssText = `
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    font-size: 0.7rem;
                    color: var(--comment-color);
                    font-family: 'JetBrains Mono', monospace;
                `;
                item.appendChild(levelElement);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '';
            
            const levelElement = item.querySelector('.skill-level');
            if (levelElement) {
                levelElement.remove();
            }
        });
    });
}

// Project Card Interactions
function addProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('.project-image');
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease';
            
            // Add code preview effect
            const preview = document.createElement('div');
            preview.className = 'code-preview';
            preview.innerHTML = `
                <div class="code-header">
                    <span class="code-dot red"></span>
                    <span class="code-dot yellow"></span>
                    <span class="code-dot green"></span>
                    <span class="code-title">preview.js</span>
                </div>
                <div class="code-content">
                    <span class="code-line">// Project preview</span>
                    <span class="code-line">function init() {</span>
                    <span class="code-line">  console.log('Hello World!');</span>
                    <span class="code-line">}</span>
                </div>
            `;
            
            preview.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--code-bg);
                border: 1px solid var(--border-color);
                border-radius: 4px;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.7rem;
                color: var(--text-primary);
                z-index: 10;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            image.appendChild(preview);
            
            setTimeout(() => {
                preview.style.opacity = '1';
            }, 100);
        });
        
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.project-image');
            image.style.transform = 'scale(1)';
            
            const preview = card.querySelector('.code-preview');
            if (preview) {
                preview.style.opacity = '0';
                setTimeout(() => {
                    if (preview.parentNode) {
                        preview.remove();
                    }
                }, 300);
            }
        });
    });
}

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Typing Effect
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
}

// Parallax Effect for Hero Section
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Code syntax highlighting effect
function addSyntaxHighlighting() {
    const codeElements = document.querySelectorAll('p, .hero-subtitle, .hero-tagline');
    
    codeElements.forEach(element => {
        const text = element.innerHTML;
        const highlightedText = text
            .replace(/(\/\/.*)/g, '<span style="color: var(--comment-color)">$1</span>')
            .replace(/(\/\*.*?\*\/)/g, '<span style="color: var(--comment-color)">$1</span>')
            .replace(/(\b(function|const|let|var|if|else|for|while|return|class)\b)/g, '<span style="color: var(--keyword-color)">$1</span>')
            .replace(/(\b(console|log|alert|prompt)\b)/g, '<span style="color: var(--function-color)">$1</span>')
            .replace(/(["'].*?["'])/g, '<span style="color: var(--string-color)">$1</span>');
        
        element.innerHTML = highlightedText;
    });
}

// Multilingual greeting effect
const greetings = [
    "Hi, I'm Kavin Vetrivel",           // English
    "Hola, soy Kavin Vetrivel",         // Spanish
    "Bonjour, je suis Kavin Vetrivel",  // French
    "Hallo, ich bin Kavin Vetrivel",    // German
    "Ciao, sono Kavin Vetrivel",        // Italian
    "こんにちは、カビン・ヴェトリヴェルです", // Japanese
    "नमस्ते, मैं Kavin Vetrivel हूँ",      // Hindi
    "你好，我是Kavin Vetrivel",            // Chinese (Simplified)
];

function cycleGreeting() {
    const greetingEl = document.getElementById('greeting');
    if (!greetingEl) return;
    let idx = 1; // Start cycling from the second greeting after English
    
    function typeGreeting(text, cb) {
        greetingEl.textContent = '';
        greetingEl.style.opacity = '1';
        let i = 0;
        function type() {
            if (i < text.length) {
                greetingEl.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            } else if (cb) {
                cb();
            }
        }
        type();
    }
    
    function showNextGreeting() {
        greetingEl.style.opacity = '0';
        setTimeout(() => {
            typeGreeting(greetings[idx], () => {
                setTimeout(() => {
                    idx = (idx + 1) % greetings.length;
                    showNextGreeting();
                }, 1200);
            });
        }, 400);
    }
    
    // Wait for initial page load to complete, then start the cycling effect
    setTimeout(() => {
        // Make the greeting visible and start with English greeting using typing effect
        greetingEl.style.opacity = '1';
        typeGreeting(greetings[0], () => {
            setTimeout(showNextGreeting, 3000);
        });
    }, 2000); // Wait 2 seconds before starting the cycling effect
}

// Initialize all functionality
function init() {
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
            closeMobileMenu();
        });
    });
    
    contactForm.addEventListener('submit', handleContactForm);
    
    // Mouse events for custom cursor
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });
    
    // Scroll events
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize effects
    addCursorEffects();
    handleScrollAnimations();
    addSkillHoverEffects();
    addProjectCardEffects();
    addParallaxEffect();
    addSyntaxHighlighting();
    
    // Initialize typing effect after a delay
    setTimeout(initTypingEffect, 500);
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add terminal startup effect
    addTerminalStartupEffect();

    // Start greeting cycle
    cycleGreeting();
}

// Terminal startup effect
function addTerminalStartupEffect() {
    const startup = document.createElement('div');
    startup.className = 'terminal-startup';
    startup.innerHTML = `
        <div class="terminal-startup-content">
            <div class="terminal-line">Loading portfolio...</div>
            <div class="terminal-line">Initializing components...</div>
            <div class="terminal-line">Starting development server...</div>
            <div class="terminal-line">Portfolio ready! Press any key to continue...</div>
        </div>
    `;
    
    startup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--code-bg);
        color: var(--accent-color);
        font-family: 'JetBrains Mono', monospace;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(startup);
    
    // Simulate loading
    const lines = startup.querySelectorAll('.terminal-line');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.3s ease';
        }, index * 500);
    });
    
    // Remove startup screen
    setTimeout(() => {
        startup.style.opacity = '0';
        setTimeout(() => {
            if (startup.parentNode) {
                startup.remove();
            }
        }, 500);
    }, 3000);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add particle effect to hero section
    createParticles();
    
    // Add confetti effect on theme toggle
    themeToggle.addEventListener('click', () => {
        createConfetti();
    });
});

// Simple particle effect
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
    }
}

// Simple confetti effect
function createConfetti() {
    const colors = ['#007acc', '#00d4aa', '#569cd6', '#ce9178', '#dcdcaa'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * window.innerWidth}px;
            pointer-events: none;
            z-index: 10000;
            animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    @keyframes confetti-fall {
        0% { transform: translateY(-10px) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(720deg); }
    }
    
    .nav-link.active {
        color: var(--accent-color) !important;
    }
    
    .nav-link.active::before {
        opacity: 1 !important;
    }
    
    .code-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
    }
    
    .code-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
    
    .code-dot.red { background: #ff5f56; }
    .code-dot.yellow { background: #ffbd2e; }
    .code-dot.green { background: #27ca3f; }
    
    .code-title {
        font-size: 0.7rem;
        color: var(--text-secondary);
    }
    
    .code-content {
        padding: 0.5rem;
    }
    
    .code-line {
        display: block;
        margin-bottom: 0.2rem;
    }
`;
document.head.appendChild(style); 
