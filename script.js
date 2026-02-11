document.addEventListener("DOMContentLoaded", function () {
  // About Us section simple image carousel
  var aboutImages = [
    "images/ricky-tournament.jpg",
    "images/PlayPhoto.jpg"
  ];
  var aboutImg = document.getElementById("about-carousel-img");
  var aboutNext = document.getElementById("about-carousel-next");
  if (aboutImg && aboutNext) {
    aboutNext.addEventListener("click", function (e) {
      e.preventDefault();
      let idx = getCurrentIdx();
      idx = (idx + 1) % aboutImages.length;
      aboutImg.style.opacity = 0.3;
      setTimeout(function () {
        aboutImg.src = aboutImages[idx];
        aboutImg.style.opacity = 1;
      }, 150);
    });
  }
    //  About Us image carousel
    if (aboutImg && aboutNext) {
      let idx = 0;
      aboutNext.addEventListener("click", function (e) {
        e.preventDefault();
        idx = (idx + 1) % aboutImages.length;
        aboutImg.src = aboutImages[idx];
      });
    }

  // Team carousel indicators (existing code)
  var carousel = document.getElementById("teamCarousel");
  if (carousel) {
    var numItems = carousel.querySelectorAll(".carousel-item").length;
    var indicatorsOl = carousel.querySelector(".carousel-indicators");
    if (indicatorsOl) {
      indicatorsOl.innerHTML = '';
      for (var i = 0; i < numItems; i++) {
        var li = document.createElement("li");
        li.setAttribute("data-target", "#teamCarousel");
        li.setAttribute("data-slide-to", i);
        if (i === 0) {
          li.classList.add("active");
        }
        indicatorsOl.appendChild(li);
      }
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the carousel element
    var carousel = document.getElementById("teamCarousel");

    // Get the number of carousel items
    var numItems = carousel.querySelectorAll(".carousel-item").length;

    // Get the ol element for indicators
    var indicatorsOl = carousel.querySelector(".carousel-indicators");

    // Remove existing indicators
    indicatorsOl.innerHTML = '';

    // Create indicators based on the number of items
    for (var i = 0; i < numItems; i++) {
      var li = document.createElement("li");
      li.setAttribute("data-target", "#teamCarousel");
      li.setAttribute("data-slide-to", i);
      if (i === 0) {
        li.classList.add("active");
      }
      indicatorsOl.appendChild(li);
    }
  });