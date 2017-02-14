
<?php if (is_mobile() == 0) {  // Not for mobile?> 
<script>
// Hide Header SECONDARY TOP MENU on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('#top-menu-secondary').outerHeight();

jQuery(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = jQuery(this).scrollTop();
	
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		jQuery('#top-menu-secondary').removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if(st + jQuery(window).height() < jQuery(document).height()) {
			jQuery('#top-menu-secondary').removeClass('nav-up').addClass('nav-down');
		}
	}
	
	lastScrollTop = st;
}
</script>
<?php }?>