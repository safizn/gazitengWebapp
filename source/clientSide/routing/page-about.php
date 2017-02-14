<?php get_header('start'); ?>

<?php include ( \SZN\App::getFileDirectoryPath('codeblocks','setup-post-data-for-pages.codeblock.php') ); ?>
<?php get_header('end'); ?>
<?php include(\SZN\App::$appPath . '/javascripts' . '/facebook-javascript-sdk.js.php');  ?>



<?php

  $template = \SZN\App::$templateObject;

	$template->includeCodeblock([
      'codeblockFile' => 'page-about.codeblock.php',
      'codeblockPositionInLayout' => 'content'
  ]);

  $template->insertViewsIntoLayout(\SZN\App::$defaults['DocumentLayout']); // save the rendered HTML into variables here and then add them when calling insert views.
?>



<script>
  document.addEventListener('WebComponentsReady', function () {
    var template = document.querySelector('template[is="dom-bind"]');
    template.selected = 0; // selected is an index by default
  });
</script>

<?php get_footer('end'); ?>
