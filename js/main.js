const currentHref = window.location.href;
const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    if (currentHref.includes(link.href)) {
        link.classList.add('active');
    }
});


const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}