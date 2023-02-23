var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");



for (var i = 1; i <= 10; i++) {
  var thumb = document.createElement("img");
  thumb.classList.add("thumb");
  thumb.src = "visual/visual" + i + ".png";
  thumb.alt = "Image " + i;
  thumb.addEventListener(
  "click", function() {
    currentImage.src = this.src;
    currentImage.alt = this.alt;
  
  }
);
}
