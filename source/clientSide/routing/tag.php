<?php get_header('start'); ?>
<?php get_header('end'); ?>

<?php
$template = \SZN\App::$templateObject;

$masonry = $template->defineView([
  'queryargsFiles' => [ 'main' => 'archive.queryargs.php'],
  'viewFile' => 'masonry.view.php',
  'partialViewPositionInParentView' => 'masonry',
  'parentViewFile' => 'tag.view.php',
  'specificInludedViewFile' => 'tag.view.php'
]);

$template->defineView([
  'queryargsFiles' => [
                      ],
    'viewFile' => 'tag.view.php',
    'viewPositionInLayout' => 'content',
    'viewChildren' => [$masonry]
]);

$template->insertViewsIntoLayout(\SZN\App::$defaults['DocumentLayout']); // save the rendered HTML into variables here and then add them when calling insert views.
?>

<?php get_footer('end'); ?>
