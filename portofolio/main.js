// loading bar logic 

window.addEventListener(`DOMContentLoaded`, () => {
    const percentEL = document.getElementById(`loaderPercent`);
    const barEL = document.getElementById(`loaderBar`);
    const statusEL = document.getElementById(`loaderStatus`);
    const preloader = document.getElementById(`preloader`);

    let count = 0;

    const statuses = [
        { at: 34, text: `property of sh1wafvycna © `},
        { at: 67, text: `property of sh1wafvycna © `},
        { at: 84, text: `property of sh1wafvycna © `},
        { at: 100, text: `property of sh1wafvycna © `},
    ];
function updateLoader() {
    count++;

    if (percentEL) percentEL.textContent = count + '%';
    if (barEL) barEL.style.width = count + '%';

    const foundstatus = statuses.find(s => s .at === count);
    if (foundstatus && statusEL) {
        statusEL.textContent = foundstatus.text;
    }

    if (count >= 100) {
        setTimeout(() => {
            if (preloader) preloader.classList.add('hide');
        },800);
        return;
    }
    let delay = 35;

    if(count === 34) {
        delay =3200;
    } else if (count === 67) {
        delay =7500;
    } else if (count === 84) {
        delay =6000;
    }

    setTimeout(updateLoader, delay);
}

updateLoader();

});

// BIAR GA DI KACAU ORANG 

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase()
===  'i' || e.key.toLowerCase() === 'j' ||
    e.key.toLowerCase() === 'c')) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
    }
}); 

// for thick gradient

window.addEventListener('scroll', () => {
    const gradient = document.getElementById('bottomGradient');
    if (!gradient) return;

    if (window.scrollY > window.innerHeight * 0.5){
    gradient.classList.add('thick');
    } else {
    gradient.classList.remove('thick');
    }
});

// Kanna Slider Logic

const kannaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const char = entry.target.querySelector('.section-character');
        if (char) {
            if (entry.isIntersecting) {
                char.classList.add('visible');
            } else {
                char.classList.remove('visible');
            }
        }
    });
}, { threshold: 0.15});

document.querySelectorAll('.page-section').forEach(section => {
    kannaObserver.observe(section);
});

// Navbar Underline

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop
            + sectionHeight) {currentId = section.getAttribute('id');
            }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });
});