document.querySelector('.arrow-to').onmouseenter = function(){
    document.querySelector('.main-screen-bar').style.opacity = '0.8'
};

document.querySelector('.arrow-to').onmouseleave = function(){
    document.querySelector('.main-screen-bar').style.opacity = '1'
};

let swiper = new Swiper('.swiper-container', {
    speed: 600,
    loop: true,
    allowTouchMove: 'true',
    effect: 'fade',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

document.querySelector('.slide__png').onclick = function() {
  document.querySelector('.slide__png').style.display = 'none';
  document.querySelector('.before__swipe').style.display = 'none';
};

document.querySelector('.before__swipe').onclick = function() {
  document.querySelector('.slide__png').style.display = 'none';
  document.querySelector('.before__swipe').style.display = 'none';
};