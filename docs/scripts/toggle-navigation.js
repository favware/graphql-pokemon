(function () {
  const ACTIVE_CLASS = 'is-active';
  const navigation = document.querySelector('nav');
  const toggles = document.querySelectorAll('.js-toggle-navigation');

  function toggleNavigation() {
    navigation.classList.contains(ACTIVE_CLASS) ?
      navigation.classList.remove(ACTIVE_CLASS) :
      navigation.classList.add(ACTIVE_CLASS);
  }

  Array.prototype.forEach.call(
    toggles,
    /**
         * @param {HTMLElement} toggle
         */
    toggle => {
      toggle.addEventListener('click', toggleNavigation);
    }
  );
}());