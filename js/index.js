window.addEventListener('scroll', () => {
    document.querySelector('navbar').classList.toggle('window-scroll', window.scrollY > 0)
})

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
