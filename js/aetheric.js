/**
 * Aetheric Systems - Modern B2B Landing Page
 * Interactive Logic, Real-Time Dashboard Simulation, and Premium Hover Accents
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initHeaderScroll();
    initMobileNav();
    initDashboardTabs();
    initDashboardSimulations();
    initCursorGlowTracking();
    initTechStackFilter();
    initContactForm();
    initBackToTop();
});

/* ==========================================================================
   1. Navigation Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header-glass');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately in case page loads scrolled down
}

/* ==========================================================================
   2. Mobile Hamburger Menu Toggle
   ========================================================================== */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
            // Toggle hamburger icon states
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5deg, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu on navigation click
        const links = navMenu.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('open');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

/* ==========================================================================
   3. Micro-Dashboard Tab Switching Logic
   ========================================================================== */
function initDashboardTabs() {
    const tabs = document.querySelectorAll('.dash-tab');
    const panes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;
            
            // Set active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Set active panel
            panes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetId) {
                    pane.classList.add('active');
                }
            });
        });
    });
}

/* ==========================================================================
   4. Real-Time Dashboard Data Simulation
   ========================================================================== */
function initDashboardSimulations() {
    // Element References
    const latencyValEl = document.getElementById('dash-latency-val');
    const chartPathEl = document.getElementById('chart-path');
    const logStreamEl = document.getElementById('log-stream');
    const cpuRingEl = document.getElementById('cpu-ring');
    const memRingEl = document.getElementById('mem-ring');
    const cpuTextEl = document.getElementById('cpu-text');
    const memTextEl = document.getElementById('mem-text');
    const activeReqsEl = document.getElementById('dash-requests-val');
    
    // Core parameters for ring charts
    const ringRadius = 38;
    const ringCircumference = 2 * Math.PI * ringRadius; // ~238.76px
    
    // Set circle circumferences
    if (cpuRingEl) cpuRingEl.style.strokeDasharray = ringCircumference;
    if (memRingEl) memRingEl.style.strokeDasharray = ringCircumference;
    
    // Helper to update circular progress
    const updateProgressRing = (element, textElement, percent) => {
        if (!element) return;
        const offset = ringCircumference - (percent / 100) * ringCircumference;
        element.style.strokeDashoffset = offset;
        if (textElement) textElement.textContent = `${percent}%`;
    };
    
    // Mock Log Statements Library
    const logsLibrary = [
        "DB: Pool connection established to replica-east",
        "API: GET /v2/analytics/queries - 200 OK - 18ms",
        "CDN: Purging cached edge-nodes in AP-South-1",
        "SYS: Memory garbage collection completed",
        "SEC: CSRF token handshake initiated",
        "AI: Fine-tuning agent weights deployed to cluster",
        "API: POST /v1/auth/login - 201 Created",
        "JOBS: Background worker pool scale-up initiated",
        "SYS: Docker cluster nodes health status [HEALTHY]",
        "K8S: Automatic replication check complete (9/9 Pods)"
    ];
    
    // Chart Coordinates Storage (X values are fixed: 0, 40, 80, 120, 160, 200, 240, 280, 320, 360)
    let chartData = [80, 60, 90, 45, 55, 30, 75, 40, 65, 50];
    
    // Periodic update interval
    setInterval(() => {
        // 1. Latency Fluctuation
        if (latencyValEl) {
            const rawLatency = Math.floor(Math.random() * 8) + 11; // 11ms to 18ms
            latencyValEl.textContent = `${rawLatency}ms`;
        }
        
        // 2. Active Requests Fluctuation
        if (activeReqsEl) {
            const rawReqs = parseFloat(activeReqsEl.textContent);
            const delta = (Math.random() * 0.4 - 0.2).toFixed(1);
            const newVal = Math.max(1.5, Math.min(8.5, parseFloat(rawReqs) + parseFloat(delta))).toFixed(1);
            activeReqsEl.innerHTML = `${newVal}k <span>+${Math.floor(Math.random()*5)+2}%</span>`;
        }
        
        // 3. SVG Line Chart Update
        if (chartPathEl) {
            // Shift points left and add a new random point
            chartData.shift();
            chartData.push(Math.floor(Math.random() * 70) + 15); // Random y coordinate between 15 and 85
            
            // Build the SVG path string "M 0 y0 Q 20 y0, 40 y1..."
            let dString = `M 0 ${chartData[0]}`;
            for (let i = 1; i < chartData.length; i++) {
                const x = i * 40;
                const prevX = (i - 1) * 40;
                const controlX = prevX + 20;
                dString += ` C ${controlX} ${chartData[i-1]}, ${controlX} ${chartData[i]}, ${x} ${chartData[i]}`;
            }
            chartPathEl.setAttribute('d', dString);
        }
        
        // 4. Live Logs Streaming
        if (logStreamEl) {
            const now = new Date();
            const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
            const randomLog = logsLibrary[Math.floor(Math.random() * logsLibrary.length)];
            
            // Create and append log node
            const logLine = document.createElement('div');
            logLine.className = 'log-line';
            logLine.innerHTML = `<span class="time">[${timeString}]</span><span class="tag">INF:</span>${randomLog}`;
            
            logStreamEl.appendChild(logLine);
            
            // Limit to last 8 lines to prevent visual overflowing
            if (logStreamEl.children.length > 8) {
                logStreamEl.removeChild(logStreamEl.firstChild);
            }
        }
        
        // 5. System Load Ring Fluctuations
        if (cpuRingEl) {
            const newCpu = Math.floor(Math.random() * 20) + 40; // 40% to 60%
            const newMem = Math.floor(Math.random() * 6) + 52; // 52% to 58%
            updateProgressRing(cpuRingEl, cpuTextEl, newCpu);
            updateProgressRing(memRingEl, memTextEl, newMem);
        }
    }, 1800);
    
    // Initial Ring Trigger
    setTimeout(() => {
        updateProgressRing(cpuRingEl, cpuTextEl, 54);
        updateProgressRing(memRingEl, memTextEl, 57);
    }, 200);
}

/* ==========================================================================
   5. Interactive Mouse Cursor-Glow Tracking
   ========================================================================== */
function initCursorGlowTracking() {
    const cards = document.querySelectorAll('.glow-card-outer');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate absolute coordinate relative to card top-left corner
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Apply custom CSS property bindings for CSS backlighting
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/* ==========================================================================
   6. Technology Showcase Tab Filtering
   ========================================================================== */
function initTechStackFilter() {
    const filterButtons = document.querySelectorAll('.tech-filter-btn');
    const techCards = document.querySelectorAll('.tech-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetFilter = button.dataset.filter;
            
            // Set active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter and animate cards
            techCards.forEach(card => {
                const categories = card.dataset.category.split(' ');
                
                if (targetFilter === 'all' || categories.includes(targetFilter)) {
                    // Reveal Card
                    card.classList.remove('hidden');
                    // Small delay for smooth opacity transition
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide Card
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300); // Must match transition speed in CSS
                }
            });
        });
    });
}

/* ==========================================================================
   7. Glassmorphic Form Submission Logic
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('aethericContactForm');
    const formCardInner = document.getElementById('form-card-inner');
    const successState = document.getElementById('contact-success-state');
    
    if (form && formCardInner && successState) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect Input Values
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const scope = document.getElementById('contact-scope').value;
            const projectText = document.getElementById('contact-project').value.trim();
            
            // Standard form validation triggers
            if (!name || !email || !projectText) {
                alert('Please ensure all mandatory field requirements are complete.');
                return;
            }
            
            // Smoothly initiate submission success sequence
            formCardInner.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            formCardInner.style.opacity = '0';
            formCardInner.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                // Hide Form layout
                formCardInner.style.display = 'none';
                
                // Show Success container
                successState.style.display = 'flex';
                successState.style.opacity = '0';
                successState.style.transform = 'scale(0.95)';
                
                // Animate Success appearance
                setTimeout(() => {
                    successState.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    successState.style.opacity = '1';
                    successState.style.transform = 'scale(1)';
                    
                    // Create floating particles for celebratory aesthetics
                    createSuccessParticles(successState);
                }, 50);
            }, 400);
        });
    }
}

// Particle generator helper for form submission
function createSuccessParticles(container) {
    const particleColors = ['#06B6D4', '#8B5CF6', '#3B82F6', '#10B981'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 6 + 4}px`;
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = particleColors[Math.floor(Math.random() * particleColors.length)];
        particle.style.pointerEvents = 'none';
        
        // Spawn around the success circle center
        particle.style.left = '50%';
        particle.style.top = '40%';
        
        container.appendChild(particle);
        
        // Random trajectory math
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 150 + 60;
        const xDist = Math.cos(angle) * velocity;
        const yDist = Math.sin(angle) * velocity;
        
        // Animate via JS keyframes/transitions
        particle.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${xDist}px), calc(-50% + ${yDist}px)) scale(0)`, opacity: 0 }
        ], {
            duration: Math.random() * 1000 + 800,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
            fill: 'forwards'
        });
        
        // Cleanup particle
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

/* ==========================================================================
   8. Back To Top Page Behavior
   ========================================================================== */
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    
    if (btn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
