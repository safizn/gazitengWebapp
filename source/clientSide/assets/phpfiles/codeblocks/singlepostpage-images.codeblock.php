<?php
global $post;
?>

<?php
include( \SZN\App::getFileDirectoryPath('variables','variables.php') );
?>


<?php
// ACF image gallery - echo into FancyBox js gallery
if( $images ): ?>
<p class="image-gallery">
<?php if ($imagesnumber != 1) {?>
	<?php foreach( $images as $image ): ?>
        <?php
        include( \SZN\App::getFileDirectoryPath('variables','acf-images-gallery.variables.php') ); // image-gallery field variables.
        ?>

        <a class="fancybox-buttons-thumb" data-fancybox-group="button-thumb" href="<?php echo $image_url_large; ?>">
            <img src="<?php echo $image_thumb; ?>" alt="<?php echo $image_title; ?>" />
        </a>

    <?php endforeach; ?>
<?php } else { // if single image ?>

	<?php foreach( $images as $image ): ?>
        <?php
        include( \SZN\App::getFileDirectoryPath('variables','acf-images-gallery.variables.php') ); // image-gallery field variables.
        ?>

        <a class="fancybox-buttons-thumb" target="_blank" data-fancybox-group="button-thumb" href="<?php echo $image_url_large; ?>">
            <img src="<?php echo $image_url; ?>" alt="<?php echo $image_title; ?>" />
        </a>
    <?php endforeach; ?>

<?php } ?>


</p>
<?php endif;
