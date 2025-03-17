
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
  
  // Handle active menu items based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
    
    // If at the top of the page, highlight Home
    if (scrollPosition < 100) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#home') {
          item.classList.add('active');
        }
      });
    }
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
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
  const elements = document.querySelectorAll('.card, .stat-card, .download-card, .section-header, .text-content, .related-topics');
  elements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
  
  // Download button functionality
  const downloadButtons = document.querySelectorAll('.download-button, .btn-primary');
  downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.closest('a') && this.closest('a').getAttribute('href') !== '#download') {
        return; // Don't trigger for non-download links
      }
      
      alert('Download started! In a real application, this would download the integrity checker application.');
      
      // Simulate download
      const a = document.createElement('a');
      a.href = '#'; // In a real app, this would be the download URL
      a.download = 'integrity-checker.exe';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
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
