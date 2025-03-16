document.addEventListener('DOMContentLoaded', function() {
    const modules = document.querySelectorAll('.module');
    
    modules.forEach(module => {
        const arrowIcon = module.querySelector('.arrow-icon');
        
        module.addEventListener('click', function() {
            module.classList.toggle('open');
            arrowIcon.classList.toggle('rotate');
        });
    });
  });
  