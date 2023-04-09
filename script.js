const imgA = document.getElementById("img-a");
const imgB = document.getElementById("img-b");
const imgC = document.getElementById("img-c");

imgA.addEventListener("mouseover", function() {
    imgA.src = "./image/lunette.webp";
});

imgA.addEventListener("mouseout", function() {
    imgA.src = "./image/glasses-a.webp";
});

imgB.addEventListener("mouseover", function() {
    imgB.src = "./image/lunette-b.webp";
});

imgB.addEventListener("mouseout", function() {
    imgB.src = "./image/glasses-b.webp";
});

imgC.addEventListener("mouseover", function() {
    imgC.src = "./image/lunette.webp";
});

imgC.addEventListener("mouseout", function() {
    imgC.src = "./image/glasses-c.webp";
});

/**slid */
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// Récupérer la navbar
var navbar = document.getElementById("nav");

// Attacher un événement de défilement à la fenêtre
window.onscroll = function() {
  if (window.pageYOffset > 100) { // si la page a été défilée de plus de 100px
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};


