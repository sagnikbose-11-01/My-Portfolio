/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((item) => item.addEventListener('click', linkAction));






/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = ()=>{
    const header = document.getElementById('header');
    //when the scroll is greater than 50 viewport height add the class 'blur-header' to the header
    window.scrollY >= 50? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);






/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e)=>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_338z5jm', 'template_6uxtcu2', '#contact-form', 'GJvz5ESheP3r9tBkL')
    .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();

    }, ()=>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';

        // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
    })
}
      

contactForm.addEventListener('submit', sendEmail);





/*=============== SHOW SCROLL UP ===============*/ 


const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350vh adding the class '.show-scroll' to the element with id '#scroll-up'
    window.scrollY >=350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scroll_y = window.scrollY;

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scroll_y > sectionTop && scroll_y <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);





/*=============== SCROLL REVEAL ANIMATION ===============*/
const animate = ScrollReveal({
    origin:"top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    //reset: true //animations repeat
})


animate.reveal('.home__data, .home__social, .contact__container, .footer__container');
animate.reveal('.home__image', {origin: "bottom"});
animate.reveal('.about__data, .skills__data', {origin: "left"});
animate.reveal('.about__image, .skills__content', {origin: "right"});
animate.reveal('.services__card, .projects__card', {interval: 100});