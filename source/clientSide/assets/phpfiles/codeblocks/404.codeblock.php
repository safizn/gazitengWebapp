<div class="container">
	<div class="row">
		<div class="span9">
			<div class="row">
				<div id="double-left-column" class="span6 pull-right">
					<div class="post-wrapper error-wrapper">
						<div class="h1-wrapper">
							<h1><?php _e( '404 Error: Page Not Found', 'ipin' ); ?></h1>
						</div>
		<div class="post-content text-align-center">
			<?php _e('Apologies, but the page you requested could not be found.', 'ipin') ?><br />
						<?php _e('Perhaps searching will help.', 'ipin'); ?></p>
						<?php get_search_form(); ?>
						</div>
					</div>

            <!-- Error img -->
			<img src="http://dentrist.com/wp-content/uploads/2014/05/Error-page.png"  style=" margin-bottom: 6px; text-align: center;display: block; margin-left: auto; margin-right: auto;" width="166" height="204" longdesc="http://dentrist.com/wp-content/uploads/2014/05/Error-page.png" />
				</div>

				<div id="single-right-column" class="span3">
					<?php get_sidebar('left'); ?>
				</div>
			</div>
		</div>

		<div class="span3">
			<?php get_sidebar('right'); ?>
		</div>
	</div>
</div>
