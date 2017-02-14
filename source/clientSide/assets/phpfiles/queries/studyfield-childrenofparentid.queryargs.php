<?php
$custom_post_types = array('studyfield');
$args = array (
    'post_type' => $custom_post_types,
    'post_parent' => $GLOBALS['parent_id'],
    'posts_per_page' => 25,
    'orderby' => 'title',
'order'   => 'ASC'
);
?>
