
        // Loader
        window.addEventListener('load', () => {
            document.getElementById('loader').classList.add('hidden');
        });

        // Custom Cursor
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Skill Progress Bars Animation
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const animateProgressBars = () => {
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        };

        // Intersection Observer for skills section
        const skillsSection = document.getElementById('skills');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);

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

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.querySelector('.logo').style.color = '#333';
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.color = '#333';
                });
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.querySelector('.logo').style.color = 'white';
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.color = 'white';
                });
            }
        })