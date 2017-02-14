
	<div id="topmenu" class="navbar">
		<div class="inner-wrapper">
			<div class="container">
            	
                <!-- LOGO -->
                <div class="branding" style="display:block;">
                <h2 class="branding-heading">
					<?php $logo = of_get_option('logo'); ?>
                    <a class="brand<?php if ($logo != '') { echo ' logo'; } ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php if ($logo != '') { ?>
                        <img src="<?php echo $logo ?>" alt="Logo" />
                    <?php } else {
                        bloginfo('name');
                    }
                    ?>
                    </a>
                </h2>
                </div>
				
				<!-- Login / Logout buttons -->
                <div id="nav-login-wrapper">
                <?php if (is_user_logged_in() && !is_home()) : ?>
                    <a href="<?php echo wp_logout_url(get_permalink()); ?>"><?php if (is_mobile() == 0) {?>Log-out   <?php } ?><i class="fa fa-sign-out" style=""></i></a><br>
                <?php elseif (is_user_logged_in() && is_home()) : ?>
                    <a href="<?php echo wp_logout_url('http://dentrist.com/'); ?>"><?php if (is_mobile() == 0) {?>Log-out   <?php } ?><i class="fa fa-sign-out" style=""></i></a><br>
                <?php elseif (is_home()) : ?>
                    <a href="<?php echo wp_login_url('http://dentrist.com/'); ?>"><?php if (is_mobile() == 0) {?>Register / Log-in   <?php } ?><i class="fa fa-sign-in" style="text-align:center;display: inline-block; vertical-align: middle;"></i></a><br>
                <?php else : ?>
                    <a href="<?php echo wp_login_url(get_permalink()); ?>"><?php if (is_mobile() == 0) {?>Register / Log-in   <?php } ?><i class="fa fa-sign-in" style="text-align:center;display: inline-block; vertical-align: middle;"></i></a><br>
                <?php endif;?>
    			</div>
			
                <!-- NAV between posts -->
                <nav id="nav-main" class="" role="navigation">
                	<div id="sidenav-button" class="nav">
                        <i class="fa fa-bars"></i>
                        <i class="fa fa-chevron-down"></i>
                    </div>
                	
                
                    
                    <!--  SEARCH FORM
                    <form class="navbar-search pull-right" method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
                        <input type="text" class="search-query" placeholder="<?php _e('Search', 'ipin'); ?>" name="s" id="s" value="<?php the_search_query(); ?>">
                    </form>
                    -->
    
                    <!-- FACEBOOK, TWITTER, RSS
                    <a href="<?php bloginfo('rss2_url'); ?>" title="<?php _e('Subscribe to our RSS Feed', 'ipin'); ?>" class="topmenu-social pull-right"><i class="icon-rss icon-large"></i></a>
                    <?php if ('' != $twitter_icon_url = of_get_option('twitter_icon_url')) { ?>
                    <a href="<?php echo $twitter_icon_url; ?>" title="<?php _e('Follow us on Twitter', 'ipin'); ?>" class="topmenu-social pull-right"><i class="icon-twitter icon-large"></i></a>
                    <?php } ?>
                    <?php if ('' != $facebook_icon_url = of_get_option('facebook_icon_url')) { ?>
                    <a href="<?php echo $facebook_icon_url; ?>" title="<?php _e('Find us on Facebook', 'ipin'); ?>" class="topmenu-social pull-right"><i class="icon-facebook icon-large"></i></a>
                    <?php } ?>
                     -->
                </nav>
                
            
			</div>
		</div>
	</div>
