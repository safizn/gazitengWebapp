<?php
$custom_post_types = array('case', 'question', 'entertainment', 'sc-questions', 'open-question', 'mc-question', 'article');
$args = array (
  'post_type' => $custom_post_types,
  'posts_per_page' => 1,
  'orderby' => 'date',
  'order'   => 'DESC'
);
?>
