$(window).scroll(function () {
  const offset = $(this).scrollTop() / -13;
  $('.bg_scroll').css('transform', 'translate3d(0,' + offset + 'px, 0) scale(1.3)');
});

const $slideTargert = $('.swiper-slide')

if ($slideTargert.length > 2) {

  $('.swiper-wrapper').removeClass('offSlider')

  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    slidesPerView: "auto",
  });
}

if ($slideTargert.length <= 2) {
  $('.swiper-wrapper').addClass('offSlider')
}