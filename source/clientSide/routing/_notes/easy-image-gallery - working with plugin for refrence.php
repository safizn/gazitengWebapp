/////////////////////// OUTPUT IMAGES ON MASONRY BRICKS
<?php
	// Get IDS
	$attachment_ids = easy_image_gallery_get_image_ids();
	if ( $attachment_ids ) { ?>
    <?php
		// GET Gallery Images
		$has_gallery_images = get_post_meta( get_the_ID(), '_easy_image_gallery', true );
		if ( !$has_gallery_images )
			return;

		// convert string into array
		$has_gallery_images = explode( ',', get_post_meta( get_the_ID(), '_easy_image_gallery', true ) );

		// clean the array (remove empty values)
		$has_gallery_images = array_filter( $has_gallery_images );

		$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'feature' );
		$image_title = esc_attr( get_the_title( get_post_thumbnail_id( $post->ID ) ) );

		// css classes array
		$classes = array();

		// thumbnail count
		$classes[] = $has_gallery_images ? 'thumbnails-' . easy_image_gallery_count_images() : '';

		// linked images
		$classes[] = easy_image_gallery_has_linked_images() ? 'linked' : '';

		$classes = implode( ' ', $classes );

		ob_start();
		
		// LOOP - Start Loop to print images
		foreach ( $attachment_ids as $attachment_id ) {
			$classes = array( 'popup' );

			// get original image
			$image_link	= wp_get_attachment_image_src( $attachment_id, apply_filters( 'easy_image_gallery_linked_image_size', 'large' ) );
			$image_link	= $image_link[0];	
			$image = wp_get_attachment_image( $attachment_id, apply_filters( 'easy_image_gallery_thumbnail_image_size', 'thumbnail' ), '', array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ) ) );
			$image_caption = get_post( $attachment_id )->post_excerpt ? get_post( $attachment_id )->post_excerpt : '';
			$image_class = esc_attr( implode( ' ', $classes ) );
			$lightbox = easy_image_gallery_get_lightbox();
			$rel = easy_image_gallery_count_images() > 1 ? 'rel="'. $lightbox .'[group]"' : 'rel="'. $lightbox .'"';
			
			// To change images to fixed height so will be affecting the position of the posts / bricks.
			$imgsrc = wp_get_attachment_image_src($attachment_id, 'large');
			$imgwidth = $imgsrc[1]; // Image true width
			$imgheight = $imgsrc[2]; // Image true height

			$imagesnumber = easy_image_gallery_count_images();
			$hwratio = $imgheight/$imgwidth; // Image true H/W ratio
			$bimgheight = round($hwratio*$brickwidth);  // CALCULATE Height of fitted background image. Htrue/Wtrue = Hfit/Wfit, so the image fits exactly.
			$bimgwidth =  $maximizedimgdiv / $hwratio ;
			// $divhwratio  = round ($maximizedimgdiv / $divwidth);
			
   			//For preventing thumb dislocation when only one image present & making the thumb fit img
			if ($imagesnumber <2) { 
				// ONE IMAGE - Fixed height of image wrapper to show full extent, the divheight = bimgheight (processed imgheight to be applied with fixed width of div = brickwidth) ?>
            	<div class="image-single-wrap" id="wrapper" style="background-image:url(<?php echo $image_link; ?>); height: <?php echo $bimgheight;?>px;"> </div>
            <?php } else { ?>
                <div class="image-wrap" id="wrapper" style="background-image:url(<?php echo $image_link; ?>); 
				<?php // Check if fitted height to the specified width is larger than the predefined height to show (maximizedimgdiv)
                if ($bimgheight < $maximizedimgdiv) {echo 'background-size: '.$bimgwidth.'px auto;';} ?>"> </div>
			<?php } ?>
			
       

<?php	} ?>

<?php
}
?>






////////////////////////  OUTPUT IMAGES IN SINGLE PAGE

<?php
	$attachment_ids = easy_image_gallery_get_image_ids();


	if ( $attachment_ids ) { ?>

    <?php

		$has_gallery_images = get_post_meta( get_the_ID(), '_easy_image_gallery', true );

		if ( !$has_gallery_images )
			return;

		// convert string into array
		$has_gallery_images = explode( ',', get_post_meta( get_the_ID(), '_easy_image_gallery', true ) );

		// clean the array (remove empty values)
		$has_gallery_images = array_filter( $has_gallery_images );

		$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'feature' );
		$image_title = esc_attr( get_the_title( get_post_thumbnail_id( $post->ID ) ) );

		// css classes array
		$classes = array();

		// thumbnail count
		$classes[] = $has_gallery_images ? 'thumbnails-' . easy_image_gallery_count_images() : '';

		// linked images
		$classes[] = easy_image_gallery_has_linked_images() ? 'linked' : '';

		$classes = implode( ' ', $classes );

		ob_start();
?>

    <ul class="image-gallery <?php echo $classes; ?>">
    <?php
		foreach ( $attachment_ids as $attachment_id ) {

			$classes = array( 'popup' );

			// get original image
			$image_link	= wp_get_attachment_image_src( $attachment_id, apply_filters( 'easy_image_gallery_linked_image_size', 'large' ) );
			$image_link	= $image_link[0];	

			$image = wp_get_attachment_image( $attachment_id, apply_filters( 'easy_image_gallery_thumbnail_image_size', 'thumbnail' ), '', array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ) ) );

			$image_caption = get_post( $attachment_id )->post_excerpt ? get_post( $attachment_id )->post_excerpt : '';

			$image_class = esc_attr( implode( ' ', $classes ) );

			$lightbox = easy_image_gallery_get_lightbox();

			$rel = easy_image_gallery_count_images() > 1 ? 'rel="'. $lightbox .'[group]"' : 'rel="'. $lightbox .'"';

			if ( easy_image_gallery_has_linked_images() )
				$html = sprintf( '<li><a %s href="%s" class="%s" title="%s"><i class="icon-view"></i><span class="overlay"></span>%s</a></li>', $rel, $image_link, $image_class, $image_caption, $image );
			else
				$html = sprintf( '<li>%s</li>', $image );

			echo apply_filters( 'easy_image_gallery_html', $html, $rel, $image_link, $image_class, $image_caption, $image, $attachment_id, $post->ID );
		}
?>
</ul><?php
		$gallery = ob_get_clean();
		echo apply_filters( 'easy_image_gallery', $gallery );
	?>
    <?php }
?>
