// ========================================
// スムーススクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ========================================
// スクロールアニメーション
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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

animateElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ========================================
// フィードバック処理
// ========================================
const feedbackForm = document.getElementById('feedback-form');
const feedbackRadios = document.querySelectorAll('input[name="feedback"]');
let feedbackSubmitted = false;

if (feedbackForm) {
  feedbackRadios.forEach((radio) => {
    radio.addEventListener('change', function () {
      // 既に送信済みの場合は何もしない
      if (feedbackSubmitted) {
        this.checked = false;
        return;
      }

      const feedbackValue = this.value;

      // ローカルストレージに保存
      try {
        localStorage.setItem('userFeedback', feedbackValue);
        localStorage.setItem('feedbackTimestamp', new Date().toISOString());

        // CV価値を設定
        const conversionValues = {
          helpful: 100,
          'not-helpful': 25,
        };

        const conversionValue = conversionValues[feedbackValue] || 0;
        localStorage.setItem('conversionValue', conversionValue);

        // トラッキングイベント発火
        trackEvent('feedback_submission', {
          feedback_type: feedbackValue,
          conversion_value: conversionValue,
        });

        // メッセージを表示
        displayFeedbackMessage(feedbackValue);

        // ラジオボタンを無効化
        disableFeedbackRadios();

        // 送信済みフラグを設定
        feedbackSubmitted = true;
      } catch (error) {
        console.error('Error saving feedback:', error);
        this.checked = false;
      }
    });
  });
}

// ========================================
// フィードバックメッセージを表示
// ========================================
function displayFeedbackMessage(feedbackValue) {
  const messageContainer = document.getElementById('feedback-message');
  if (!messageContainer) return;

  const messages = {
    helpful:
      'ご共感いただきありがとうございます！老荘思想の教えが少しでもお役に立てれば幸いです。',
    'not-helpful':
      '率直なご意見をありがとうございます。より良いコンテンツづくりに活かします。',
  };

  const message = messages[feedbackValue] || '';

  messageContainer.innerHTML = `
    <div class="feedback-response">
      <p class="feedback-response-text">${message}</p>
    </div>
  `;
  messageContainer.style.display = 'block';
}

// ========================================
// ラジオボタンを無効化
// ========================================
function disableFeedbackRadios() {
  feedbackRadios.forEach((radio) => {
    radio.disabled = true;
  });

  // ラジオボタンのラベルにdisabledクラスを追加
  document.querySelectorAll('.feedback-option').forEach((option) => {
    option.classList.add('disabled');
  });
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
            radial-gradient(circle at ${(1 - mouseX) * 100}% ${
      (1 - mouseY) * 100
    }%,
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
// Google Analytics トラッキング（GTM連携）
// ========================================
// GTMのデータレイヤーが初期化されていることを確認
window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, eventParams = {}) {
  // GTMのデータレイヤーに 'event' キーを含むオブジェクトを送信する
  window.dataLayer.push({
    event: eventName, // ← これがGTMのトリガー名になる
    ...eventParams, // ← eventParamsの中身がそのままGTMに渡される
  });

  console.log('Event pushed to dataLayer:', eventName, eventParams);
}

// CTAボタンのクリックをトラッキング
document.querySelectorAll('.cta-button').forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent.trim();
    trackEvent('cta_click', {
      button_text: buttonText,
      button_location: button.closest('section')?.id || 'unknown',
    });
  });
});

// 相談窓口リンクのクリックをトラッキング
document.querySelectorAll('.support-link').forEach((link) => {
  link.addEventListener('click', () => {
    const linkText =
      link.closest('.support-card')?.querySelector('h3')?.textContent ||
      'unknown';
    trackEvent('support_link_click', {
      support_service: linkText,
    });
  });
});
