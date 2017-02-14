
<?php if (is_mobile() == 0) {  // Desktop / Tablet ?> 

    <!-- Push content when nav present (This file is included) for desktip view to prevent menu overlap on content. -->
    <div id="push-content" style="height:0;"></div>
    
    <div id="top-menu-secondary" class="navbar ">
        <div class="container ">
            
            <!-- If mobile - NOT IN USE 
            
            --> 
            <?php if (is_mobile() == 0) {?> 
                <!-- Buttons for navbar to allow collapse and decollapse vertical menu - This is the old method, now is implemented swipe horizonta menu -->
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <i class="fa fa-bars"></i>    
                </a>
            <?php } ?>

            
            <nav id="nav-main" class="nav-collapse" role="navigation">
                <?php
                $menu_class = 'nav ';
				
                // for tablet & mobile seperately - changes secondary menu text size to prevent new line of floated li elements.
                if (is_tablet()) {
                    $menu_class .= 'SecondaryTopMenu-Tablet-FontSize';
                }
                
                // Check if Top Secondary Menu is present
                if (has_nav_menu('top_sec_nav')) {
                    
                    wp_nav_menu(array('theme_location' => 'top_sec_nav', 'menu_class' => $menu_class));
                    
                
                } else { // if no menu in wordpress is asigned display pages links.
                    // Displays a list of WordPress Pages as links. - In case that no menu is asigned.
                    echo '<ul id="menu-top-menu" class="nav">';
                    wp_list_pages('title_li=&depth=0&sort_column=menu_order' );
                    echo '</ul>';
                    
                }
                ?>
            </nav>    
        
        </div>
    </div>
 	
<?php } elseif (is_mobile() == 1) { // Mobile ?>
	
    <div id="top-menu-secondary" class="navbar">
        <div class="container swiper-container ">
                <?php
                $menu_class = 'nav swiper-wrapper ';
                
                // for tablet & mobile seperately - changes secondary menu text size to prevent new line of floated li elements.
                $menu_class .= 'SecondaryTopMenu-Mobile-FontSize';
                
				
				
                // Check if Top Secondary Menu is present
                if (has_nav_menu('top_sec_nav')) {
					// + Important: Added through admin panel css classes to the list items. "swiper-slide" class, one by one. for the Swiper to work.
                    wp_nav_menu(
						array(
							'theme_location' => 'top_sec_nav',
							'menu_class' => $menu_class,
							'walker' => new Custom_Walker_Nav_Sec_Top
						)
					);
                } else { // if no menu in wordpress is asigned display pages links.
                    // Displays a list of WordPress Pages as links. - In case that no menu is asigned.
                    echo '<ul id="menu-top-menu" class="nav_SZN">';
                    wp_list_pages('title_li=&depth=0&sort_column=menu_order' );
                    echo '</ul>';
                }
                ?>
            
        </div>
    </div>

<?php } ?>