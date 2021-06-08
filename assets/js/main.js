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