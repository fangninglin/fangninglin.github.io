
$(document).ready(function() {
	Array.from(Array(10)).forEach((_, i) => {
		$(`.popup-gallery0${i}`).magnificPopup({
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
					return item.el.attr('title') + '<small> </small>';
				}
			}
		});
	});
});

// // Magnific Popup
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
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
				return item.el.attr('title') + '<small> </small>';
			}
		}
	});
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




