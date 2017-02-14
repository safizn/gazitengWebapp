<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

 // Funtions for absolute paths and also urls. it combined two paths and removes extra slashs or adds if needed between two parts.
 function join_paths() { // using function get args will get all inserted variables in the call.
 		$paths = array();
 		foreach (func_get_args() as $arg) {
 				if ($arg !== '') { $paths[] = $arg; }
 		}
 		if(filter_var($paths[0], FILTER_VALIDATE_URL)) { // if a url
 			$protocol = strtolower(substr($paths[0],0,strpos( $paths[0],'/'))).'//'; // get https:// or http:// from first part.
 			$paths[0] = preg_replace("(^https?://)", "", $paths[0] );
 			return $protocol . preg_replace('#/+#','/',join('/', $paths)); // combine paths and add protocol
 		} else { // absolute path directory
 			return preg_replace('#/+#','/',join('/', $paths));
 		}
 }

 // Check SSL certificate inorder to choose the corrent protocol. It visits the website checks for ssl.
 //$stream = stream_context_create (array("ssl" => array("capture_peer_cert" => true)));
 //$url = 'https://'. $_SERVER['HTTP_HOST'];
 //$read = fopen($url, "rb", false, $stream);
 //$cont = stream_context_get_params($read);
 //$var = ($cont["options"]["ssl"]["peer_certificate"]);
 //$result = (!is_null($var)) ? true : false;
 // $protocol = ($result) ? 'https://' : 'http://';

 if($_SERVER['SERVER_PORT'] == '80') {
   $protocol = "http://";
 } else {
   $protocol = "https://";
 }
 $base_url = $protocol . $_SERVER['HTTP_HOST'];

// Debug for development OR hide errors for production.
// if(ENVIRONMENT == 'development') {
	define( 'WP_DEBUG', true );
	define( 'SCRIPT_DEBUG', true );
	define('WP_DEBUG_LOG', true );
// } else { // i.e. if produciton set or not.
	ini_set( 'display_errors', 0 );
	define('WP_DEBUG_DISPLAY', false );
//}
	error_reporting(E_ALL);

// define( 'DISALLOW_FILE_EDIT', true );
define( 'AUTOMATIC_UPDATER_DISABLED', false ); // Disable automatic updates
// add_filter( 'auto_update_plugin', '__return_true' );
// add_filter( 'auto_update_theme', '__return_true' );

define( 'FS_METHOD', 'direct' ); // SZN - If you add the following to your wp-config.php file it will force WordPress to use the 'direct' filesystem method:
define('WPLANG', '');
// define('WP_MEMORY_LIMIT', '256M');
// set_time_limit(500000);

// // check how many dots in the server http_host to find out if it is a subdomain or primary domain.
// $tmp = explode('.', $_SERVER['HTTP_HOST']);
// $subdomain = current($tmp);
//
// if( substr_count($_SERVER['HTTP_HOST'],'.') == 1 ) {
// 	require $_SERVER['DOCUMENT_ROOT'] . '../config/wordpress.php';
// } else {
// 	require  . ;
// }

// ** MySQL Database settings ** //
define('DB_USER', 'MyUserIn8D');
define('DB_PASSWORD', '<g.,qPE:9U>21#B](');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8'); /** Database Charset to use in creating database tables. */
define('DB_COLLATE', ''); /** The Database Collate type. Don't change this if in doubt. */

/**#@-*/
define('AUTOSAVE_INTERVAL', 600);
define('WP_POST_REVISIONS', 1);
define('WP_CRON_LOCK_TIMEOUT', 120);
// define( 'WP_AUTO_UPDATE_CORE', true );

require join_paths($_SERVER['DOCUMENT_ROOT'], '/../config/wordpress.php');

define('BASE_PATH', $_SERVER['DOCUMENT_ROOT']); // Document Root.
define('BASE_URL', $base_url);
if( !defined('ABSPATH') ) {
  define('ABSPATH', BASE_PATH . '/site/'); /** Absolute path to the WordPress directory (in which wordpress is installed). */
}

define('WP_HOME', BASE_URL); // This lets WordPress know that the core files are in the wordpress directory, but that the site is to be served at the root of the project directory.
define('WP_SITEURL', BASE_URL . '/site' );
define('WP_CONTENT_DIR', BASE_PATH . '/content' );
define('WP_CONTENT_URL', WP_HOME . '/content' );

// define('APP_CONFIG', './');
// !!!!!!! CHANGE NAMES FOR ROOT to DOCUMENT_ROOT in all files. //////////////////////////////////////
define('APP_ROOT', BASE_PATH);
define('APP_ENVIRONMENT', ENVIRONMENT);

if(!empty($_SERVER['HTTP_HOST'])) {
  require_once(ABSPATH . 'wp-settings.php'); /** Sets up WordPress vars and included files. */ // weird hack because otherwise wp-cli won't load when this wp-settings.php file is loaded
}

