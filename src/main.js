const navLinks = document.querySelector('.nav-links')
const slideMenu = document.getElementById('slideMenu')
const navbar = document.getElementById('navbar')

let lastScrollTop = 0

function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    slideMenu.classList.toggle('translate-x-full')
}

window.addEventListener('scroll', function() {
    let scrollTop = this.window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        //Scrolling down
        navbar.classList.add('-translate-y-full')
    } else {
        //Scrolling up
        navbar.classList.remove('-translate-y-full')
    }
    lastScrollTop = scrollTop
})