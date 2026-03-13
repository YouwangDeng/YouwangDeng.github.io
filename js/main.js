// Terminal typing effect
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.blink-cursor');
  if (!cursor) return;

  const posts = document.querySelectorAll('.post-card');
  if (posts.length === 0) return;

  // Build the "ls" output from actual post titles
  const titles = Array.from(posts).map(p => {
    const title = p.querySelector('.post-title');
    return title ? title.textContent.trim() : '';
  });

  setTimeout(() => {
    cursor.classList.remove('blink-cursor');
    let output = '';
    let i = 0;
    const text = titles.join('\n');

    function type() {
      if (i < text.length) {
        output += text[i];
        cursor.textContent = output + '_';
        i++;
        setTimeout(type, 15 + Math.random() * 25);
      } else {
        cursor.innerHTML = output;
        cursor.classList.add('blink-cursor');
      }
    }

    type();
  }, 1200);

  // Subtle parallax on grid
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const grid = document.querySelector('.grid-bg');
        if (grid) {
          grid.style.transform = `translateY(${window.scrollY * 0.15}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
});
