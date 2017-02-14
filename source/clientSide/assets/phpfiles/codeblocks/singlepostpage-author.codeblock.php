<?php


	global $post;



  	$wp_about_author_settings=array();

	$wp_about_author_settings=get_option('wp_about_author_settings');



	$wp_about_author_content = "";

	$wp_about_author_description = "";

    $wp_about_author_links = "";

    $wp_about_author_social = "";

	$wp_about_author_author_pic =  "";

	$wp_about_author_author = array();

	$wp_about_author_author['name'] = get_the_author();

	$wp_about_author_author['description'] = get_the_author_meta('description');

	$wp_about_author_author['website'] = get_the_author_meta('url');

	$wp_about_author_author['posts'] = (int)get_the_author_posts();

  	$wp_about_author_author['posts_url'] = get_author_posts_url(get_the_author_meta('ID'));

	$wp_about_author_author_pic = get_avatar(get_the_author_meta('email'), $wp_about_author_settings['wp_author_avatar_size']);



        // About Author Title

	$wp_about_author_content .= "<h3><a href='" . $wp_about_author_author['posts_url']. "' title='". $wp_about_author_author['name'] ."'>". apply_filters( 'wp_about_author_name', $wp_about_author_author['name'] ) ."</a></h3>";



        // About Author Description

        $wp_about_author_description .= "<p>"  .apply_filters( 'wp_about_author_description', $wp_about_author_author['description']) . "</p>";



        // About Author Links + my addition to prevent showing more posts link in author archive pages.

		if (!is_author()) {
        if(!empty($wp_about_author_author['posts_url'])){


			// Post time
			$post_time = ipin_human_time_diff(get_post_time('U', true));
			$wp_about_author_content .= '<span id="post-time-singlepage"><i class=" fa fa-clock-o" style="font-size:11px;"></i>  '.$post_time.'</span>'.'<br />';
			// MORE posts link
            $wp_about_author_content .= "<a href='" . $wp_about_author_author['posts_url']. "' title='More posts by ". $wp_about_author_author['name'] ."'>".apply_filters( 'wp_about_author_more_posts', "More Posts")."</a> ";

        }
		} else {
			$wp_about_author_content .= '';
		}

        if(!empty($wp_about_author_author['website'])){

            if($wp_about_author_links!=""){$wp_about_author_links.=apply_filters( 'wp_about_author_separator', " - ");}

            $wp_about_author_links .= "<a href='" . $wp_about_author_author['website']. "' title='". $wp_about_author_author['name'] ."'>".apply_filters( 'wp_about_author_website', "Website")."</a> ";

        }



        // About Author Social

        $wp_about_author_social .= wp_about_author_get_social_links($wp_about_author_settings);

        if(isset($wp_about_author_settings['wp_author_social_images']) && $wp_about_author_settings['wp_author_social_images']){

            $wp_about_author_description .= "<p>"  .$wp_about_author_links . "</p>";

            if($wp_about_author_social != ""){

                $wp_about_author_description .= '<p class="wpa-nomargin">'.apply_filters( 'wp_about_author_follow_me', "").'<br />' . $wp_about_author_social.'</p>';

            }

        } else {

            $wp_about_author_description .= "<p class='wpa-nomargin'>";

            $wp_about_author_description .= $wp_about_author_links;

            if($wp_about_author_social != ""){

                $wp_about_author_description .= apply_filters( 'wp_about_author_separator', " - ") . $wp_about_author_social;

            }

            $wp_about_author_description .= "</p>";

        }



        // Avatar size and shape

		$wp_about_author_avatar_class = 'wp-about-author-pic';

		if($wp_about_author_settings['wp_author_avatar_shape'] === "on"){

			$wp_about_author_avatar_class .= ' wp-about-author-circle';

		}

		// margin of author picture to the text and desc, other content ...
		$wp_about_author_text_margin = ($wp_about_author_settings['wp_author_avatar_size'] + 40) . 'px';



        // Create output

        $return_pic = '';
        $return_content = '';
        $return_desc = '';

        // Allow filters to create new templates for output

        if (!$for_feed){

            $return_pic = apply_filters( 'wp_about_author_template','<div class="wp-about-author-containter-%%bordertype%%" ><div class="'.$wp_about_author_avatar_class.'">%%authorpic%%</div></div>');
            $return_content = apply_filters( 'wp_about_author_template','<div class="wp-about-author-containter-%%bordertype%%" >%%content%%</div>');
            $return_desc = apply_filters( 'wp_about_author_template','<div id="about-author-description">%%description%%</div>');

        } else {

            $return_pic = apply_filters( 'wp_about_author_feed_template','<p><div style="float:left; text-align:left;>%%authorpic%%</div></p>');
            $return_content = apply_filters( 'wp_about_author_feed_template','<p>%%content%%</p>');
            $return_desc = apply_filters( 'wp_about_author_feed_template','<p>%%description%%</p>');

        }



        $replace_array_pic = array(

            '%%bordertype%%'=>$wp_about_author_settings['wp_author_alert_border'],

            '%%borderbg%%'=>$wp_about_author_settings['wp_author_alert_bg'],

            '%%authorpic%%'=>$wp_about_author_author_pic,

        );

        foreach($replace_array_pic as $search=>$replace){

            $return_pic = str_replace($search, $replace, $return_pic);

        }




        $replace_array = array(

            '%%bordertype%%'=>$wp_about_author_settings['wp_author_alert_border'],

            '%%borderbg%%'=>$wp_about_author_settings['wp_author_alert_bg'],

            '%%authorpic%%'=>$wp_about_author_author_pic,

            '%%content%%'=>$wp_about_author_content,

        );

        foreach($replace_array as $search=>$replace){

            $return_content = str_replace($search, $replace, $return_content);

        }




        $replace_array_desc = array(

            '%%bordertype%%'=>$wp_about_author_settings['wp_author_alert_border'],

            '%%borderbg%%'=>$wp_about_author_settings['wp_author_alert_bg'],

            '%%description%%'=>$wp_about_author_description

        );

        foreach($replace_array_desc as $search=>$replace){

            $return_desc = str_replace($search, $replace, $return_desc);

        }






?>


        <article  <?php  if (is_mobile() == 0) {  echo 'class="sidebar-author-img"'; } else { echo 'class="mobile-author-img"';} ?>>
            <input type="checkbox" id="read_more" role="button">
            <figure>
				<?php
                echo apply_filters( 'wp_about_author_display', $return_pic );
                ?>
            </figure>
            <section class="author-name">
            <?php
            echo apply_filters( 'wp_about_author_display', $return_content );
			?>
            </section>
            <section>
            <?php
            echo apply_filters( 'wp_about_author_display', $return_desc );
			?>
            </section>
            <?php if (is_mobile() == 0) {?>
            <label for="read_more" onclick=""><span><i class="fa fa-arrow-down"></i></span><span><i class="fa fa-arrow-up"></i></span></label>
            <?php } ?>
            </input>
        </article>​
