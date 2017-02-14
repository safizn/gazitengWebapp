<?php
global $wp_query;
if ( !is_front_page() && !is_post_type_archive() && is_single()) {
    $queried_object = get_queried_object();
    $page_slug = $queried_object->post_type;
    $page = get_page_by_path( $page_slug );
    $pageid = $page->ID;

    $pages = get_posts( array('post_type'=>'page','numberposts' => 1,'include' => $pageid) );
    foreach( $pages as $page ) :
      $image = get_field('menuBackgroundImage', $page->ID);
    endforeach; // end of the loop.

    /*
    $pagename = get_query_var('pagename');
		if ( !$pagename && $id > 0 ) {
			// If a static page is set as the front page, $pagename will not be set. Retrieve it from the queried object
			$post = $wp_query->get_queried_object();
			$pagename = $post->post_name;
		}
		//$slug = basename(get_permalink());
		//$page_title = $wp_query->post->post_title;
    */
	} elseif(is_page()) {
    $queried_object = get_queried_object();
    $image = get_field('menuBackgroundImage', $queried_object->ID);

  } elseif (is_post_type_archive()) {

    $queried_object = get_queried_object();
    $queried_object_vars = get_object_vars ( $queried_object );
    // echo $vars['labels']->singular_name;
    $page_slug = $queried_object_vars['slug'];
    $page = get_page_by_path( $page_slug );
    $pageid = $page->ID;

    $pages = get_posts( array('post_type'=>'page','numberposts' => 1,'include' => $pageid) );
    foreach( $pages as $page ) :
      $image = get_field('menuBackgroundImage', $page->ID);
    endforeach; // end of the loop.
} else {

  $image = get_field('menuBackgroundImage', $id);
}
  $imageURL = $image['url'];
  if(is_mobile()) {
    $menuBackgroundImage = $image['sizes'][ 'thumbnail' ];
  } else {
    $menuBackgroundImage = $image['sizes'][ 'medium' ];
  }

return $menuBackgroundImage;
?>
