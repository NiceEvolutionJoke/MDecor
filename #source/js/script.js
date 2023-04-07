/*------------------------------------BURGER-----------------------------------------*/
document.querySelector('.header__burger').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__burger-block').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});
/*------------------------------------OPEN POPUP-----------------------------------------*/
const popupBtns = document.querySelectorAll('.btn-popup');
const menu = document.querySelector('.popup');
const subMenu = document.querySelector('.popup-content');
for (let i = 0; i < popupBtns.length; i++) {
   const toggleMenu = function () {
      menu.classList.toggle("active");
   }
   popupBtns[i].addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
   });
   document.addEventListener("click", function (e) {
      const target = e.target;
      const its_menu = target == subMenu || subMenu.contains(target);
      const its_btnMenu = target == popupBtns[i];
      const menu_is_active = menu.classList.contains("active");
      if (!its_menu && !its_btnMenu && menu_is_active) {
         toggleMenu();
      }
   });
}


document.querySelector('.popup__close').addEventListener('click', () => {
   document.querySelector('.popup').classList.remove('active');
   document.querySelector('body').classList.remove('lock');
});
/*-----------------------------FIX MIBILE BASKET ICON--------------------------------------*/
/* var scrollHeight = Math.max(
   document.body.scrollHeight, document.documentElement.scrollHeight,
   document.body.offsetHeight, document.documentElement.offsetHeight,
   document.body.clientHeight, document.documentElement.clientHeight
);
var scrollTop = window.pageYOffset;
var limit = scrollHeight - 1550;

document.addEventListener('scroll', () => {
   console.log(window.pageYOffset > (scrollHeight - 2000));
   if (window.pageYOffset > (scrollHeight - 2800)) {
      document.querySelector('.basket-m').classList.add('active');
   } else {
      document.querySelector('.basket-m').classList.remove('active');
   }
}); */
$(document).scroll(function () {
   //stick nav to top of page
   var y = $(document).height() - $(this).scrollTop() - $(window).height();
   var navWrap = 1000;
   if (y < navWrap) {
      document.querySelector('.basket-m').classList.add('active');
   } else {
      document.querySelector('.basket-m').classList.remove('active');
   }
});
/*------------------------------------POPUP SLIDER-----------------------------------------*/
new Swiper('.popup__slider', {
   /* navigation: {
      nextEl: '.swiper-button-ne',
      prevEl: '.swiper-button-pr',
   }, */
   slidesPerView: 1,
   slidesPerColumn: 1,
   spaceBetween: 30,
   slidesPerColumnFill: "row",
   thumbs: {
      swiper: {
         el: '.popup__subslider',
         slidesPerView: 5,
      }
   }
});
