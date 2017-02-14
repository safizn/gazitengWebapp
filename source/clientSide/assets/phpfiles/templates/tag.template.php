<div class="container-fluid">

    <!-- Silence is Gold. -->
    <h1 style="text-align:center; width:100%; "> <?php post_type_archive_title(); ?> </h1>
    <h3 style="text-align:center; width:100%; "> Tag default</h3>


    <!-- AUTHOR ARCHIVE PAGE  -------------------------------------------->
        <?php
        // Echo author information on the top of author archive pages, using the plugin "wp-about-author" functions.
        if ( is_author() ) {/* If this is an author archive */
                //echo '<div align="center" style="margin:auto; margin-top: -6px;"><h3 class="pagetitle">Posts by Author';
                //echo $author->display_name;
                //echo '</h3> </div><br>';
            if(function_exists('wp_about_author_display')){
                $for_feed = false;
                echo '<div id="author-box" style="max-width: 800px; margin: auto; margin-bottom: 0; margin-top:-15px; border-radius:120px;overflow:hidden;">';
                echo wp_about_author_display();
                echo '</div>';
            } else {
                echo ""; // deat there is no function !!
            }
        }
        ?>


    <!-- Masonry Posts Area  -------------------------------------------->
	<?php
    \SZN\App::insert($views['masonry']);
	?>

</div>
