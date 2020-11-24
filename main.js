function imgToDataUrl(img) {
  var canvas = document.createElement('CANVAS');
  var ctx = canvas.getContext('2d');
  canvas.height = 2;
  canvas.width = 3;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  console.log(canvas.toDataURL());
}

document.addEventListener('DOMContentLoaded', function(){
  lazyImages();
}, false);

function lazyImages( ) {
  const objects = document.querySelectorAll('.medium-lazy');
  if (objects) {
    objects.forEach(function(domImg){
      var trueImage = domImg.dataset.src;
      if (!trueImage) {
        return;
      }
      const img = new Image();
      img.src = domImg.dataset.src;
      img.onload = function() {
        if (domImg.tagName === 'IMG') {
          domImg.src = domImg.dataset.src;
          domImg.classList.remove('medium-lazy');
        }
      }
    })
  }
}
