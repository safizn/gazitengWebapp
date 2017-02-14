<?php
$custom_post_types = array('question', 'entertainment', 'sc-questions', 'open-question', 'mc-question', 'article');
$args = array (
    'post_type' => $custom_post_types,
    'posts_per_page' => 100,
    'orderby' => 'date'
);
?>
