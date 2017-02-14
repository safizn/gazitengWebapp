<?php
/*
	Copyright 2014 Michael Cannon (email: mc@aihr.us)

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as
	published by the Free Software Foundation.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

require_once AIHR_DIR_INC . 'class-aihrus-licensing.php';

if ( class_exists( 'Custom_Bulkquick_Edit_Premium_Licensing' ) ) {
	return;
}


class Custom_Bulkquick_Edit_Premium_Licensing extends Aihrus_Licensing{
	public function __construct() {
		parent::__construct( Custom_Bulkquick_Edit_Premium::SLUG, CBQEP_NAME );

		add_filter( 'cbqe_settings', array( $this, 'settings' ), 5 );
	}


	public function settings( $settings ) {
		$settings[ Custom_Bulkquick_Edit_Premium::SLUG . 'license_key' ] = array(
			'section' => 'premium',
			'title' => esc_html__( 'License Key', 'custom-bulkquick-edit-premium' ),
			'desc' => esc_html__( 'Required to enable premium plugin updating. Activation is automatic. Use `0` to deactivate.', 'custom-bulkquick-edit-premium' ),
			'validate' => 'cbqep_update_license',
			'widget' => 0,
		);

		return $settings;
	}


}


/**
 *
 *
 * @SuppressWarnings(PHPMD.Superglobals)
 */
function cbqep_update_license( $license ) {
	global $CBQEP_Licensing;

	if ( ! empty( $_REQUEST['option_page'] ) && Custom_Bulkquick_Edit_Settings::ID == $_REQUEST['option_page'] ) {
		$current_license = $CBQEP_Licensing->get_license();
		$valid_license   = $CBQEP_Licensing->valid_license();
		if ( ! $valid_license || $license != $current_license ) {
			$result        = $CBQEP_Licensing->update_license( $license );
			$valid_license = $CBQEP_Licensing->valid_license();
			if ( ! $valid_license ) {
				Custom_Bulkquick_Edit_Premium::set_notice( 'notice_license', HOUR_IN_SECONDS );
			}
		}

		return $result;
	}

	return $license;
}


?>
