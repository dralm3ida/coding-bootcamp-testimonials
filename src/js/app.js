var slides = document.getElementsByClassName("slideshow-slide");

function shiftSlide(){
   for( var i = 0; i < slides.length; i++ ){
      slides[i].classList.toggle('hide');
   }
}