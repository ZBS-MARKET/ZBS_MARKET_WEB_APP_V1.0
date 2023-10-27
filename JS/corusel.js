$(document).ready(function() {
    var container = $('.carousel-container');
    var slides = $('.carousel-slide');
    var slideWidth = slides.first().outerWidth();
    var currentSlide = 0;

    $('.carousel').on('swipeleft', function() {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        container.css('transform', 'translateX(-' + (currentSlide * slideWidth) + 'px)');
      }
    });

    $('.carousel').on('swiperight', function() {
      if (currentSlide > 0) {
        currentSlide--;
        container.css('transform', 'translateX(-' + (currentSlide * slideWidth) + 'px)');
      }
    });
  });