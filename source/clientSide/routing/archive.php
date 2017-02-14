<?php
/*
Template Name: Archives Page
*/
?>
<?php get_header('start'); ?>
<?php include ( \SZN\App::getFileDirectoryPath('codeblocks','setup-post-data.codeblock.php') ); ?>
<?php get_header('end'); ?>

  <?php
  $template = \SZN\App::$templateObject;

  $template->defineView([
    'queryargsFiles' => ['main' => 'article-cpts.queryargs.php'],
    'viewFile' => 'masonry.view.php',
    'viewPositionInLayout' => 'content'
  ]);

  $template->insertViewsIntoLayout(\SZN\App::$defaults['DocumentLayout']); // save the rendered HTML into variables here and then add them when calling insert views.
  ?>


<?php get_footer('end'); ?>
