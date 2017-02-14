// Expand images on hover for compact and faster perview of posts
jQuery(document).ready(function($) {
	// Don't apply to touch devices
	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	} else {
		// Using '.live' inorder to apply jQuery funtion also to newly added AJAX content
		jQuery("div.image-wrap").live("mouseenter",
			function(){
					if (jQuery(this).is(':first-child'))	{
					  jQuery(this).height(function (index, height) {return (height + 40);});
					  jQuery(this).next().height(function (index, height) {return (height - 40);});
					} else if (jQuery(this).is(':last-child')) {
					  jQuery(this).prev().height(function (index, height) {return (height - 40);});
					  jQuery(this).height(function (index, height) {return (height + 40);});
					} else {
					  jQuery(this).prev().height(function (index, height) {return (height - 20);});
					  jQuery(this).height(function (index, height) {return (height + 40);});
					  jQuery(this).next().height(function (index, height) {return (height - 20);});
					}
			}).live("mouseleave",
			 function () {
					if (jQuery(this).is(':first-child'))	{
					  jQuery(this).height(function (index, height) {return (height - 40);});
					  jQuery(this).next().height(function (index, height) {return (height + 40);});
					} else if (jQuery(this).is(':last-child')) {
					  jQuery(this).prev().height(function (index, height) {return (height + 40);});
					  jQuery(this).height(function (index, height) {return (height - 40);});
					} else {
					  jQuery(this).prev().height(function (index, height) {return (height + 20);});
					  jQuery(this).height(function (index, height) {return (height - 40);});
					  jQuery(this).next().height(function (index, height) {return (height + 20);});
					}
		 });
	}
});
