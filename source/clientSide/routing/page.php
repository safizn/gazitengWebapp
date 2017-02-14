<?php get_header('start'); ?>
<?php include ( \SZN\App::getFileDirectoryPath('codeblocks','setup-post-data-for-pages.codeblock.php') ); ?>

<?php get_header('end'); ?>

<?php \SZN\App::createRouteDocument(__FILE__); ?>

<?php get_footer('end'); ?>
