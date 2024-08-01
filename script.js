document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80; // Ajustez cette valeur selon la hauteur de votre header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');

    menuToggle.addEventListener('click', function() {
        navContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});