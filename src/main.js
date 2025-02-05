const navbar = document.getElementById('navbar');
const main = document.getElementById("main")
let lastScrollTop = 0;
let hideNavbarTimeout = null;

document.addEventListener('DOMContentLoaded', function () {
    navbar.classList.add('navbar-transparent');
});

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Make navbar transparent when at the top
    if (scrollTop === 0) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');
    }

    if (scrollTop > lastScrollTop) {
        // Scrolling down - Delay hiding for smoothness
        clearTimeout(hideNavbarTimeout);
        hideNavbarTimeout = setTimeout(() => {
            navbar.classList.add('navbar-hidden');
        }, 150); 
    } else {
        // Scrolling up - Show smoothly
        clearTimeout(hideNavbarTimeout);
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = scrollTop;
});

function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    slideMenu.classList.toggle('translate-x-full')
}