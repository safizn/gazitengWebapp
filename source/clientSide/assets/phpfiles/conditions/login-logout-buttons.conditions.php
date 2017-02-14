<!-- Login / Logout buttons -->
<?php
if (is_user_logged_in()) {
    if(!is_home()) {
      $logginglink = wp_logout_url(WP_HOME . $_SERVER["REQUEST_URI"]);
    } else {
      $logginglink = wp_logout_url(WP_HOME);
    }
    if(current_user_can('contributor')) {
      $logginglink = WP_HOME . "/wp-admin";
    }
  //  if (is_mobile() == 0) { echo 'LOGOUT' };
} elseif (!is_user_logged_in() && is_home()) {
  $logginglink = wp_login_url(WP_HOME);
} elseif (!is_user_logged_in() && is_archive()) {
  $current_url = WP_HOME . '/' . $_SERVER["REQUEST_URI"]; // get current url of the page.
  $logginglink = wp_login_url($current_url);
} elseif (!is_user_logged_in()) {
  $logginglink = wp_login_url(get_permalink());
}
?>
