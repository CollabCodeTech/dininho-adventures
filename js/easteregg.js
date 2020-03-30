(() => {
  const $separators = document.querySelectorAll('.separator-dino');
  let counter = 0;

  $separators.forEach(($separator) => {
    $separator.addEventListener('click', function() {
      !this.classList.contains('-clicked') && counter++;
      this.classList.add('-clicked');
      counter === 4 && showKey();
    });
  });

  function showKey() {
    alert("Mostra key animada!!!")
  }
})();