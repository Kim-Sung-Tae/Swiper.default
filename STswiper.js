  window.onload = function(){
      
    const swiper = new Swiper('#mainbanner', {



        // Optional parameters
        
        loop: true,
        // 자동 재생    delay 값 시간마다 재생된다.
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
    
        // If we need pagination
        pagination: {
        el: '#mainbanner .swiper-pagination',
        clickable: true,
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '#mainbanner .swiper-button-next',
        prevEl: '#mainbanner .swiper-button-prev',
        },
    
        // And if we need scrollbar

    });


          
    const swiper2 = new Swiper('#mainbanner2', {

        // Optional parameters
        slidesPerView: 3,
        loop: true,
        // 자동 재생    delay 값 시간마다 재생된다.
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
    
        // If we need pagination
        pagination: {
        el: '#mainbanner2 .swiper-pagination',
        clickable: true,
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '#mainbanner2 .swiper-button-next',
        prevEl: '#mainbanner2 .swiper-button-prev',
        },
    
        // And if we need scrollbar

    });

  }







////   free mode 
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
    
//   });
