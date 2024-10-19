document.addEventListener('DOMContentLoaded', function () {

    function flashDocument() {
 
      const flashOverlay = document.getElementById("flashOverlay");
      flashOverlay.style.opacity = "2"; 
  

      setTimeout(function () {
        flashOverlay.style.opacity = "0";
      }, 500);
    }
  
    const images = document.querySelectorAll('.img1, .img2, .img3');
    images.forEach(function (image) {
      image.addEventListener('click', flashDocument);
    });
  });
  