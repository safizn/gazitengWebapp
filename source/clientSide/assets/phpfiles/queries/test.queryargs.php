<?php

$custom_post_types = array(get_post_type(), 'article'); // All custom post types
$args = array ( // arguments
    'post_type' => $custom_post_types,
    'posts_per_page' => 25,
    'orderby' => 'date'
);

?>
