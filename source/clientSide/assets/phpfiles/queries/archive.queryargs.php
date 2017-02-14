<?php
$custom_post_types = array(get_post_type());
$args = array (
    'post_type' => $custom_post_types,
    'posts_per_page' => 25,
    'orderby' => 'date'
);
?>
