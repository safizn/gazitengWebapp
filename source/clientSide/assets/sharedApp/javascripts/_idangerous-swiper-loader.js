/*======  idangerous.swiper.min.js

Use document ready or window load events
For example:
With jQuery: $(function() { ...code here... })
Or window.onload = function() { ...code here ...}
Or document.addEventListener('DOMContentLoaded', function(){ ...code here... }, false)
=======*/

window.onload = function() {

  var mySwiper = new Swiper('.swiper-container',{
    slidesPerView: 'auto',
	initialSlide: 0,

	//Enable Hash Navigation plugin:
    hashNav: true
  });
}
