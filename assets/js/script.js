var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");

thumb.classList.add("thumb");

for (var i = 1; i <= 10; i++) {
  var thumb = document.createElement("img");
  thumb.src = "visual/visual" + i + ".png";
  thumb.alt = "Image " + i;
}
