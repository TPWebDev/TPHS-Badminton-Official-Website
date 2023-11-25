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