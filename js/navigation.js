/**
 * NonstaticAI Navigation JavaScript
 * Handles responsive navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get navigation elements
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  const closeButton = document.querySelector('.sidebar li:first-child');
  
  // Initialize navigation state
  if (window.innerWidth <= 800) {
    sidebar.style.display = 'none';
  }
  
  // Show sidebar function
  window.showSidebar = function() {
    sidebar.style.display = 'flex';
    // Add animation class
    sidebar.classList.add('sidebar-active');
    // Prevent body scrolling when sidebar is open
    document.body.style.overflow = 'hidden';
  };
  
  // Hide sidebar function
  window.hideSidebar = function() {
    sidebar.classList.remove('sidebar-active');
    // Use setTimeout to allow animation to complete before hiding
    setTimeout(() => {
      sidebar.style.display = 'none';
      // Restore body scrolling
      document.body.style.overflow = 'auto';
    }, 300);
  };
  
  // Close sidebar when clicking outside
  document.addEventListener('click', function(event) {
    if (sidebar.style.display === 'flex' && 
        !sidebar.contains(event.target) && 
        !menuButton.contains(event.target)) {
      hideSidebar();
    }
  });
  
  // Close sidebar when pressing escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidebar.style.display === 'flex') {
      hideSidebar();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 800) {
      sidebar.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Add active class to current page link
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  const footerLinks = document.querySelectorAll('.footer-links a');
  
  function setActiveLink(links) {
    links.forEach(link => {
      if (link.getAttribute('href') === currentLocation || 
          (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
  
  setActiveLink(navLinks);
  setActiveLink(footerLinks);
});
