$('.animated1').waypoint({
  handler(direction) {
    
    if (direction === "down") {
      $(this.element).addClass('fadeInUp');

    }
  },
  offset: '50%',
});


  
$('.nav-link').on('click', (e) => {
  const destination = $(e.target).attr('href');

  e.preventDefault();

  $('html, body').animate({
      scrollTop: $(destination).offset().top,
    },
    1000,
  );

  $('.navbar-toggler:visible').trigger('click');
});



