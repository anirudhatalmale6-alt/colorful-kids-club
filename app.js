// Reveal on scroll
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Mobile menu
const burger=document.querySelector('.burger');
if(burger){burger.addEventListener('click',()=>{document.querySelector('header.nav').classList.toggle('open')})}
