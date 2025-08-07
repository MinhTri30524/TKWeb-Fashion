const currentHref = window.location.href;
const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    if (currentHref.includes(link.href)) {
        link.classList.add('active');
    }
});
