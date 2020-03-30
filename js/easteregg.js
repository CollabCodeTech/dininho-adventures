(() => {
  const $separators = document.querySelectorAll('.separator-dino');
  let counter = 0;
  const goalShowKey = $separators.length;

  $separators.forEach(($separator) => {
    $separator.addEventListener('click', function() {
      !this.classList.contains('-clicked') && counter++;
      this.classList.add('-clicked');
      counter === goalShowKey && showKey();
    });
  });

  function showKey() {
    alert("Mostra key animada!!!")
  }
})();