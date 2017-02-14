<?php
    // image-gallery field variables
    $image_url_large = $image['url'];	// large sized image
    $image_url_medium = $image['sizes']['medium']; // medium sized image
    $image_url_thumbnail = $image['sizes']['thumbnail']; // get thumbnail link
	$image_url = $image_url_medium; // default to be used. Currently non of the above are in use, the image_url is the orl single parameter which was used in other files. therefore this will be set for now as the default.

    $image_title = $image['title'];
    $image_alt = $image['alt'];
    $image_caption = $image['caption'];

	$size = 'thumbnail'; // (thumbnail, medium, large, full or custom size)
	$image_thumb = $image['sizes'][ $size ];
	$image_thumb_width = $image['sizes'][ $size . '-width' ];
	$image_thumb_height = $image['sizes'][ $size . '-height' ];

 	$size = 'medium';
	$image_medium = $image['sizes'][ $size ];
	$image_medium_width = $image['sizes'][ $size . '-width' ];
	$image_medium_height = $image['sizes'][ $size . '-height' ];


?>
