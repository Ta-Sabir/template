function enlargeImage(img) {
  var modal = document.createElement('img');
  modal.id = 'enlarged-image';
  modal.src = img.src;
  modal.onclick = function() {
    document.body.removeChild(modal);
  }
  document.body.appendChild(modal);
}
