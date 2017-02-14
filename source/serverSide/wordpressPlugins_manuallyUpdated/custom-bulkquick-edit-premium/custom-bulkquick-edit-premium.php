<?php
/**
 * Plugin Name: Custom Bulk/Quick Edit Premium
 * Plugin URI: http://aihr.us/products/custom-bulkquick-edit-premium-wordpress-plugin/
 * Description: Custom Bulk/Quick Edit Premium plugin extends Custom Bulk/Quick Edit by Aihrus with custom post types handling and other helpful features.
 * Version: 1.6.0
 * Author: Michael Cannon
 * Author URI: http://aihr.us/resume/
 * License: GPLv2 or later
 * Text Domain: custom-bulkquick-edit-premium
 * Domain Path: /languages
 */


/**
 * Copyright 2014 Michael Cannon (email: mc@aihr.us)
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CBQEP_BASE', plugin_basename( __FILE__ ) );
define( 'CBQEP_DIR', plugin_dir_path( __FILE__ ) );
define( 'CBQEP_DIR_INC', CBQEP_DIR . 'includes/' );
define( 'CBQEP_DIR_LIB', CBQEP_DIR_INC . 'libraries/' );
define( 'CBQEP_NAME', 'Custom Bulk/Quick Edit Premium' );
define( 'CBQEP_REQ_BASE', 'custom-bulkquick-edit/custom-bulkquick-edit.php' );
define( 'CBQEP_REQ_NAME', 'Custom Bulk/Quick Edit by Aihrus' );
define( 'CBQEP_VERSION', '1.6.0' );

require_once CBQEP_DIR_LIB . CBQEP_REQ_BASE;
require_once CBQEP_DIR_INC . 'requirements.php';

if ( ! cbqep_requirements_check() ) {
	return false;
}

require_once CBQEP_DIR_INC . 'class-custom-bulkquick-edit-premium.php';


add_action( 'plugins_loaded', 'custom_bulkquick_edit_premium_init' );


/**
 *
 *
 * @SuppressWarnings(PHPMD.LongVariable)
 * @SuppressWarnings(PHPMD.UnusedLocalVariable)
 */
function custom_bulkquick_edit_premium_init() {
	if ( ! is_admin() && ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) ) {
		return;
	}

	global $CBQEP_Licensing;
	if ( is_null( $CBQEP_Licensing ) ) {
		$CBQEP_Licensing = new Custom_Bulkquick_Edit_Premium_Licensing();
	}

	if ( ! class_exists( 'EDD_SL_Plugin_Updater' ) ) {
		require_once CBQEP_DIR_LIB . 'EDD_SL_Plugin_Updater.php';
	}

	$CBQEP_Updater = new EDD_SL_Plugin_Updater(
		$CBQEP_Licensing->store_url,
		__FILE__,
		array(
			'version' => CBQEP_VERSION,
			'license' => $CBQEP_Licensing->get_license(),
			'item_name' => CBQEP_NAME,
			'author' => $CBQEP_Licensing->author,
		)
	);

	if ( Custom_Bulkquick_Edit_Premium::version_check() ) {
		global $Custom_Bulkquick_Edit_Premium;
		if ( is_null( $Custom_Bulkquick_Edit_Premium ) ) {
			$Custom_Bulkquick_Edit_Premium = new Custom_Bulkquick_Edit_Premium();
		}

		do_action( 'cbqep_init' );
	}
}


register_activation_hook( __FILE__, array( 'Custom_Bulkquick_Edit_Premium', 'activation' ) );
register_deactivation_hook( __FILE__, array( 'Custom_Bulkquick_Edit_Premium', 'deactivation' ) );
register_uninstall_hook( __FILE__, array( 'Custom_Bulkquick_Edit_Premium', 'uninstall' ) );


?>
