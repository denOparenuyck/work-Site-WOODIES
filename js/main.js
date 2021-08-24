$('.testimony-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});




new SmoothScroll('a[href*="#"]', {
  speed: 400
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(`.hero-content,.hero-img,
          .about-us__img, .about-us__content,
          .works-cards, .categories-list, .testimony-slider,
          .contact, .footer`, {
  interval: 200
});