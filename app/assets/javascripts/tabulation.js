$(document).ready(function() {
    // Mets ici ton code
  
      $('.category-show').on('click',() => {
        $('.category-content').slideToggle('slow');
      });

      var $avatar = $(".avatar");
      $avatar.click(function(){
          $('.dropdown-content').toggle("fast");
      });

      $('.dropdown-item1').on('click',() => {
          $('#modal-form1').slideToggle('slow');
      });

      $('.dropdown-item2').on('click',() => {
          $('#modal-form2').slideToggle('slow');
      });

      $('.cancelbtn1').on('click',() => {
        $('#modal-form1').slideToggle('slow');
      });

      $('.cancelbtn2').on('click',() => {
        $('#modal-form2').slideToggle('slow');
      });


      $( "body" ).click(function( event ) {
        event.stopPropagation();
        // Do something
      });


    });
    
//================================================ SLIDESHOW =================================================

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += "active";
}