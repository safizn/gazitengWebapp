<?php
$custom_post_types = array('studyfield');
$args = array (
    'post_type' => $custom_post_types,
    'posts_per_page' => 25,
    'orderby' => 'title',
    'order'   => 'ASC'
);
$count = 1;
?>
