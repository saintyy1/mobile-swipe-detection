let startX = 0;

document.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', function(e) {
  const endX = e.changedTouches[0].clientX;

  const diffX = endX - startX;

  if (Math.abs(diffX) > 100) {
    if (diffX > 0) {
      alert('Swipe right detected');
    } else {
      alert('Swipe left detected');
    }
  }
});
