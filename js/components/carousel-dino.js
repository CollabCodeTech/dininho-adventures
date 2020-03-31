(() => {
  const $carouselDino = document.querySelector('.carousel-dino');
 
  $carouselDino.addEventListener('click', ({target}) => {
    target.parentNode.classList.contains('-left') && clickLeft();
  })

  function clickLeft() {
    let $left = $carouselDino.querySelector('.-left');
    let $center = $carouselDino.querySelector('.-center');
    let $right = $carouselDino.querySelector('.-right');

    const id = parseInt($left.getAttribute('data-id'));
    const nextId = id === 0 ? 14 : id - 1;
    
    $left.classList.remove('-left');
    $center.classList.remove('-center')
    $right.classList.remove('-right');

    $left.classList.add('-center');
    $center.classList.add('-right');
    
    $center = $left;
    $right = $right;
    $left = $carouselDino.querySelector(`[data-id="${nextId}"]`);
    console.log('left', $left)
    $left.classList.add('-left');    
  }
})();