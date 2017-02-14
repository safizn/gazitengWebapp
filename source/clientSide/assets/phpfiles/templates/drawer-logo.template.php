<app-header class="logoHeader" waterfall fixed>
  <app-toolbar id="papertoolbarheader">
    <div title class="branding-heading" style="pointer-events: auto;">
          <?php $logo = of_get_option('logo'); ?>
          <a class="brand<?php if ($logo != '') { echo ' logo'; } ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>">
          <?php if ($logo != '') { ?>
              <img src="<?php echo $logo ?>" alt="Logo" />
          <?php } else {
              bloginfo('name');
          }
          ?>
          </a>
    </div>
    <paper-icon-button icon="icons:settings" on-tap="moreAction" style=" color: black;"></paper-icon-button>
  </app-toolbar>
</app-header>
