const slider = document.querySelector('.swiper');


  let mySwiper;

  


  function mobileSlider() {

  if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      
      direction: 'horizontal',
  
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },

      slideToClickedSlide: true,

    spaceBetween:16,

    slidesPerView:1.3,

    speed:800,


    slideClass: 'swiper-slide',

    breakpoints: {
      480: {
        slidesPerView:2,
      },
      
      720: {
        slidesPerView:3,
      },
      
  
    }
   

    });


slider.dataset.mobile = 'true';




  }

if (window.innerWidth >= 767) {
  slider.dataset.mobile = 'false';


  if (slider.classList.contains('swiper-initialized')) {
  mySwiper.destroy();
  }

}

}



mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
})




let brandsList = document.querySelector('.section__list')
let showButton = document.querySelector('.section__show-button')




showButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (window.innerWidth >= 767) {

    setTimeout(() => {
      brandsList.classList.toggle('section__list--closed');
    }, 500)
    
    showButton.classList.toggle('section__show-button--reverse');
    showButton.textContent = showButton.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
    
  
  }
  
});



