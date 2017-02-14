<div class="container-fluid">

    <!-- Silence is Gold. -->
    <h1 style="text-align:center; width:100%; "> <?php echo get_the_title($ID); ?>  </h1>

	<!-- Loader masonry  -->
	<div id="ajax-loader-masonry" class="ajax-loader"></div>


<!-- "About" Section  -------------------------------------------->
<div class="horizontal-section">
	<div id="" class="brick">
   		<span> default template page. </span>
    </div>
	<div id="" class="brick">
   		<span> General Page  </span>
    </div>
</div>


<!--  NAVIGATION FOR NEXT/PREVIOUS POSTS  -------------------------------------------->
	<div id="navigation">
		<ul class="pager">
			<li id="navigation-next"><?php next_posts_link(__('&laquo; Previous', 'ipin')) ?></li>
			<li id="navigation-previous"><?php previous_posts_link(__('Next &raquo;', 'ipin')) ?></li>
		</ul>
	</div>

<!--  SCROLL TOP  -------------------------------------------->
	<div id="scrolltotop"><a href="#"><i class="fa fa-chevron-up"></i><br /><?php _e('Top', 'ipin'); ?></a></div>

</div>
