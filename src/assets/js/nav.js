// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

//change styles when scrolled

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("cs-navigation");

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "var(--headerColor)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('click', function() {
      const path = window.location.pathname;
      console.log('Language switcher clicked. Current path:', path);
      let newPath;
      if (path.startsWith('/en/')) {
        newPath = path.replace(/^\/en\//, '/');
        console.log('Switching to Dutch. New path:', newPath);
      } else if (path === '/en') {
        newPath = '/';
        console.log('Switching to Dutch. New path: /');
      } else {
        if (path === '/') {
          newPath = '/en/';
        } else {
          newPath = '/en' + path;
        }
        console.log('Switching to English. New path:', newPath);
      }
      window.location.assign(newPath);
    });
  }
});
