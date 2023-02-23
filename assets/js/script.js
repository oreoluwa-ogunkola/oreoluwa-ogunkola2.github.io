var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");

 thumb.classList.add("thumb");

for (var i = 1; i <= 10; i++) {
  var thumb = document.createElement("img");
 
  thumb.addEventListener(
  "click", function() {
    currentImage.src = this.src;
    currentImage.alt = this.alt;
  
  }
);
}
