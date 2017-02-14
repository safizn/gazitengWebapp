<?php
$queried_object = get_queried_object();
$queried_object_vars = get_object_vars ( $queried_object );
// echo $vars['labels']->singular_name;
$page_slug = $queried_object_vars['slug'];
$page = get_page_by_path( $page_slug );
$pageid = $page->ID;

$pages = get_posts( array('post_type'=>'page','numberposts' => 1,'include' => $pageid) );
foreach( $pages as $page ) :
  $choosenMenusObjects = get_field('menu', $page->ID);
  if($choosenMenusObjects) {
    foreach ($choosenMenusObjects as $choosenMenuObject) {
      $choosenMenu = $choosenMenuObject;
    }
  }
endforeach; // end of the loop.

$slug = ( $choosenMenu->post_name ? $choosenMenu->post_name : 'main-menu');
$custom_post_types = array('menu');
$args = array (
    'name' => $slug,
    'post_type' => $custom_post_types,
    'posts_per_page' => 100,
    'orderby' => 'date'
);
?>
