function smoothScroll(element) {
    var target = document.querySelector(element);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  
  // Add event listeners to the navigation links
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      smoothScroll(link.getAttribute('href'));
    });
  });
  