<script>
// CSS POSITIONING for felixable design of single page
jQuery(document).ready(function($) {
	
	// Functions to check if element is before or after another
	//http://stackoverflow.com/questions/7208624/check-if-element-is-before-or-after-another-element-in-jquery
	$.fn.isAfter = function(sel) {
		return this.prevAll(sel).length !== 0;
	}
	$.fn.isBefore = function(sel) {
		return this.nextAll(sel).length !== 0;
	}
	
	 function checksidebarfit(){
		 //if the window is smaller than X then order sidebar after post..
		if ($(window).width() < 979) {
			// Check sidebar position
			$('.sidebar-wrapper').each(function() {
				if ($(this).isBefore("#singlepage-post-wrapper")) {
					$("#singlepage-left-sidebar").remove().insertAfter($("#singlepage-post-wrapper"));
					$("#singlepage-right-sidebar").remove().insertAfter($("#singlepage-post-wrapper"));
				}
			});
		} else {
			// Check sidebar position
			$('.sidebar-wrapper').each(function() {
				if ($(this).isAfter("#singlepage-post-wrapper")) {
					$("#singlepage-left-sidebar").remove().insertBefore($("#singlepage-post-wrapper"));
					$("#singlepage-right-sidebar").remove().insertBefore($("#singlepage-post-wrapper"));
				}
			});
		}
	 }
	 
	 // Execute on load
	 checksidebarfit();
	 // Bind event listener
	 $(window).resize(checksidebarfit);

});
</script>
