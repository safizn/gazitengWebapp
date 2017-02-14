<?php get_header('start'); ?>
<?php get_header('end'); ?>

<?php
$template = \SZN\App::$templateObject;

$masonry = $template->defineView([
  'queryargsFiles' => [ 'main' => 'archive.queryargs.php'],
  'viewFile' => 'masonry.view.php',
  'partialViewPositionInParentView' => 'masonry',
  'parentViewFile' => 'taxonomy.view.php',
  'specificInludedViewFile' => 'taxonomy.view.php'
]);

$template->defineView([
  'queryargsFiles' => [
                      ],
    'viewFile' => 'taxonomy.view.php',
    'viewPositionInLayout' => 'content',
    'viewChildren' => [$masonry]
]);

$template->insertViewsIntoLayout(\SZN\App::$defaults['DocumentLayout']); // save the rendered HTML into variables here and then add them when calling insert views.
//$template->printTemplate();
?>


<?php get_footer('end'); ?>
