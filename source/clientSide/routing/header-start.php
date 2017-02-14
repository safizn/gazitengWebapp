<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head <?php do_action( 'add_head_attributes' ); ?>>
	<?php	do_action('SZN_after_head_tag'); ?>

	<link href="<?php echo get_stylesheet_directory_uri(); ?>/style.css" rel="stylesheet"><!-- CSS in Theme Directory -->

	<link rel="import" href="<?php echo \SZN\App::$locations['app']['url'] . '/sharedApp/' . 'styles' . '/' . 'general-custom-styles.css.html'; ?>">
	<style is="custom-style" include="general-custom-styles iron-flex iron-flex-alignment">
		<?php
			// Not working the polymer way therefore corrently using includeFilePath
			include( \SZN\App::$locations['app']['path'] . '/' . 'styles' . '/' . 'custom-style.css.php' );
		?>
	</style>
