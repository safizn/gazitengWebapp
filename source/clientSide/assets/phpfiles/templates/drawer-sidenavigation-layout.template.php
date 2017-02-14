
<?php
if($data['secondary'] && $data['secondary'] != NULL) {
  $dataName = 'secondary';
} else {
  $dataName = 'main';
}

if($data[$dataName]['queryObject']) {
  while ($data[$dataName]['queryObject']->have_posts()) :
      $data[$dataName]['queryObject']->the_post(); // replace default post to custom query post
      include( \SZN\App::getFileDirectoryPath('variables','variables.php') );
?>
<?php $menuBackgroundImage = include \SZN\App::getFileDirectoryPath('conditions','menuBackgroundImage.conditions.php'); ?>
          <paper-menu class="list" style="height: 100%; background:url(<?php echo $menuBackgroundImage; ?>) no-repeat bottom <?php if(is_mobile()){ echo 'right';} else {echo 'center';} ?>; background-size: <?php if(is_mobile()){ echo '60%';} else {echo '100%';} ?> auto;">



            <paper-icon-item onclick="window.location.href='<?php echo WP_HOME . '/' . 'projects'; ?>'" style="<?php if(is_post_type_archive( 'mcq' )) { echo 'background-color: rgba(255, 255, 255, 0.6);'; } else {  echo 'background-color: rgba(255, 255, 255, 0.6);'; } ?> ">
              <iron-icon icon="icons:offline-pin" item-icon></iron-icon>
              <paper-item-body two-line>
                <div>Projects</div>
                <div secondary>Architectural engineering jobs.</div>
              </paper-item-body>
            </paper-icon-item>
            <iron-collapse id="submenucollapse4">
              <div class="content">
                <div>(Testing).</div>
              </div>
            </iron-collapse>



              <?php
              if( have_rows('flexContent') ): // check if the flexible content field has rows of data
                while ( have_rows('flexContent') ) : the_row(); // loop through the rows of data
                	$menuItems = get_sub_field('childrenMenuItems');
                  foreach ($menuItems as $menuItem) {
                    $title = $menuItem->post_title;
                    $url = (get_field('menuURL', $menuItem->ID) ?  get_field('menuURL', $menuItem->ID) : WP_HOME . '/'. $menuItem->post_name);
                    $icon = get_field('menuIcon', $menuItem->ID);
                    $description = get_field('menuDescription', $menuItem->ID);
                    //$permalink = get_permalink($menuItem->ID);
                  ?>
                      <paper-icon-item onclick="window.location.href='<?php echo $url; ?>'" style="background-color: rgba(255, 255, 255, 0.6);">
                        <iron-icon icon="<?php echo $icon; ?>" item-icon></iron-icon>
                        <paper-item-body two-line>
                          <div><?php echo $title; ?></div>
                          <div secondary><?php echo $description; ?></div>
                        </paper-item-body>
                      </paper-icon-item>
                      <iron-collapse id="submenucollapse5">
                        <div class="content">
                          <div>(Testing).</div>
                        </div>
                      </iron-collapse>
                  <?php
                  }
                endwhile;
              else :
                  // no layouts found
              endif;
              ?>


              <paper-icon-item onclick="document.querySelector('#submenucollapse4').toggle();" style="background-color: rgba(255, 255, 255, 0.6); display: none;">
                <iron-icon icon="icons:perm-identity" item-icon></iron-icon>
                <paper-item-body two-line>
                  <div>Private Area - Testing</div>
                  <div secondary>Profile, Comments, Posts</div>
                </paper-item-body>
              </paper-icon-item>
              <iron-collapse id="submenucollapse4">
                <div class="content">
                  <div>(Testing).</div>
                </div>
              </iron-collapse>



          </paper-menu>
<?php
  endwhile;
} else {
	echo 'Data does not exist !';
}
?>
