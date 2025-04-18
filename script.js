document.addEventListener('DOMContentLoaded', function () {
    // Declare particlesJS as a global variable to avoid "Uncaught ReferenceError"
    window.particlesJS = window.particlesJS || {};

    // Set loaded state for initial animations with a slight delay for a more gradual appearance
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((element, index) => {
            // Stagger the fade-ins for a more subtle effect
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        });

        // Add other animations with a slight delay
        setTimeout(() => {
            document.querySelectorAll('.fade-in-left, .fade-in-right, .zoom-in').forEach(element => {
                element.classList.add('visible');
            });
        }, 300);
    }, 200);

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navItems = document.getElementById('nav-items');

    if (mobileMenuToggle && navItems) {
        mobileMenuToggle.addEventListener('click', () => {
            navItems.classList.toggle('show');

            // Change button text based on state
            if (navItems.classList.contains('show')) {
                mobileMenuToggle.innerHTML = 'Close <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileMenuToggle.innerHTML = 'Menu <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon"><path d="m18 15-6-6-6 6"></path></svg>';
            }
        });

        // Close menu when clicking on a link
        navItems.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 640) {
                    navItems.classList.remove('show');
                    mobileMenuToggle.innerHTML = 'Menu <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon"><path d="m18 15-6-6-6 6"></path></svg>';
                }
            });
        });
    }

    // Add scroll animation effect - more subtle with higher threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay for a more natural feel
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 150);
            }
        });
    }, {
        threshold: 0.15, // Slightly higher threshold for more intentional animations
        rootMargin: '0px 0px -50px 0px' // Only animate when more visible in viewport
    });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .zoom-in').forEach(element => {
        observer.observe(element);
    });

    // Handle resize for responsive behavior
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 640 && navItems && navItems.classList.contains('show')) {
            navItems.classList.remove('show');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = 'Menu <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon"><path d="m18 15-6-6-6 6"></path></svg>';
            }
        }
    });

    // Smooth scrolling for anchor links - slightly slower for a more professional feel
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Position circles with subtle random positions on small screens
    if (window.innerWidth <= 768) {
        const circles = document.querySelectorAll('.circle-large, .circle-medium, .circle-small, .circle-tiny');
        circles.forEach(circle => {
            if (!circle.classList.contains('hidden-mobile')) {
                // Reduced random movement
                let randomX = Math.floor(Math.random() * 40) - 20; // Reduced range
                let randomY = Math.floor(Math.random() * 40) - 20; // Reduced range
                circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }
        });
    }

    // Initialize particles.js with more subtle settings
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40, // Reduced number of particles
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: ["#0063A5", "#FF6D2C", "#E0F3FF"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.2, // Reduced opacity
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5, // Slower animation
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3, // Smaller particles
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1, // Slower animation
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#0063A5",
                    opacity: 0.1, // Reduced opacity
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.5, // Slower movement
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: false, // Disabled click interaction
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3 // Reduced opacity
                        }
                    }
                }
            },
            retina_detect: true
        });
    }

    // Add subtle tilt effect on scroll for elements with tilt-on-scroll class
    const tiltElements = document.querySelectorAll('.tilt-on-scroll');

    window.addEventListener('scroll', () => {
        tiltElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollPercentage = (windowHeight - rect.top) / (windowHeight + rect.height);
                const tiltX = (scrollPercentage - 0.5) * 3; // Reduced tilt angle

                element.style.transform = `perspective(1000px) rotateX(${tiltX}deg)`;
            }
        });
    });
});