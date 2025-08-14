let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let imgs = Array.from(document.querySelectorAll(".item img"));
let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let currentIndex = 0;

// open image in slider
imgs.forEach(function (img) {
  img.addEventListener("click", function (eventinfo) {
    let imgSrc = eventinfo.target.getAttribute("src");
    currentIndex = imgs.indexOf(eventinfo.target);

    lightBoxContainer.style.display = "flex";
    lightBoxContainer.classList.add("d-flex");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  });
});
// close slider
close.addEventListener("click", function () {
  lightBoxContainer.classList.remove("d-flex");
  lightBoxContainer.style.display = "none";
});

// next icon
next.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
});

// prev icon
prev.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
});
