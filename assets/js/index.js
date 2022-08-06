// Menu and Category
$(document).ready(function () {
    $(function () {
      if ($("body").hasClass("body-catalog")) {
        $(".category, .mobile-category-heading").css("pointer-events", "none");
      }
      $(".menu-toggle").click(function () {
        $(this).stop(true, false, true).toggleClass("active");
        $(".mobile-nav").stop(true, false, true).toggleClass("active");
      });
      $(".category").mouseover(function () {
        $(".category-body").stop(true, false, true).show();
      });
      $(".category").mouseleave(function () {
        $(".category-body").stop(true, false, true).hide();
      });
      $(".category-list-item").hover(function () {
        $(this).next(".category-list-dropdown").stop(true, false, true).toggleClass("active");
      });
      $(".user-data").hover(function () {
        $(".user-list-container").stop(true, false, true).slideToggle(200);
      });
      $(".category-list-dropdown").hover(function () {
        $(this).stop(true, false, true).toggleClass("active");
      });
      $(".mobile-category-heading").click(function () {
        $(".mobile-category-body").stop(true, false, true).toggleClass("active");
        $(".mobile-category-head").stop(true, false, true).toggleClass("bordered");
      });
      $(".category-item-arrow").click(function () {
        $(this).stop(true, false, true).toggleClass("rotate");
        $(this).parent().stop(true, false, true).toggleClass("active");
      });
      $(".nav-item-container").hover(function () {
        $(this).find(".nav-dropdown").stop(true, false, true).toggleClass("active");
        if($(this).find(".nav-dropdown").hasClass("active")){
            $(".nav-item-arrow").addClass("rotate");
        }else {
            $(".nav-item-arrow").removeClass("rotate");
        }
      });
      $(".mobile-nav-item-arrow").click(function () {
        $(this).stop(true, false, true).toggleClass("rotate");
        $(".mobile-nav-dropdown").stop(true, false, true).toggleClass("active");
      });
      $(".wish-label").click(function () {
        $(this).find("button").stop(true, false, true).toggle();
      });
      $(".show-filter").click(function () {
        $(".category-sidebar").stop(true, false, true).slideToggle(250);
      });
      if ($(window).width() < 768) {
        $("#slider-container").removeClass("container");
      }
    });
});

// menu and category

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper

// owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  autoPlay:true,
  margin:10,
  nav:true,
  rewindNav:false,


  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
// owl carousel







    

