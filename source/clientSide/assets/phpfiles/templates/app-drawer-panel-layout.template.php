<app-drawer-layout id="paperDrawerPanel" responsive-width="1800px"  >

  <app-drawer position="left" swipe-open>
    <app-header-layout has-scrolling-region>


      <!--- STARTING VIEW PAPER HEADER-PANEL -->
        <?php
          \SZN\App::insert($views['headerpanel']);
        ?>
      <!--- ENDING VIEW PAPER-HEADER-PANEL -->


    </app-header-layout>
  </app-drawer>

  <app-header-layout class="main">

    <?php // if( (get_post_type() == 'examination') && !empty(wp_get_post_parent_id($post->ID)) ) { }?>
    <app-header class="contentHeader" condenses fixed effects="waterfall resize-title blend-background parallax-background">
      <app-toolbar>
        <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
        <?php
          if ( !wp_is_mobile() ) {
            $arrowbacklink = '#';
            switch (get_post_type( $post->ID )) {
            case 'examination':
              $arrowbacklink = WP_HOME . "/examination/israeli-dental-licensing-examination/";
            break;
            default:
              $arrowbacklink = get_post_type_archive_link(  get_post_type_archive_link( $post )  );
          }
          ?>
          <paper-icon-button icon="arrow-back" onclick="window.location.href='<?php echo $arrowbacklink; ?>'"></paper-icon-button>
        <?php
          }
        ?>
        <h4 condensed-title class="bottom title" style="  text-overflow: ellipsis; white-space: nowrap; overflow: hidden; text-shadow: 0 1px 2px rgba(0,0,0,0.6);">
          <?php
            \SZN\App::insert($views['toolbarTitle']);
          ?>
        </h4>

        <?php include( \SZN\App::getFileDirectoryPath('conditions','login-logout-buttons.conditions.php') ); ?>
        <?php if(is_user_logged_in()) { ?>
          <paper-icon-button icon="maps:rate-review" onclick=""></paper-icon-button>
          <!-- <dropdown-select horizontal-align="right" vertical-align="top">
            <paper-icon-button class="dropdown-trigger" icon="more-vert"></paper-icon-button>
            <div class="dropdown-content random-content" style="color: black;background-color: white; line-height: 20px; border-radius: 3px; box-shadow: 0px 2px 6px #ccc; padding: 1.5em 2em; max-width: 250px;">
            Lorem asdfasdf asf
            </div>
          </dropdown-select> -->

          <paper-menu-button style="margin: auto; position: relative;" horizontal-align="right" allow-outside-scroll>
            <paper-icon-button icon="more-vert" class="dropdown-trigger" alt="menu"></paper-icon-button>
            <paper-menu class="dropdown-content" style="display: block; max-width: 250px; ">
              <paper-item style="cursor: pointer; display: none;">This is the selected by default, to prevent preselected to appear.</paper-item>
              <paper-item style="cursor: pointer; ">Profile</paper-item>
              <paper-item onclick="window.location.href='<?php echo $logginglink; ?>'" style="cursor: pointer;">Sign out</paper-item>
            </paper-menu>
          </paper-menu-button>
        <?php } else { ?>
          <paper-icon-button icon="social:person" onclick="window.location.href='<?php echo $logginglink; ?>'"></paper-icon-button>
        <?php } ?>



      </app-toolbar>
      <app-toolbar  class="tall">
        <h1 spacer title class="contentTitle" style="  text-overflow: ellipsis; white-space: nowrap; overflow: hidden; text-shadow: 0 1px 2px rgba(0,0,0,0.6); margin-right: 0; margin-left: 0;">
          <?php
          \SZN\App::insert($views['toolbarTitle']);
          ?>
        </h1>
      </app-toolbar>
    </app-header>


    <div class="content" style="padding: 0; overflow-x: hidden;"><!-- FOOTER-END is the closing div -->

        <!-- Masonary visibility important -->
        <noscript>
          <style>
          #masonry {
          visibility: visible !important;
          }
          .paper-header:after {
              box-shadow:none;
          }
          </style>
        </noscript>

        <?php include( \SZN\App::getFileDirectoryPath('codeblocks','search-cat-tag.codeblock.php') ); ?>

        <!--- STARTING OF CONTENT -->
              <?php
              \SZN\App::insert($views['content']);
              ?>
        <!--- ENDING OF CONTENT -->

        <!--- STARTING OF FOOTER -->
        <?php
        \SZN\App::insert($views['footer']);
        ?>
        <!--- ENDING OF FOOTER -->
    </div>

    <paper-toast id="toastsignin" text="You must be signed in." style="z-index:1;">
    <span role="button" tabindex="0" style="color: #eeff41;margin: 10px; cursor: pointer;" onclick="window.location.href='<?php echo  wp_login_url($permalink); ?>'">Sign-in</span>
    </paper-toast>

  </app-header-layout>


</app-drawer-layout>
