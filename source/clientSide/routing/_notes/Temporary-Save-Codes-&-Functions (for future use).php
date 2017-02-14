









<!--- SHOW EDIT PAGE LINK  -->
<?php
the_content();
wp_link_pages( array( 'before' => '<p><strong>' . __('Pages:', 'ipin') . '</strong>', 'after' => '</p>' ) );
edit_post_link(__('Edit Page', 'ipin'),'<p>[ ',' ]</p>');
?>






<!-----------------------------------------    


THIS FILE IS ONLY FOR REFERENCE TO ALLOW THE DEVELOPER REUSE OF OLD OR NON-USED SCRIPTS


-------------------------------------------->



-------------------------------------------------------PURE CSS SOLUTION FOR CROPPING IMAGES AND VERTICALLY CENTERING INSIDE DIV, BUT THE ROUNDED CORNERS DOESN'T AFFECT IMAGES...
.image-single-wrap {
	width: 100%; 
    max-height: 300px;
    overflow: hidden;
    -webkit-transition: max-width .5s ease-out;  /* Saf3.2+, Chrome */
    -moz-transition: max-width .5s ease-out;  /* FF4+ */
    -ms-transition: max-width .5s ease-out;  /* IE10? */
    -o-transition: max-width .5s ease-out;  /* Opera 10.5+ */
    transition: max-width .5s ease-out;
}
.image-wrap {
	width: 100%; 
	height: 80px;       
    max-height: 300px;
	position: relative;
    overflow: hidden;
    -webkit-transition: max-width .5s ease-out;  /* Saf3.2+, Chrome */
    -moz-transition: max-width .5s ease-out;  /* FF4+ */
    -ms-transition: max-width .5s ease-out;  /* IE10? */
    -o-transition: max-width .5s ease-out;  /* Opera 10.5+ */
    transition: max-width .5s ease-out;
}
.image-wrap img {
	width: 100%;
	
    position: absolute;
    top:-100%; left:0; right: 0; bottom:-100%;
    margin: auto;

	-webkit-transition: margin-top .5s ease-out;  /* Saf3.2+, Chrome */
	-moz-transition: margin-top .5s ease-out;  /* FF4+ */
	-ms-transition: margin-top .5s ease-out;  /* IE10? */
	-o-transition: margin-top .5s ease-out;  /* Opera 10.5+ */
	transition: margin-top .5s ease-out;
}
.image-wrap:hover img{
}




// AND THIS IS IN THE OUTPUTIMAGES.PHP
    <div class="
    <?php //For preventing thumb dislocation when only one image present & making the thumb fit img
    $imagesnumber = easy_image_gallery_count_images();
    $divheight = 0;
    if ($imagesnumber <2) {
        echo 'image-single-wrap';
    } else {
        echo 'image-wrap';
    }
    ?>
    " id="wrapper">
        <img src="<?php echo $image_link; ?>" alt="" class="post-img" style="height: <?php echo round(230/$imgwidth*$imgheight); ?> px;width:100%; display: inherit; "/> 
    </div>




<!------------------------------------------- Main Picture here ! -------------------------------------->
                <div class="thumb-holder" align="center">
				<a href="<?php  the_permalink(); ?>">
					<?php
					if (has_post_thumbnail()) {
						$imgsrc = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'medium');
						$imgwidth = $imgsrc[1];
						$imgheight = $imgsrc[2];
						$imgsrc = $imgsrc[0];
					} elseif ($postimages = get_children("post_parent=$post->ID&post_type=attachment&post_mime_type=image&numberposts=0")) {
						foreach($postimages as $postimage) {
							$imgsrc = wp_get_attachment_image_src($postimage->ID, 'medium');
							$imgwidth = $imgsrc[1];
							$imgheight = $imgsrc[2];
							$imgsrc = $imgsrc[0];
						}
					} elseif (preg_match('/<img [^>]*src=["|\']([^"|\']+)/i', get_the_content(), $match) != FALSE) {
						$imgsrc = $match[1];
					} else {
						$imgsrc = get_template_directory_uri() . '/img/blank.gif';
					}
					?>
					<img src="<?php echo $imgsrc; $imgsrc = ''; ?>" alt="<?php the_title_attribute(); ?>"  style="<?php if ($imgwidth != '') { ?>width: <?php echo $imgwidth; ?>;height:<?php echo $imgheight; ?>px;<?php } else { ?>width:<?php $imgwidth ?> ;height:<?php $imgheight ?>;<?php }  ?>" />
				</a>
				</div>










<!-----------------------------------------  ONTO CATERGOTY FOR POST INSIDE LOOP  -------------------------------------------->
<?php _e('onto', 'ipin'); ?> <span class="masonry-meta-content"><?php the_category(', '); ?></span>
















<!-----------------------------------------  COMMENTS AREA IN POST LOOP  -------------------------------------------->
            <?php
			// Comments section caption (Legend)
			if ($comments_number != '0') {
			echo	'<!-- Comments Caption (Legend) -->
            <div id="" class="" style=" line-height: 10px; clear: both; margin:6px 0 5px 0; position:relative; width: 100%; border-bottom: solid 1px #CCCCCC">
            	<div id="" class="" align="center" style=" color: #888; width: 100%; position: absolute; bottom: -5px; text-align:center; font-size: 11px;">
				              
				<a href="'?><?php echo the_permalink(); ?><?php echo '/#respond" style="width:inherit;background-color:white; padding: 0 5px 0 5px;"><span style="font-size:9px;">'; ?> <?php echo $comments_number; ?>  <?php echo '  <i class="icon-comment" style="font-size:9px;"></i></span></a>
				</div>
            </div>';}
				?>
            
            <!-----------------------------------------  INFERIOR LEGEND INFO  -------------------------------------------->
            <div class="bottomlegend" align="right" style="">
                <div>
                    <a href="" style="width:inherit;"><span style=" float:right; margin-right:9px;font-size:9px;"><i class="icon-heart" style="font-size:9px;"></i> 24</span></a>
                <!--    <a href="<?php // the_permalink(); ?>/#respond" style="width:inherit;"><span style=" float:right; margin-right:7px;font-size:9px;"><i class="icon-comment" style="font-size:9px;"></i> <?php // echo $comments_number; ?></span></a> -->
                </div>
            </div>
                
			<?php
			if ('0' != $frontpage_comments_number = of_get_option('frontpage_comments_number')) {
				$args = array(
					'number' => $frontpage_comments_number,
					'post_id' => $post->ID,
					'status' => 'approve'
 				);
            	$comments = get_comments($args);
				foreach($comments as $comment) {
				?>
                <div class="masonry-meta">
					<?php if ($show_avatars == '1') { ?>
					<div class="masonry-meta-avatar">
						<a href="<?php echo get_author_posts_url(get_comment(get_comment_ID())->user_id); ?>" title=" <?php echo get_comment_author(); ?> " style="font-style:normal;">
						<?php echo get_avatar( $comment->comment_author_email , '30'); ?>
                        </a>
                    </div>
					<div class="masonry-meta-comment">
					<?php } ?>
						<span class="masonry-meta-author">
       						<a href="<?php echo get_author_posts_url(get_comment(get_comment_ID())->user_id); ?>" title=" <?php echo get_comment_author(); ?> " style="font-style:normal;">
							<?php echo $comment->comment_author; ?>
                            </a>
                        </span> 
						<?php echo $comment->comment_content; ?>
					<?php if ($show_avatars == '1') { ?>
					</div>
					<?php } ?>
				</div>
				<?php 
				}
				// If more than 3 show a link to view all.
				if ($comments_number > $frontpage_comments_number) { 
				?>
				<div class="masonry-meta text-align-center" style=" min-height:15px;">
					<span class="masonry-meta-author">
					<a href="<?php the_permalink() ?>/#navigation" title="<?php _e('View all', 'ipin'); ?> <?php echo $comments_number; ?> <?php _e('comments', 'ipin') ?>"><?php _e('View all', 'ipin'); ?> <?php echo $comments_number; ?> <?php _e('comments', 'ipin') ?></a>
					</span>
				</div>
			<?php } 
			}	?>
