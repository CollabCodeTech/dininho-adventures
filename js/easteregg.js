(() => {
  const $separators = document.querySelectorAll('.separator-dino');
  const $keyGif = document.querySelector('.key-gif');
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
    $keyGif.classList.add('-active');
  }
})();