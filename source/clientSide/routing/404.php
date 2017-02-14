<?php get_header('start'); ?>
<?php get_header('end'); ?>

<?php
  $template = \SZN\App::$templateObject;

	$template->includeCodeblock([
      'codeblockFile' => '404.codeblock.php',
      'codeblockPositionInLayout' => 'content'
  ]);

  $template->insertViewsIntoLayout(\SZN\App::$defaults['DocumentLayout']); // save the rendered HTML into variables here and then add them when calling insert views.
?>

<?php get_footer('end'); ?>
