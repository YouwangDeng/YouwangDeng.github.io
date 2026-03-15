// Language toggle — EN ↔ ZH
(function() {
  const STORAGE_KEY = 'blog-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Get the equivalent path in the other language
  function getTogglePath(lang) {
    const path = window.location.pathname;
    if (lang === 'zh') {
      // en → zh: /posts/foo → /zh/posts/foo, / → /zh/
      if (path.startsWith('/zh/')) return path; // already zh
      return '/zh' + (path === '/' ? '/' : path);
    } else {
      // zh → en: /zh/posts/foo → /posts/foo, /zh/ → /
      if (!path.startsWith('/zh')) return path; // already en
      const stripped = path.replace(/^\/zh/, '') || '/';
      return stripped;
    }
  }

  function isCurrentZh() {
    return window.location.pathname.startsWith('/zh');
  }

  // On load: if stored lang doesn't match current path, redirect
  function autoRedirect() {
    const storedLang = getLang();
    const onZh = isCurrentZh();
    // Only redirect on first visit (not if user manually navigated)
    // Skip redirect to avoid loops — let the toggle button handle it
  }

  // Create toggle button
  function createToggle() {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;

    const btn = document.createElement('button');
    btn.className = 'lang-toggle';
    btn.textContent = isCurrentZh() ? 'EN' : '中文';
    btn.title = isCurrentZh() ? 'Switch to English' : '切换中文';
    btn.addEventListener('click', function() {
      const targetLang = isCurrentZh() ? 'en' : 'zh';
      setLang(targetLang);
      window.location.href = getTogglePath(targetLang);
    });

    nav.appendChild(btn);
  }

  // Set stored lang based on current page
  if (isCurrentZh()) {
    setLang('zh');
  }

  document.addEventListener('DOMContentLoaded', createToggle);
})();
