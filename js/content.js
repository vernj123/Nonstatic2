/**
 * NonstaticAI Content JavaScript
 * Handles dynamic content loading and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add featured badges to selected cards
  const featuredTools = document.querySelectorAll('.card:nth-child(1), .card:nth-child(3)');
  featuredTools.forEach(tool => {
    const badge = document.createElement('div');
    badge.className = 'featured-badge';
    badge.textContent = 'Featured';
    tool.style.position = 'relative';
    tool.appendChild(badge);
  });
  
  // Add neon border to the first featured tool
  const firstFeaturedTool = document.querySelector('.card:first-child');
  if (firstFeaturedTool) {
    firstFeaturedTool.classList.add('neon-border');
  }
  
  // Add CTA pulse effect to primary buttons
  const primaryButtons = document.querySelectorAll('.hero .btn, .newsletter-form button');
  primaryButtons.forEach(button => {
    button.classList.add('btn-cta');
  });
  
  // Add floating effect to icons in the "Why Choose" section
  const featureIcons = document.querySelectorAll('.card .fas');
  featureIcons.forEach(icon => {
    icon.classList.add('floating');
  });
  
  // Add gradient text effect to section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.classList.add('gradient-text');
  });
  
  // Simulate typing effect for hero heading
  const heroHeading = document.querySelector('.hero h1');
  if (heroHeading) {
    // Store original text
    const originalText = heroHeading.textContent;
    // Clear text
    heroHeading.textContent = '';
    // Create span for typing effect
    const typingSpan = document.createElement('span');
    typingSpan.className = 'typing-effect';
    typingSpan.textContent = originalText;
    heroHeading.appendChild(typingSpan);
  }
  
  // Add affiliate disclaimer to product cards
  const productCards = document.querySelectorAll('.card .btn');
  productCards.forEach(button => {
    if (button.textContent.includes('Review')) {
      const cardContent = button.closest('.card-content');
      const disclaimer = document.createElement('p');
      disclaimer.className = 'affiliate-disclaimer';
      disclaimer.textContent = 'This post may contain affiliate links';
      disclaimer.style.fontSize = '0.8rem';
      disclaimer.style.marginTop = '10px';
      disclaimer.style.color = 'var(--text-secondary)';
      disclaimer.style.fontStyle = 'italic';
      cardContent.appendChild(disclaimer);
    }
  });
});
