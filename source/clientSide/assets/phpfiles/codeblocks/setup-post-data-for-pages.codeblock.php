<!-- SETUP POST DATA -->
<?php
	global $post;
	global $wp_query;
	$slug = get_post( $post )->post_name;
	\SZN\App::includeFilePath('variables','variables.php');
	foreach( $images as $image ):
		\SZN\App::includeFilePath('variables','acf-images-gallery.variables.php');
	endforeach;
?>
<!-- END SETUP POST DATA + RESET -->
