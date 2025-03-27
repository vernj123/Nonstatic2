/**
 * NonstaticAI Animations JavaScript
 * Handles animations and visual effects for the website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add neon glow effect to cards on hover
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Get random neon color
      const neonColors = [
        'rgba(157, 78, 221, 0.4)', // Purple
        'rgba(58, 134, 255, 0.4)', // Blue
        'rgba(0, 245, 212, 0.4)'   // Green
      ];
      const randomNeon = neonColors[Math.floor(Math.random() * neonColors.length)];
      
      // Apply glow effect
      this.style.boxShadow = `0 10px 25px rgba(0, 0, 0, 0.4), 0 0 20px ${randomNeon}`;
    });
    
    card.addEventListener('mouseleave', function() {
      // Reset to original shadow
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    });
  });
  
  // Animate section titles on scroll
  const sectionTitles = document.querySelectorAll('.section-title');
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Add animation class when scrolled into view
  function handleScrollAnimation() {
    sectionTitles.forEach(title => {
      if (isInViewport(title) && !title.classList.contains('animate-title')) {
        title.classList.add('animate-title');
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Initial check on page load
  handleScrollAnimation();
});
