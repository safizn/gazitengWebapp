<?php // Post query all VARIABLES

// All post variables
$title = get_the_title();
$id = get_the_ID();
$parent_id = wp_get_post_parent_id( $id );
$post_class = get_post_class(array('thumb')) ; // post_class('thumb');
$post_class_flip = get_post_class(array('thumb flip-container flip-toggle')); // post_class('thumb flip-container flip-toggle')
$content = get_the_content(); // or $post->the_content

// New content without formating and tags.
  ob_start();
  the_content();
  $old_content = ob_get_clean();
$content_notags = strip_tags($old_content);

$type = get_post_type( $post ); // for custom query: get_post_type( $queryObject->post->ID );
$post_type = get_post_type( $post );
$show_avatars = get_option('show_avatars');
$comments_number = get_comments_number();
$permalink = get_post_permalink();
$edit_link = get_edit_post_link();
$archive_link = get_post_type_archive_link( $post_type );
$author_url = get_author_posts_url(get_the_author_meta('ID'));
$author = get_the_author();
$avatar = get_avatar(get_the_author_meta('user_email') , '30');
$author_dispay_name = get_the_author_meta('display_name');
$post_time = get_post_time('U', true);
$images = get_field('image_gallery');
$imagesnumber = count($images); // count images in field
$post_thumb_url_array = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'thumbnail' );
$post_thumb_url_first = $post_thumb_url_array[0];
$post_thumb_url = $post_thumb_url_first;
$showADS = get_field( "showADS" );


// ISO 8106 as in 2015-03-06T16:30:00-00:00
$post_time_iso8106 = get_post_time('c', true, $post); // Used for custom time element of polymer

include( \SZN\App::getFileDirectoryPath('variables','masonry.variables.php') );

?>
