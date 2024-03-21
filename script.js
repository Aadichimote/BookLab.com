const list = document.querySelector('.list');
const navbarList = document.querySelector('.nav_item ul');
const header = document.querySelector('header');

list.addEventListener('click', () => {
    navbarList.classList.toggle("visible");
    header.classList.toggle("h-nav");
});
