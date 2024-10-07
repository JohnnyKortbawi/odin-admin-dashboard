
const sideBar = document.querySelector('#sidebar');
const toggleSidebarButton = document.querySelector('#button-toggle-sidebar');
const dropdownButtons = document.querySelectorAll('.button-dropdown');

toggleSidebarButton.addEventListener('click', (event) => {
    toggleSidebar(event.currentTarget);
  }
);

dropdownButtons.forEach(
  (button) => {
    button.addEventListener('click', (event) => {
      toggleSubMenu(event.currentTarget);
    });
  }
);

function toggleSidebar(button) {
  sideBar.classList.toggle('close');
  button.classList.toggle('rotate');

  Array.from(sideBar.querySelectorAll('.show')).forEach( (ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  })
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if(sideBar.classList.contains('close')) {
    sideBar.classList.toggle('close');
    toggleSidebarButton.classList.toggle('rotate');
  }
}
