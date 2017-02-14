<script>
// INFINATE SCROLL LOADER AND PAGE LOADER
// http://www.infinite-scroll.com/
jQuery(document).ready(function(){

	var $masonry = jQuery('#masonry');

	if (typeof $masonry.infinitescroll !== 'undefined') {
			$masonry.infinitescroll({
				navSelector : '#navigation',  // selector for the paged navigation
				nextSelector : '#navigation #navigation-next a',	// selector for the NEXT link (to page 2)
				itemSelector : '.thumb',	// selector for all items you'll retrieve
				bufferPx     : 600, // increase this number if you want infscroll to fire quicker
				loading: {
					msgText: '',
					finishedMsg: '<?php _e('All items loaded', 'ipin') ?>',	// Finished message
					img: '<?php echo get_template_directory_uri(); ?>/img/ajax-loader.gif',	// Loader image
					finished: function() {},
				},
			},
			// trigger Masonry as a callback
			function(newElements) {
				// Loading fading of posts
				// hide new items while they are loading
				var $newElems = jQuery(newElements).css({opacity: 0});
				// if width of windows is less than 480px
				if (jQuery(document).width() <= 480) {
					// ensure that images load before adding to masonry layout
					$newElems.imagesLoaded(function(){
						jQuery('#infscr-loading').fadeOut('normal');
						// show elems now they're ready
						$newElems.animate({opacity: 1});
						$masonry.masonry('appended', $newElems, true);
					});
				} else {
					jQuery('#infscr-loading').fadeOut('normal');
					$newElems.animate({opacity: 1});
					$masonry.masonry('appended', $newElems, true);
				}
			});
	}

});

</script>
