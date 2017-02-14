<script>
// SIDE NAVIGATION-PANEL MENU & SUB NAV - USING A JQUERY PLUGIN FOR CURSOR AIM 

	var $menu = jQuery(".nav-menu");

	// jQuery-menu-aim: <meaningful part of the example>
	// Hook up events to be fired on menu row activation.
	$menu.menuAim({
		activate: activateSubmenu,
		deactivate: deactivateSubmenu,
		rowSelector: "li.expandable",
		exitMenu: deactivateSubmenuAll,
		enter: reactivateSubmenu
	});
	// jQuery-menu-aim: </meaningful part of the example>

	// jQuery-menu-aim: the following JS is used to show and hide the submenu
	// contents. Again, this can be done in any number of ways. jQuery-menu-aim
	// doesn't care how you do this, it just fires the activate and deactivate
	// events at the right times so you know when to show and hide your submenus.
	function activateSubmenu(row) {
		var $row = jQuery(row),
			submenuId = $row.data("submenuId"),
			$submenu = jQuery("#" + submenuId),
			height = $menu.outerHeight(),
			width = $menu.outerWidth(),
			menuposition = $menu.position();
			rowposition = $row.position();
			submenuposition = $submenu.position();
		var $tooltip = jQuery("#"+submenuId+" .tooltip-left");
			
	   // Show the submenu
		$submenu.css({
			//display: "block",
			top: menuposition.top -(menuposition.top / 2),
			//left: width - 3,  // main should overlay submenu
			//height: height - 4  // padding for main dropdown's arrow
		});
		
		$submenu.addClass("active");

	   // Show the tooltip arrow left
		$tooltip.css({
			//display: "block",
			top: rowposition.top - (menuposition.top -(menuposition.top / 2) + 9) ,
			//left: width - 3,  // main should overlay submenu
			//height: height - 4  // padding for main dropdown's arrow
		});

		// Keep the currently activated row's highlighted look
		$row.children("a").addClass("active");
	}

	function deactivateSubmenu(row) {
		var $row = jQuery(row),
			submenuId = $row.data("submenuId"),
			$submenu = jQuery("#" + submenuId);
		var $arrow = jQuery();

		// Hide the submenu and remove the row's highlighted look
		//$submenu.css("display", "none");
		$submenu.removeClass("active");
		$row.find("a").removeClass("active");
	}
	
	// Don't keep submenu activated on mouse out
	function deactivateSubmenuAll() {
		jQuery('.popover').removeClass("active");
		$menu.find("a").removeClass("active");
	}
	
	function reactivateSubmenu(row) {
		// if other li are not active, i.e. when re-pointing to the same row after leaving menu.
		if (!jQuery("#navigation-panel li a.active")[0]){
		  // Get elements
		  var $row = jQuery(row),
		  submenuId = $row.data("submenuId"),
		  $submenu = jQuery("#" + submenuId);
		  // activate row
		  $row.children("a").addClass("active");
		  $submenu.addClass("active");

		}
	}
	
//		  jQuery(this).siblings('.sub-navigation-panel').addClass("active");
//		  jQuery('.sub-navigation-panel').removeClass("active");

</script>



<script>  
    // SIDE NAV TOGGLE - Toggle navigation class on button click
    jQuery("#sidenav-button").click(function(e){
         // Stop propagation of click event so the following document event won't be triggered immediately 
         e.stopPropagation();
         //Toggle active class
         jQuery("#navigation-panel").toggleClass('active');
     });
     // On mouse leave hide navigation with timeout
     /*jQuery( "#navigation-panel" ).mouseleave(function() {
        setTimeout(function () {
         jQuery( "#navigation-panel" ).removeClass("active");
        }, 500);
    });*/
     jQuery( "#navigation-panel" ).mouseover(function() {
         jQuery( "#navigation-panel" ).addClass("active");
    });
    
    // Bootstrap's dropdown menus immediately close on document click.
    // Don't let this event close the menu if a submenu is being clicked.
    // This event propagation control doesn't belong in the menu-aim plugin
    // itself because the plugin is agnostic to bootstrap.
     jQuery("#navigation-panel").click(function(e) {
        e.stopPropagation();
    });
    // SIDENAV hide if displayed when elsewhere is clicked.
    jQuery(document.body).click(function() {
        if (jQuery('#navigation-panel').hasClass('active')) 
        {
            jQuery('#navigation-panel').removeClass('active');
        }
    });
</script>

