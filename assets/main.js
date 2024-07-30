// ---------------------------------------------------
// ------------ navbar animation ---------------------
// ---------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});



// ---------------------------------------------------
// ------------ hero image animation -----------------
// ---------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'assets/images/home/bg-1.jpg',
        'assets/images/home/bg-2.jpg',
        'assets/images/home/bg-3.jpg'
    ];
    let currentImageIndex = 0;

    const hero = document.querySelector('.hero');
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        if (index === 0) {
            img.classList.add('active');
        }
        hero.appendChild(img);
    });

    setInterval(() => {
        const currentImage = document.querySelector('.hero img.active');
        currentImage.classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = document.querySelectorAll('.hero img')[currentImageIndex];
        nextImage.classList.add('active');
    }, 5000);
});



// Ensure the logos animation runs continuously
const logoContainer = document.querySelector('.logo-container');
const logos = Array.from(logoContainer.children);

let cloneLogos = () => {
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        logoContainer.appendChild(clone);
    });
};

cloneLogos();



document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
