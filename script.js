const list = document.querySelector('.list');
const navbarList = document.querySelector('.nav_item ul');
const header = document.querySelector('header');

list.addEventListener('click', () => {
    navbarList.classList.toggle("visible");
    header.classList.toggle("h-nav");
});

document.addEventListener('DOMContentLoaded', function () {
    var Books = document.getElementById('vboook_load');
    aboutTab.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      
      fetch('about.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Page not found');
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
          console.error('Error loading page:', error);
        });
    });
  });
  