/* Show/Toggle Menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      if (nav.classList.contains('show-menu')) {
        nav.classList.remove('show-menu');
      } else {
        nav.classList.add('show-menu');
      }
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

/* Hide Menu */
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLinks.forEach(n => n.addEventListener('click', linkAction));

/* Active Link on Scroll*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach( current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=]' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=]' + sectionId + ']').classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/* Change header on scroll greater than 200 viewport height */
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (this.scrollY >= 200) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
};

window.addEventListener('scroll', scrollHeader);

/* Show scrolltop */
const showScrollTop = () => {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add show-scroll class to scrollTop
  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', showScrollTop);












