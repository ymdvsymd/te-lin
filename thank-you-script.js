// Configuration constants
const CONFETTI_CREATION_PROBABILITY = 0.3; // 30% chance
const QUOTE_ROTATION_PROBABILITY = 0.3; // 30% chance

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize thank you page features
    initializeCelebration();
    initializeQuoteRotation();
    createFloatingElements();
    showWelcomeMessage();
});

// Initialize celebration effects
function initializeCelebration() {
    // Create confetti effect
    createConfetti();
    
    // Add sparkle effects to activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.animation = 'celebrationEntrance 0.6s ease-out';
        }, index * 200);
    });
    
    // Add staggered animation to vision cards
    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.animation = 'celebrationEntrance 0.8s ease-out';
        }, (index * 300) + 1000);
    });
}

// Create confetti particles
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 8 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(function() {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
    
    // Create initial burst of confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfettiPiece, i * 100);
    }
    
    // Continue creating confetti periodically
    setInterval(function() {
        if (Math.random() < CONFETTI_CREATION_PROBABILITY) {
            createConfettiPiece();
        }
    }, 1000);
}

// Initialize quote rotation
function initializeQuoteRotation() {
    const quotes = [
        "あなたの存在そのものが、この世界への贈り物です",
        "今日という日は、あなたのための特別な日です",
        "あなたの笑顔が、誰かの希望になっています",
        "小さな一歩でも、それは確実に前進です",
        "あなたには無限の可能性が眠っています",
        "困難は成長のための階段です",
        "あなたの優しさが世界を変えています",
        "今この瞬間も、新しい始まりです",
        "あなたがいることで、世界がより美しくなります",
        "挫折は成功への道標です",
        "あなたの人生には価値があります",
        "明日はきっと今日より良い日になります"
    ];
    
    const quoteElement = document.getElementById('daily-quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    let currentQuoteIndex = 0;
    
    newQuoteBtn.addEventListener('click', function() {
        // Add button animation
        newQuoteBtn.style.transform = 'scale(0.95)';
        
        setTimeout(function() {
            newQuoteBtn.style.transform = 'scale(1)';
            
            // Change quote with fade effect
            quoteElement.style.opacity = '0';
            
            setTimeout(function() {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteElement.textContent = `「${quotes[currentQuoteIndex]}」`;
                quoteElement.style.opacity = '1';
                
                // Add sparkle effect
                createSparkleEffect(quoteElement);
            }, 300);
        }, 150);
    });
    
    // Auto-rotate quotes every 10 seconds
    setInterval(function() {
        if (Math.random() < QUOTE_ROTATION_PROBABILITY) { // 30% chance every 10 seconds
            newQuoteBtn.click();
        }
    }, 10000);
}

// Create sparkle effect
function createSparkleEffect(element) {
    const sparkles = ['✨', '⭐', '🌟', '💫'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10000';
            sparkle.style.animation = 'sparkle 2s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(function() {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }, i * 200);
    }
}

// Create floating elements
function createFloatingElements() {
    const elements = ['🌈', '🦋', '🌸', '🌺', '🍀', '🌙', '☀️'];
    const container = document.body;
    
    function createFloatingElement() {
        const element = document.createElement('div');
        element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.bottom = '-50px';
        element.style.fontSize = Math.random() * 1 + 1.5 + 'rem';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1';
        element.style.animation = `floatUp ${Math.random() * 3 + 5}s ease-out forwards`;
        
        container.appendChild(element);
        
        setTimeout(function() {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, 8000);
    }
    
    // Create floating elements periodically
    setInterval(createFloatingElement, 2000);
    
    // Create initial elements
    for (let i = 0; i < 3; i++) {
        setTimeout(createFloatingElement, i * 1000);
    }
}

// Show welcome message
function showWelcomeMessage() {
    setTimeout(function() {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.innerHTML = '🎊 素晴らしい選択をありがとうございます！ 🎊';
        welcomeMsg.style.position = 'fixed';
        welcomeMsg.style.top = '20px';
        welcomeMsg.style.left = '50%';
        welcomeMsg.style.transform = 'translateX(-50%)';
        welcomeMsg.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
        welcomeMsg.style.color = 'white';
        welcomeMsg.style.padding = '15px 30px';
        welcomeMsg.style.borderRadius = '25px';
        welcomeMsg.style.boxShadow = '0 10px 30px rgba(0, 184, 148, 0.3)';
        welcomeMsg.style.zIndex = '10000';
        welcomeMsg.style.fontSize = '16px';
        welcomeMsg.style.fontWeight = 'bold';
        welcomeMsg.style.opacity = '0';
        welcomeMsg.style.transform = 'translateX(-50%) translateY(-20px)';
        welcomeMsg.style.transition = 'all 0.5s ease';
        
        document.body.appendChild(welcomeMsg);
        
        setTimeout(function() {
            welcomeMsg.style.opacity = '1';
            welcomeMsg.style.transform = 'translateX(-50%) translateY(0)';
        }, 100);
        
        setTimeout(function() {
            welcomeMsg.style.opacity = '0';
            welcomeMsg.style.transform = 'translateX(-50%) translateY(-20px)';
            
            setTimeout(function() {
                if (welcomeMsg.parentNode) {
                    welcomeMsg.parentNode.removeChild(welcomeMsg);
                }
            }, 500);
        }, 5000);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add hover effects for interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('activity-card') || 
        e.target.classList.contains('vision-card')) {
        createSparkleEffect(e.target);
    }
});

// Celebration sound (visual feedback since we can't use audio)
function celebrateVisually() {
    const celebration = document.createElement('div');
    celebration.innerHTML = '🎉';
    celebration.style.position = 'fixed';
    celebration.style.top = '50%';
    celebration.style.left = '50%';
    celebration.style.transform = 'translate(-50%, -50%)';
    celebration.style.fontSize = '10rem';
    celebration.style.pointerEvents = 'none';
    celebration.style.zIndex = '10000';
    celebration.style.animation = 'celebrationPulse 2s ease-out forwards';
    
    document.body.appendChild(celebration);
    
    setTimeout(function() {
        if (celebration.parentNode) {
            celebration.parentNode.removeChild(celebration);
        }
    }, 2000);
}

// Add celebration pulse animation
const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = `
    @keyframes celebrationPulse {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(celebrationStyle);

// Trigger initial celebration
setTimeout(celebrateVisually, 1000);