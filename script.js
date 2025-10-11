// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const liveButton = document.getElementById('live-button');
    
    // Add click event listener to the conversion button
    liveButton.addEventListener('click', function() {
        // Add a small delay for better user experience
        liveButton.style.transform = 'scale(0.95)';
        liveButton.innerHTML = '✨ ありがとうございます！';
        
        setTimeout(function() {
            // Navigate to thank you page
            window.location.href = 'thank-you.html';
        }, 800);
    });
    
    // Add some interactive elements
    addFloatingElements();
    addScrollAnimations();
});

// Add floating elements for visual appeal
function addFloatingElements() {
    const body = document.body;
    const floatingElements = ['✨', '🌟', '💖', '🌈', '🦋', '🌸'];
    
    setInterval(function() {
        const element = document.createElement('div');
        element.innerHTML = floatingElements[Math.floor(Math.random() * floatingElements.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = '100vh';
        element.style.fontSize = '2rem';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1000';
        element.style.animation = 'floatUp 6s ease-out forwards';
        
        body.appendChild(element);
        
        // Remove element after animation
        setTimeout(function() {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, 6000);
    }, 3000);
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some encouraging messages that appear randomly
const encouragingMessages = [
    '今日も素敵な一日ですね！',
    'あなたがいてくれて嬉しいです',
    '明日はもっと良い日になりますよ',
    'あなたの笑顔が世界を明るくします',
    '生きていてくれて、ありがとう'
];

// Show encouraging message occasionally
setTimeout(function() {
    setInterval(function() {
        if (Math.random() < 0.3) { // 30% chance
            showEncouragingMessage();
        }
    }, 10000); // Every 10 seconds
}, 5000); // Start after 5 seconds

function showEncouragingMessage() {
    const message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.background = 'linear-gradient(135deg, #74b9ff, #0984e3)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '15px 20px';
    messageDiv.style.borderRadius = '25px';
    messageDiv.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    messageDiv.style.zIndex = '10000';
    messageDiv.style.fontSize = '14px';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateX(100px)';
    messageDiv.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(messageDiv);
    
    // Show message
    setTimeout(function() {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide message after 4 seconds
    setTimeout(function() {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100px)';
        
        setTimeout(function() {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 4000);
}