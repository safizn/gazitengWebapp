<template is="dom-bind">
  <div class="middle">
    <paper-tabs class="bottom self-end" selected="{{selected}}" style="background-color:#4285f4; color:white; -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.08); -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.08); box-shadow: 0 1px 3px rgba(0,0,0,0.08); border-radius: 3px;">
      <paper-tab>Description</paper-tab>
      <paper-tab>Owner</paper-tab>
    </paper-tabs>
    <?php

    // Show all information, defaults to INFO_ALL
    // phpinfo();

    // Show just the module information.
    // phpinfo(8) yields identical results.
    // phpinfo(INFO_MODULES);

    ?>
  </div>
  <div class="bottom">
    <iron-pages selected="{{selected}}">
      <div align-items="center" style="text-align:center;">
				<!-- Content -->
				<?php if (have_posts()) : while (have_posts()) : the_post();?>
				<?php the_content(); ?>
				<?php endwhile; endif; ?>
				<div class="fb-page" data-href="https://www.facebook.com/Dentrist.All" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/Dentrist.All"><a href="https://www.facebook.com/Dentrist.All">Dentrist</a></blockquote></div></div>
			</div>

      <div align-items="center" style="text-align:center;">
				<br />
				<p style="text-align: center;">A special thanks to all who helped aggregate & organize the material on this site.</p>
				<div class="fb-page" data-href="https://www.facebook.com/pages/Dr-Safi-Zeidan-Nassar/263203630469965?ref=bookmarks" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/pages/Dr-Safi-Zeidan-Nassar/263203630469965?ref=bookmarks"><a href="https://www.facebook.com/pages/Dr-Safi-Zeidan-Nassar/263203630469965?ref=bookmarks">Dr. Safi Zeidan Nassar</a></blockquote></div></div>
			</div>
    </iron-pages>
  </div>
</template>
