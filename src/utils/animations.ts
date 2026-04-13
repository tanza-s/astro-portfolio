/**
 * Observes elements and applies animation classes when they enter the viewport
 * Usage: call observeAnimations() in a client script
 */
export function observeAnimations() {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px', // Start animation 50px before element enters viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const animationClass = element.dataset.animate;

        if (animationClass) {
          // Add the animation class
          element.classList.add(`animate-${animationClass}`);
          // Optional: stop observing once animated
          observer.unobserve(element);
        }
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  const elementsToAnimate = document.querySelectorAll('[data-animate]');
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

// Auto-run when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAnimations);
  } else {
    observeAnimations();
  }
}
