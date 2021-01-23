$('.testimonials_slider').slick({
  centerMode: true, 
  slidesToShow: 3,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint:991,
      settings: { 
        centerMode: true, 
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: { 
        centerMode: true, 
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: { 
        centerMode: true, 
        slidesToShow: 1
      }
    }
  ]
});
	