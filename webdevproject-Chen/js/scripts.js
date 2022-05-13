function showDescription(descript) {
    $("#description").html(descript);
}

function hideDescription(descript) {
    $("#description").html("");
}

function validate() {

    var code = $("#zipCode").val();
    if (isNaN(code))
    {
      alert("ZIP code entered is not valid (please only enter numbers).")
      return false;
    }
}

//SLIDESHOW SCRIPT (from W3 Schools)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


// STICKY NAVBAR SCRIPT (from W3 Schools)
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}