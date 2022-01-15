var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 3.2
        },
        800: {
            slidesPerView: 2.2
        },
        600: {
            slidesPerView: 1.1
        }
    },
    speed: 400
  });