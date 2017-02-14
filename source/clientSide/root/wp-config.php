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

require join_paths($_SERVER['DOCUMENT_ROOT'], '/../wordpressConfiguration/wordpressConfiguration.php');

