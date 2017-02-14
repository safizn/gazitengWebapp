<!-- SETUP POST DATA -->
<?php
$queried_object = get_queried_object();
$queried_object_vars = get_object_vars ( $queried_object );
// echo $vars['labels']->singular_name;
$page_slug = $queried_object_vars['slug'];
$page = get_page_by_path( $page_slug );
$pageid = $page->ID;

$myposts = get_posts( array('post_type'=>'page','numberposts' => 1,'include' => $pageid) );
foreach( $myposts as $post ) :  setup_postdata($post);
  include ( \SZN\App::getFileDirectoryPath('variables','variables.php') );
  foreach( $images as $image ):
    include ( \SZN\App::getFileDirectoryPath('variables','acf-images-gallery.variables.php') );
  endforeach;
endforeach; // end of the loop.
wp_reset_postdata();
?>
<!-- END SETUP POST DATA + RESET -->
