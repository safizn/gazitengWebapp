<?php
$slug = 'main-menu';
$custom_post_types = array('menu');
$args = array (
    'name' => $slug,
    'post_type' => $custom_post_types,
    'posts_per_page' => 100,
    'orderby' => 'date'
);
?>
