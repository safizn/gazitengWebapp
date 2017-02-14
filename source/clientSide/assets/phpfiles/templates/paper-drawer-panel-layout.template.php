
<paper-drawer-panel id="paperDrawerPanel" edge-swipe-sensitivity="30" <?php if(is_single() || is_post_type_archive( 'mcq' ) || 1==1) {echo 'force-narrow'; }?> drawer-width="320px">
  <paper-header-panel drawer>
    <!--- STARTING VIEW PAPER HEADER-PANEL -->
		<?php
    \SZN\App::insert($views['headerpanel']);
		?>
    <!--- ENDING VIEW PAPER-HEADER-PANEL -->

  </paper-header-panel>



  <div main>
    <div>
        <paper-scroll-header-panel condenses keep-condensed-header >
                <paper-toolbar class="tall">
                    <paper-icon-button icon="menu" paper-drawer-toggle style="margin-right:0; "></paper-icon-button>
                  	<?php  if ( !wp_is_mobile() ) {
      												$arrowbacklink = '#';
      													switch (get_post_type( $post->ID )) {
      													    case 'examination':
      													        $arrowbacklink ="http://dentrist.com/examination/israeli-dental-licensing-examination/";
      											        break;
      															default:
      																	$arrowbacklink = get_post_type_archive_link(  get_post_type_archive_link( $post )  );
      													}
      								?>
      										<paper-icon-button icon="arrow-back" onclick="window.location.href='<?php echo $arrowbacklink; ?>'"></paper-icon-button>
      							<?php }  ?>
                    <div class="flex"></div>

                    <?php include( \SZN\App::getFileDirectoryPath('conditions','login-logout-buttons.conditions.php') ); ?>

                    <paper-icon-button icon="<?php if(current_user_can('contributor')) { ?>maps:rate-review<? } else {?>social:person<?php }?>" onclick="window.location.href='<?php echo $logginglink; ?>'"></paper-icon-button>
                    <paper-icon-button icon="more-vert"></paper-icon-button>

                    <div class="bottom title" style="   line-height: 50px; text-overflow: ellipsis ;white-space: nowrap; overflow: hidden; text-shadow: 0 1px 2px rgba(0,0,0,0.6);">
                    <!--- STARTING OF toolbar-title -->
                      <?php
                      \SZN\App::insert($views['toolbarTitle']);
                      ?>
                    <!--- ENDING OF toolbar-title -->
                    </div>

            </paper-toolbar>

                <div class="content" <?php if(get_post_type( $post->ID ) == 'examination') { ?> style="background-color:#EEEEEE;" <?php }?>><!-- FOOTER-END is the closing div -->


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
                        <div class="container-fluid">
                      		<?php
                          \SZN\App::insert($views['content']);
                      		?>
                        </div>
                    <!--- ENDING OF CONTENT -->

                    <!--- STARTING OF FOOTER -->
                    <?php
                    \SZN\App::insert($views['footer']);
                    ?>
                    <!--- ENDING OF LAYOUT -->


                <!--- ENDING OF LAYOUT -->
                </div>
    </paper-scroll-header-panel>

    </div>
  </div>

<paper-toast id="toastsignin" text="You must be signed in." style="z-index:1;">
<span role="button" tabindex="0" style="color: #eeff41;margin: 10px; cursor: pointer;" onclick="window.location.href='<?php echo  wp_login_url($permalink); ?>'">Sign-in</span>
</paper-toast>


</paper-drawer-panel>
