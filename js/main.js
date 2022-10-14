// MOSTRAR/OCULTAR MENÚ NAVEGACIÓN 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


// MOSTRAR/OCULTAR LOGO EN HEADER

const headerLogo = document.querySelector('.logo');
const introLogo = document.querySelector('.intro-title');

const introLogoOptions = {
        rootMargin: '-100px 0px 0px 0px'
};

const introLogoObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            headerLogo.classList.add('logo-show');
        }
        else {
            headerLogo.classList.remove('logo-show');
        }
        
    });

}, introLogoOptions);

introLogoObserver.observe(introLogo);