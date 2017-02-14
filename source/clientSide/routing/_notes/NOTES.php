
<?PHP /* CASE PROBLEM */
  // The JSON REST API was returning an Object containing objects, which couldn't be used in iron-ajax. it should be an array containing objects. Turns out the problem was when adding objects to array in php, if the key is assigned the php or Json creates object of objects, while if no key is assigned to the array it creates array of objects.
?>





<?php // Author info for mobile (using default wordpress php check) or tablet || is_tablet() (using mobble plugin)
if ((is_mobile() == 1) ) {
  // TemplateSystem::includeFilePath('codeblocks','singlepostpage-author.codeblock.php');
}
?>




<?php if (is_mobile() == 0) { ?>
  <div class="h1-wrapper">
    <center>
      <h1 style="margin:0;">Add a Post (Testing):</h1>
      <p style=" font-size:16px; font-style:italic; color:white;"></p>
    </center>
  </div>
<?php
  TemplateSystem::includeFilePath('section','buttons-addnew.php');
}
?>



<!-- SETUP POST DATA -->
<?php
$queried_object = get_queried_object();
$queried_object_vars = get_object_vars ( $queried_object );
// echo $vars['labels']->singular_name;
$page_slug = $queried_object_vars['slug'];
$page = get_page_by_path( $page_slug );
$pageid = $page->ID;

$myposts = get_posts( array('post_type'=>'page','numberposts' => 1,'include' => $pageid) );
foreach( $myposts as $post ) :  setup_postdata($post);
  TemplateSystem::includeFilePath('query','variables.php');
  foreach( $images as $image ):
    TemplateSystem::includeFilePath('query','acf-images-gallery.php');
  endforeach;
endforeach; // end of the loop.
wp_reset_postdata();
?>
<!-- END SETUP POST DATA + RESET -->


//START A NEW QUERY AND ECHO DATA.
<?php
include ( SZN_template_directory('query','query-archive.php') );
while ($queryObject->have_posts()) : $queryObject->the_post();
include ( SZN_template_directory('query','variables.php') );

    echo $title;
    echo $id;

endwhile;
include ( SZN_template_directory('query','query-reset.php') );
?>

<!-- SECONDARY TOP MENU -->
<?php // echo SZN_template_includer('section/navigation','top-secondary-navigation.php');	?>

<!-- TITLE
<title-concept
titleconcept="<?php post_type_archive_title(); ?>"
  description=""
>
</title-concept>
-->


<!-- Loader masonry
<div id="ajax-loader-masonry" class="ajax-loader">-->
<!-- Loader masonry  <center><a href="javascript:location.reload(true);">Refresh</a></center></div>-->




<!-- NAVIGATION -->
<?php // include ( SZN_template_directory('section','navigation-between-posts.php') ); ?>
<!-- END NAVIGATION -->


<!-- SECONDARY TOP MENU -->
<?php // echo SZN_template_includer('section/navigation','top-secondary-navigation.php');	?>


<?php
echo var_export($GLOBALS['post'], TRUE);

var_dump($queryObject->query_vars);

?>

/* custom css
paper-scroll-header-panel {
	--paper-scroll-header-panel-full-header: {
		background-image: url(<?php echo SZN_get_json( 'http://dentrist.com/wp-json/pages/'. $id )->acf->image_gallery[0]->sizes->large; ?>);
		background-size: 100% auto;
	};
}
*/




<paper-drawer-panel >
  <paper-header-panel drawer>

    <paper-toolbar>
    	<div align="center" style="margin:auto; text-align:center;">
			<?php $logo = of_get_option('logo'); ?>
            <a class="brand<?php if ($logo != '') { echo ' logo'; } ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <?php if ($logo != '') { ?>
                <img src="<?php echo $logo ?>" alt="Logo" />
            <?php } else {
                bloginfo('name');
            }
            ?>
            </a>
            <paper-icon-button icon="icons:expand-more"></paper-icon-button>
        </div>
	</paper-toolbar>
    <div>
        <paper-menu>
          <paper-item>Item 1</paper-item>
          <paper-item>Item 2</paper-item>
          <paper-item>Item 2</paper-item>
          <paper-item>Item 2</paper-item>
          <paper-item>Item 2</paper-item>
          <paper-item>Item 2</paper-item>
          <paper-item>Item 2</paper-item>
          <paper-item>Item 2</paper-item>
        </paper-menu>
    </div>
  </paper-header-panel>





  <paper-header-panel class="	" main style="height:100%; ">

    <paper-scroll-header-panel condenses>
        <paper-toolbar>
            HIiiiiiii
        </paper-toolbar>
        <div>c</div>
    </paper-scroll-header-panel>
    <div>

        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
        <paper-material elevation="1">
            This is some text
        </paper-material>
    </div>
  </paper-header-panel>
</paper-drawer-panel>
