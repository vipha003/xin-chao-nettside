const navbar = document.getElementById('navbar');
const slideMenu = document.getElementById('slideMenu');
const menuIcon = document.querySelector('ion-icon[name="menu"]');
let lastScrollTop = 0;
let hideNavbarTimeout = null;

document.addEventListener('DOMContentLoaded', () => {
    navbar.classList.add('navbar-transparent');
});

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 10) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');
    }

    if (scrollTop > lastScrollTop + 50) { 
        clearTimeout(hideNavbarTimeout);
        hideNavbarTimeout = setTimeout(() => {
            navbar.classList.add('navbar-hidden');
        }, 200);  // Increase this timeout to delay navbar hiding
    } else if (scrollTop < lastScrollTop - 50 || scrollTop < lastScrollTop) {
        clearTimeout(hideNavbarTimeout);
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = scrollTop;
});

function onToggleMenu(e) {
    const isOpen = slideMenu.classList.toggle('translate-x-full');

    e.name = isOpen ? 'menu' : 'close';

    document.body.classList.toggle('overflow-hidden', !isOpen);
}