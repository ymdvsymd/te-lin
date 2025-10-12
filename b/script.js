// ========================================
// スムーススクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// スクロールアニメーション
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を設定
const animateElements = document.querySelectorAll(
    '.empathy-card, .concept-card, .practice-item, .support-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// フォーム送信処理
// ========================================
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        // メールアドレスのバリデーション
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('有効なメールアドレスを入力してください', 'error');
            return;
        }

        // ローカルストレージに保存（実際の運用では適切なバックエンド処理が必要）
        try {
            localStorage.setItem('userEmail', email);

            // サンクスページへリダイレクト
            window.location.href = 'thank-you.html';
        } catch (error) {
            console.error('Error saving email:', error);
            showMessage('エラーが発生しました。もう一度お試しください。', 'error');
        }
    });
}

// ========================================
// メッセージ表示関数
// ========================================
function showMessage(message, type = 'success') {
    // 既存のメッセージを削除
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // メッセージ要素を作成
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        background-color: ${type === 'error' ? '#ffe5e5' : '#e8f5e9'};
        color: ${type === 'error' ? '#c0392b' : '#2e7d32'};
    `;

    // フォームの後に挿入
    newsletterForm.insertAdjacentElement('afterend', messageDiv);

    // 3秒後に自動で削除
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// ========================================
// スクロールインジケーターの非表示
// ========================================
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator && window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '0.8';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});

// ========================================
// 水のアニメーション効果の強化
// ========================================
const waterAnimation = document.querySelector('.water-animation');
if (waterAnimation) {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        waterAnimation.style.background = `
            radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%,
                rgba(255, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${(1 - mouseX) * 100}% ${(1 - mouseY) * 100}%,
                rgba(255, 255, 255, 0.1) 0%, transparent 50%)
        `;
    });
}

// ========================================
// ページ読み込み時の初期アニメーション
// ========================================
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ========================================
// Google Analytics トラッキング（オプション）
// ========================================
// 実際の運用時には適切なGA4トラッキングコードを追加してください
function trackEvent(eventName, eventParams = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
    }
    console.log('Event tracked:', eventName, eventParams);
}

// CTAボタンのクリックをトラッキング
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        trackEvent('cta_click', {
            button_text: buttonText,
            button_location: button.closest('section')?.id || 'unknown'
        });
    });
});

// 相談窓口リンクのクリックをトラッキング
document.querySelectorAll('.support-link').forEach(link => {
    link.addEventListener('click', () => {
        const linkText = link.closest('.support-card')?.querySelector('h3')?.textContent || 'unknown';
        trackEvent('support_link_click', {
            support_service: linkText
        });
    });
});
