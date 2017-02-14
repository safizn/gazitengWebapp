<?php get_header('start'); ?>
<?php get_header('end'); ?>

<?php include(\SZN\App::$scripts_directory_path . '/js' . '/facebook-javascript-sdk.js.php');  ?>

<?php
$template = \SZN\App::$templateObject;

$template->defineView([
	'queryargsFiles' => [
											'main' => 'studyfield-parentsonly.queryargs.php'
											],
		'viewFile' => 'single.view.php',
		'viewPositionInLayout' => 'content'
]);

$template->insertViewsIntoLayout(\SZN\App::$defaults['DocumentLayout']); // save the rendered HTML into variables here and then add them when calling insert views.
?>

<?php get_footer('end'); ?>
