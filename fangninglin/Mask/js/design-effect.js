// Magnific Popup
$(document).ready(function() {
	$('.popup-gallery00-1').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
});



  $(document).ready(function() {
	$('.popup-gallery00-2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
});



  $(document).ready(function() {
	$('.popup-gallery01').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
});



  $(document).ready(function() {
	$('.popup-gallery02').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
});



$(document).ready(function() {
	$('.popup-gallery03').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
});
// end of Magnific Popup

// slick
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });


//過banner出現
  $(function () {
    var fr = $('.fr');

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        fr.addClass('dark');

      } else {
        fr.removeClass('dark');

      }
    });
  })


// header2
//   $(function(){
// 	　$(window).load(function(){
// 	　　$(window).bind('scroll resize', function(){
// 	　　var $this = $(this);
// 	　　var $this_Top=$this.scrollTop();
	
// 	　　
// 	　　if($this_Top < 100){
// 	　　　$('#top-bar').stop().animate({top:"-65px"});
// 	　　　}
// 	　　　　if($this_Top > 100){
// 	　　　　$('#top-bar').stop().animate({top:"0px"});
// 	　　　 }
// 	　　}).scroll();
// 	　});
// 	}); 


