let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// =======================================================================//
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // ======================================================================//
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ======================================================================//
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')

};



// ======================================================================//
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-cotainer, .partifolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ======================================================================//
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Youtuber", "Web developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});



function sendtelegram(message) { let telegram_bot_id = "6822893341:AAGHQWNUW7ZbCbEhpCRTzJaQQpBAXndMGH0"; let chat_id = 6274829789; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };

function send() {
  let username = document.getElementById("username").value;
  let Email = document.getElementById("Email").value;
  let number = document.getElementById("number").value;
  let Emailsubject = document.getElementById("Emailsubject").value;
  let massage = document.getElementById("massage").value;
  sendtelegram(`Ismi:${username}
Emaili:${Email}
Telefon raqami:${ number }
Email subject:${ Emailsubject }
massage:${ massage } `)
}