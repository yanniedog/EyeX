(function () {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var mainMenu = document.getElementById('main-menu');
  var submenuTrigger = document.querySelector('.submenu-trigger');
  var gamingSub = document.getElementById('gaming-sub');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      mainMenu.classList.toggle('open', !expanded);
    });
  }

  if (submenuTrigger && gamingSub) {
    submenuTrigger.addEventListener('click', function () {
      var expanded = submenuTrigger.getAttribute('aria-expanded') === 'true';
      submenuTrigger.setAttribute('aria-expanded', !expanded);
      gamingSub.hidden = expanded;
    });
  }
})();
