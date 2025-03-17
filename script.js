
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      console.log('Mobile menu toggled');
    });
  }
  
  // Simple animation for cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards, stat cards, and other elements that should animate on scroll
  const elements = document.querySelectorAll('.card, .stat-card, .download-card, .section-header');
  elements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
  
  // Download button functionality
  const downloadButton = document.querySelector('.download-action .btn');
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      alert('Download started! In a real application, this would download the integrity checker application.');
      
      // Simulate download
      const a = document.createElement('a');
      a.href = '#'; // In a real app, this would be the download URL
      a.download = 'integrity-checker.exe';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
});

// Add fade-in animation class
document.addEventListener('DOMContentLoaded', function() {
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .fade-in {
        animation: fadeIn 0.6s ease forwards;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `);
});
