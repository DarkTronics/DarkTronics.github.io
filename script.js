document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only prevent default for internal links (anchors)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

  