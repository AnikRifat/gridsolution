$('.sub-menu').addClass('dropdown-menu');
$('.gallery_product a.tag').css('display:block');

// <!-----------------------Scroll-Top----------------------------->

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });
  $(document).ready(function () {

    $('.gallery_product .card .card-body a.btn.design').click(function () {
      var imgSrc = $(this).parent().siblings('.card-image').children('img').attr('src');
      $('#myModal .modal-body img').attr('src', imgSrc);
    });

    $("#back2Top").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

  });
// <!-----------------------Scroll-Top----------------------------->

// <!-----------Aos-------------->

  AOS.init();

// <!-----------Aos-------------->

// <!-----------WOW-------------->

  new WOW().init();

// <!-----------WOW-------------->

// <!-----------Fancybox-------------->

jQuery(document).ready(function () {
    jQuery(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
    });
    jQuery(".zoom").hover(function () {

      jQuery(this).addClass('transition');
    }, function () {

      jQuery(this).removeClass('transition');
    });
  });   
// <!-----------Fancybox-------------->

// <!-----------Counter--------------->

  $('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
// <!-----------Counter--------------->

// <!-----------owl caraousel--------------->

jQuery(document).ready(function($) {
  var owl = $('.owl-carousel');

  $(".testimonials").owlCarousel({
      item: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      loop: true,
      dots: true,
      margin: 10,
      nav: false,
      responsive: {
          320: {
              items: 1
          },
          600: {
              items: 1
          },
          1200: {
              items: 1
          }
      }
  });

});
// <!-----------owl caraousel--------------->


$(document).ready(function () { $(".menu-icon").on("click", function () { $("nav ul").toggleClass("showing") }) }), $(window).on("scroll", function () { $(window).scrollTop() ? $("nav").addClass("black") : $("nav").removeClass("black") });

