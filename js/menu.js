(function() {
  var menu = {
    elem: document.querySelector('.dropdown-menu__list'),
    button: document.querySelector('.dropdown-menu__toggle'),
    isOpened: false,

    open: function() {
      var btnClasses = this.button.classList;
      btnClasses.add('dropdown-menu__toggle_close');

      this.elem.classList.remove('dropdown-menu__list_hidden');
      this.isOpened = true;
    },

    close: function() {
      var btnClasses = this.button.classList;
      btnClasses.remove('dropdown-menu__toggle_close');

      this.elem.classList.add('dropdown-menu__list_hidden');
      this.isOpened = false;
    },

    init: function() {
      var self = this;

      this.elem.classList.add('dropdown-menu__list_hidden');
      this.button.classList.remove('dropdown-menu__toggle_no-js');

      this.button.onclick = function() {
        if (!self.isOpened)
          self.open();
        else
          self.close();
      };
    },

    off: function() {
      this.button.classList.remove('dropdown-menu__toggle_no-js');

      this.button.onclick = null;
    }
  };

  function onResize() {
    if (window.innerWidth < 768)
      menu.init();
    else
      menu.off();
  }

  onResize();

  window.addEventListener('resize', onResize);
})();
