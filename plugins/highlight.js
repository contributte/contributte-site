import highlightjs from 'highlight.js';

document.addEventListener("DOMContentLoaded", () => {
  alert('a');
  document.querySelectorAll('pre code').forEach(b => {
    highlightjs.highlightBlock(b);
  });

  document.querySelectorAll('a').forEach(ahref => {
    ahref.onclick = (e) => {
      if (!e.target.hash) return;
      const hash = e.target.hash.substring(1);

      const anchor = document.getElementById('user-content-' + hash);
      if (anchor) {
        window.scrollTo(window.scrollX, anchor.getBoundingClientRect().top + window.scrollY)
      }
    };
  });
});
