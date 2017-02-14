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

require_once AIHR_DIR . 'aihrus-framework.php';


function cbqep_requirements_check( $force_check = false ) {
	if ( is_plugin_active( CBQEP_REQ_BASE ) ) {
		aihr_deactivate_plugin( CBQEP_REQ_BASE  );
		add_action( 'admin_notices', 'cbqep_notice_cbqe_deactivated' );
	}

	$check_okay = get_transient( 'cbqep_requirements_check' );
	if ( empty( $force_check ) && $check_okay !== false ) {
		return $check_okay;
	}

	$deactivate_reason = false;
	if ( ! aihr_check_php( CBQEP_BASE, CBQEP_NAME ) ) {
		$deactivate_reason = esc_html__( 'Old PHP version detected', 'custom-bulkquick-edit-premium' );
	}

	if ( ! aihr_check_wp( CBQEP_BASE, CBQEP_NAME ) ) {
		$deactivate_reason = esc_html__( 'Old WordPress version detected', 'custom-bulkquick-edit-premium' );
	}

	global $cbqe_activated;

	if ( empty( $cbqe_activated ) ) {
		$deactivate_reason = esc_html__( 'Internal Custom Bulk/Quick Edit by Aihrus not detected', 'custom-bulkquick-edit-premium' );
	}

	if ( ! empty( $deactivate_reason ) ) {
		aihr_deactivate_plugin( CBQEP_BASE, CBQEP_NAME, $deactivate_reason );
	}
	
	$check_okay = empty( $deactivate_reason );
	if ( $check_okay ) {
		delete_transient( 'cbqep_requirements_check' );
		set_transient( 'cbqep_requirements_check', $check_okay, HOUR_IN_SECONDS );
	}

	return $check_okay;
}


function cbqep_notice_aihrus() {
	$help_url  = esc_url( 'https://aihrus.zendesk.com/entries/35689458' );
	$help_link = sprintf( __( '<a href="%1$s">Update plugins</a>. <a href="%2$s">More information</a>.', 'custom-bulkquick-edit-premium' ), self_admin_url( 'update-core.php' ), $help_url );

	$text = sprintf( esc_html__( 'Plugin "%1$s" has been deactivated as it requires a current Aihrus Framework. Once corrected, "%1$s" can be activated. %2$s', 'custom-bulkquick-edit-premium' ), CBQEP_NAME, $help_link );

	aihr_notice_error( $text );
}


function cbqep_notice_cbqe_deactivated() {
	$text = sprintf( esc_html__( 'Plugin "%1$s" has been deactivated as it no longer required by "%2$s".', 'custom-bulkquick-edit-premium' ), CBQEP_REQ_NAME, CBQEP_NAME );

	aihr_notice_updated( $text );
}

?>
