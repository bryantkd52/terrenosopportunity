window.addEventListener('scroll', () => {
    const slides = document.querySelectorAll('.slide');
    const sections = document.querySelectorAll('section');

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Controla el desvanecimiento de las imágenes en la galería dinámica
    slides.forEach((slide) => {
        const slideHeight = slide.offsetHeight;
        const slideTop = slide.offsetTop;

        if (scrollTop > slideTop + slideHeight) {
            slide.style.opacity = 0; // Completamente desvanecido si ya pasó todo el slide
        } else if (scrollTop > slideTop) {
            slide.style.opacity = 1 - ((scrollTop - slideTop) / slideHeight); // Desvanecerse cuando está en la parte superior
        } else {
            slide.style.opacity = 1; // Totalmente visible cuando no ha alcanzado el borde superior
        }
    });

    // Controla la visibilidad de las secciones
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollTop > sectionTop + sectionHeight || scrollTop < sectionTop - window.innerHeight) {
            section.classList.add('hidden');
        } else {
            section.classList.remove('hidden');
        }
    });
});

// Desplazamiento suave al hacer clic en los enlaces de la barra de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Desplazamiento suave usando scrollIntoView
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Desplazamiento suave al hacer clic en las flechas de la galería
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const galeriaScroll = document.querySelector('.galeria-scroll');

prevBtn.addEventListener('click', () => {
    galeriaScroll.scrollBy({
        left: -300, // Ajusta según el tamaño de la imagen
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    galeriaScroll.scrollBy({
        left: 300, // Ajusta según el tamaño de la imagen
        behavior: 'smooth'
    });
});
