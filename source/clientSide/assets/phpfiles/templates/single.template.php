<?php
  while (have_posts()) : the_post();
      \SZN\App::includeFilePath('variables','variables.php');
  ?>

          <div id="post-<?php the_ID(); ?>" <?php post_class('post-wrapper'); ?>>

              <!-- POST INFO - Time, Comments, Likes -->
              <div class="post-meta-top">

                  <!--<div class="pull-right"><a href="#navigation"><?php //comments_number(__('0 Comments','ipin'), __('1 Comment', 'ipin'), __('% Comments',' ipin'));?></a><?php //edit_post_link(__('Edit', 'ipin'), ' | '); ?></div> -->
                  <div class="pull-left">
                      <!-- TAGS & CATEGORIES -->
                      <div class="post-meta-category-tag">
                          <?php
                          $terms_as_text = get_the_term_list( $id, 'studyfield', '', ', ', '' ) ;
                          echo 'Dental Fields: '. strip_tags($terms_as_text);
                          ?>

                      </div>
                  </div>

                  <div class="pull-right">
                      <time is="relative-time" datetime="<?php echo $post_time_iso8106; ?>" style="margin-right:20px;"></time>
                  <!-- <a href="" style="width:inherit;"><span style=" float:right; margin-right:11px;font-size:11px;"><i class="fa fa-heart" style="font-size:11px;"></i> 24 Shares</span></a> -->
                  <a class="comments_number" href="#comments" style="width:inherit;"><span id="comments_number"><i class="fa fa-comment"></i> <?php comments_number(__('0','ipin'), __('1', 'ipin'), __('%',' ipin')); ?></span></a>
                  </div>

              </div>

              <!-- IMAGES -->
              <?php
              \SZN\App::includeFilePath('codeblocks','singlepostpage-images.codeblock.php'); ?>

              <!-- POST CONTENT AREA & INFO -->
              <div class="post-content">
                  <!-- CONTENT -->
                  <div id="post-content-text">

                      <?php
                      the_content();
                      wp_link_pages( array( 'before' => '<p><strong>' . __('Pages:', 'ipin') . '</strong>', 'after' => '</p>' ) );
                      ?>

                  </div>
              </div>


              <!-- REFERENCES -->
              <div id="post-reference">
                  <?php
                  // Reference Field Links
                  if( have_rows('reference') ):
                  /*
                  *  Loop through a Repeater field
                  */ ?>
                      <card-section concepttitle="References :">
                      <?php
                              // Order number
                              $x = 1;
                              // loop through the rows of data
                              while ( have_rows('reference') ) : the_row();
                                  $title_reference = get_sub_field('title');

                                  if (!empty($title_reference)) {

                                  ?>

                                  <reference-listitem
                                          referencetitle="<?php echo $x.'. ' . $title_reference; ?>"
                                          referencelink=" <?php echo get_sub_field('link'); ?>"
                                      ></reference-listitem>

                                  <?php
                                      $x ++; // increase order num
                                  }
                              endwhile;
                      ?>
                      </card-section>
                  <?php
                  else :
                  endif;
                  ?>
              </div>
              <!-- END REFERENCES -->

              <!-- FACEBOOK COMMENTS - The script of faceboo should be added above-->
              <card-section concepttitle="Facebook Comments :">
                  <div class="post-comments" style="border-top: 1px solid #CCC; ">
                      <div class="fb-comments" data-href="<?php echo wp_get_shortlink(); ?>" data-numposts="5" data-colorscheme="light" data-width="100%"></div>
                  </div>
              </card-section>
              <!-- END FACEBOOK COMMENTS -->

              <!-- Dentrist Users COMMENTS -->
              <card-section concepttitle="Dentrsit Users Comments :">
                  <div class="post-comments">
                          <?php comments_template(); ?>
                  </div>
              </card-section>
              <!-- END Dentrist Users COMMENTS -->

              <!-- Like post  -->
              <?php // include 'incphp_theme/like-post.php';?>

          </div>

  <?php endwhile; ?>




<!---<div class="clearfix"></div>
MASONRY - ALL POSTS ------------------------------------------->
<?php /* Custom Query - All posts masonry

//Solve next link - http://wordpress.stackexchange.com/questions/20424/wp-query-and-next-posts-link
//save old query
$temp = $wp_query;

$wp_query->is_single = false; // wouldn't treat it as singlepage.

//clear $wp_query;
$wp_query= null;

// All custom post types
$custom_post_types = array('case', 'question', 'entertainment', 'sc-questions', 'open-question', 'mc-question', 'article');

  // create new query for to display masonry bricks
  // arguments
  $args = array (
      'post_type' => $custom_post_types,
      'posts_per_page' => 25,
      'orderby' => 'date'
  );
  // Create new query
  $queryObject = new WP_Query($args);

// Trick wordpress to use new query as default inorder to use global parameters i.e. next_posts_link(); - ALLOW NEXT LINK TO WORK
$wp_query = $queryObject;

// Define post counter
$count = 1;
?>

<div id="masonry">
<?php
// The Loop...
while ($queryObject->have_posts()) :

  // replace default post to custom query post
  $queryObject->the_post();

  // Post query all VARIABLES
  SZN\\SZN\App::includeFilePath('query','variables.php');



  if ($count % 16 == 0  || $count == 2) {
  ?>
      <div id="ads-masonry-brick" class="thumb brick" style="a">
      <center>
      <!-- Ads -->
      <?php if(function_exists('SZN_ads'))	echo SZN_ads('small', 'square', array('tablet','desktop','mobile')); ?>
      </center>
      </div>

  <?php
  }

  // choose Brick
  SZN\\SZN\App::includeFilePath('section','masonry-bricks.php');



  //add counter
  $count++;

endwhile;


  ?>
</div>

<!-----------------------------------------  INFINITE SCROLL - NAVIGATION FOR NEXT/PREVIOUS POSTS  -------------------------------------------->
<div id="navigation">
  <ul class="pager">
      <li id="navigation-next"><?php next_posts_link(); ?></li>
      <li id="navigation-previous"><?php previous_posts_link(__('Next &raquo;', 'ipin')) ?></li>
  </ul>
</div>

<?php
//clear again
$wp_query = null;
//reset
$wp_query = $temp;

  // Restore original Post Data
  wp_reset_postdata();
*/?>
