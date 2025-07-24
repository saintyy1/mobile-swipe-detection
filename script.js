let startX = 0;

element.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});

element.addEventListener('touchend', function(e) {
  const endX = e.changedTouches[0].clientX;

  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      alert('Swipe right detected');
    } else {
      alert('Swipe left detected');
    }
  }
});
