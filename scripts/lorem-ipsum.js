let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 350;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
        // .querySelector("header nav a[href*=" + id + "]")
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
        document
        .querySelector(`.side-container nav a[href*="${id}"]`)
        .classList.add("active");
      });
    }
  });
};


function showSideBar(){
  const sidebar = document.querySelector('.side-container');
  const menu = document.querySelector('.svg-menu');
  sidebar.style.display = 'flex';
  sidebar.style.animation = 'show .3s ease-in'
  menu.style.fill = 'rgba(0, 0, 0, 0)'
}

function closeSideBar(){
  const sidebar = document.querySelector('.side-container');
  const menu = document.querySelector('.svg-menu');
  sidebar.style.animation = 'hide .3s ease-in'
  setTimeout(function(){
    sidebar.style.display='none';
    menu.style.fill = 'white';
  }, 280)
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
  });
});


