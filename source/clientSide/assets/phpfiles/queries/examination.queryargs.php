<?php
$custom_post_types = array('examination');
$args = array (
    'post_type' => $custom_post_types,
    'posts_per_page' => 24,
    'orderby' => 'title',
    'post_parent' => 2345,
    'order'   => 'ASC'
);
?>
