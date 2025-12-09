// DOM Elements
const playBtn = document.getElementById('playBtn');
const confettiBtn = document.getElementById('confettiBtn');
const birthdayAudio = document.getElementById('birthdayAudio');
const counters = {
    gift: document.getElementById('giftCount'),
    candle: document.getElementById('candleCount'),
    wish: document.getElementById('wishCount')
};

// State
let isPlaying = false;
let counts = { gift: 0, candle: 0, wish: 0 };
let animationFrameId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    startCounters();
    preloadAudio();
    
    // Add keyboard support
    playBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAudio();
        }
    });
    
    confettiBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            createConfetti();
        }
    });
});

// Preload audio for better UX
function preloadAudio() {
    birthdayAudio.load();
}

// Audio Control
function toggleAudio() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    birthdayAudio.play()
        .then(() => {
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i> <span class="btn-text">Pause Music</span>';
            playBtn.classList.add('playing');
            createFireworks();
            startMusicEffects();
        })
        .catch(e => {
            console.log("Audio play failed:", e);
            // Show user-friendly message
            playBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <span class="btn-text">Click to Enable Audio</span>';
            playBtn.style.backgroundColor = '#ff9800';
            setTimeout(() => {
                playBtn.innerHTML = '<i class="fas fa-play"></i> <span class="btn-text">Play Birthday Song</span>';
                playBtn.style.backgroundColor = '';
            }, 2000);
        });
}

function pauseAudio() {
    birthdayAudio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i> <span class="btn-text">Play Birthday Song</span>';
    playBtn.classList.remove('playing');
    stopMusicEffects();
}

// Confetti Button
confettiBtn.addEventListener('click', createConfetti);

// Create Confetti
function createConfetti() {
    const colors = ['#FF6B8B', '#FFD166', '#06D6A0', '#118AB2', '#9D4EDD'];
    const confettiContainer = document.querySelector('.confetti-overlay');
    const particleCount = window.innerWidth < 768 ? 75 : 150;
    
    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 12 + 4 + 'px';
        confetti.style.height = Math.random() * 12 + 4 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = '0.8';
        confetti.style.position = 'absolute';
        confetti.style.zIndex = '1000';
        
        confettiContainer.appendChild(confetti);
        
        // Animate confetti
        const animation = confetti.animate([
            { 
                transform: `translateY(-20px) rotate(0deg)`,
                opacity: 1 
            },
            { 
                transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0 
            }
        ], {
            duration: Math.random() * 2000 + 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        };
    }
    
    // Update wish counter with smooth animation
    updateCounter('wish');
    
    // Button feedback animation
    confettiBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        confettiBtn.style.transform = '';
    }, 150);
}

// Create Floating Hearts
function createHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartCount = Math.min(15, Math.floor(window.innerWidth / 50));
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 12 + 18 + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = Math.random() * 8 + 8 + 's';
        heart.style.setProperty('--random-x', Math.random() * 2 - 1);
        heartsContainer.appendChild(heart);
    }
}

// Create Fireworks
function createFireworks() {
    const container = document.querySelector('.fireworks-container');
    if (!container) return;
    
    const fireworkCount = window.innerWidth < 768 ? 5 : 10;
    
    for (let i = 0; i < fireworkCount; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'fixed';
            firework.style.width = '4px';
            firework.style.height = '4px';
            firework.style.borderRadius = '50%';
            firework.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
            firework.style.left = Math.random() * 90 + 5 + 'vw';
            firework.style.top = Math.random() * 40 + 10 + 'vh';
            firework.style.zIndex = '5';
            firework.style.boxShadow = '0 0 15px currentColor';
            
            container.appendChild(firework);
            
            // Explode animation
            firework.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(0)', opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            });
            
            // Create particles
            setTimeout(() => {
                const particleCount = window.innerWidth < 768 ? 20 : 30;
                for (let j = 0; j < particleCount; j++) {
                    const particle = document.createElement('div');
                    particle.style.position = 'fixed';
                    particle.style.width = '2px';
                    particle.style.height = '2px';
                    particle.style.borderRadius = '50%';
                    particle.style.background = firework.style.background;
                    particle.style.left = firework.style.left;
                    particle.style.top = firework.style.top;
                    particle.style.zIndex = '5';
                    
                    container.appendChild(particle);
                    
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 80 + 40;
                    
                    particle.animate([
                        { 
                            transform: 'translate(0, 0) scale(1)',
                            opacity: 1 
                        },
                        { 
                            transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                            opacity: 0 
                        }
                    ], {
                        duration: 1000,
                        easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
                    }).onfinish = () => {
                        if (particle.parentNode) {
                            particle.remove();
                        }
                    };
                }
                if (firework.parentNode) {
                    firework.remove();
                }
            }, 800);
        }, i * 300);
    }
}

// Music Effects
function startMusicEffects() {
    let lastTime = 0;
    
    function animate(time) {
        if (!isPlaying) return;
        
        const deltaTime = time - lastTime;
        if (deltaTime > 100) {
            // Gentle background pulse
            document.body.style.backgroundPosition = `${Math.sin(time * 0.001) * 10}px ${Math.cos(time * 0.0007) * 10}px`;
            lastTime = time;
        }
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    animationFrameId = requestAnimationFrame(animate);
}

function stopMusicEffects() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    document.body.style.backgroundPosition = '';
}

// Counter Animation
function startCounters() {
    const targetCounts = { gift: 25, candle: 18, wish: 99 };
    
    Object.keys(targetCounts).forEach(key => {
        const interval = setInterval(() => {
            counts[key] += Math.ceil(targetCounts[key] / 50);
            if (counts[key] >= targetCounts[key]) {
                counts[key] = targetCounts[key];
                clearInterval(interval);
            }
            counters[key].textContent = counts[key];
        }, 30);
    });
}

function updateCounter(type) {
    counts[type] += Math.floor(Math.random() * 3) + 1;
    counters[type].textContent = counts[type];
    
    // Animate counter
    const counterElement = counters[type];
    counterElement.style.transform = 'scale(1.3)';
    counterElement.style.color = '#FF6B8B';
    counterElement.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
        counterElement.style.color = '';
    }, 300);
}

// Interactive background effect
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const particles = document.createElement('div');
        particles.style.position = 'fixed';
        particles.style.left = e.clientX + 'px';
        particles.style.top = e.clientY + 'px';
        particles.style.width = '3px';
        particles.style.height = '3px';
        particles.style.borderRadius = '50%';
        particles.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        particles.style.pointerEvents = 'none';
        particles.style.zIndex = '1';
        
        document.body.appendChild(particles);
        
        particles.animate([
            { transform: 'scale(1)', opacity: 0.7 },
            { transform: 'scale(0)', opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => {
            if (particles.parentNode) {
                particles.remove();
            }
        };
    }
});

// Auto confetti every 15 seconds when music is playing
setInterval(() => {
    if (isPlaying && Math.random() > 0.3) {
        createConfetti();
    }
}, 15000);

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (isPlaying) {
            birthdayAudio.pause();
        }
    } else {
        if (isPlaying) {
            birthdayAudio.play();
        }
    }
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recreate hearts for new screen size
        const heartsContainer = document.querySelector('.floating-hearts');
        if (heartsContainer) {
            heartsContainer.innerHTML = '';
            createHearts();
        }
    }, 250);
});

// Event listeners
playBtn.addEventListener('click', toggleAudio);
confettiBtn.addEventListener('click', createConfetti);

// Add focus styles for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});