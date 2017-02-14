<?php
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

require_once AIHR_DIR_INC . 'class-aihrus-common.php';
require_once CBQEP_DIR_INC . 'class-custom-bulkquick-edit-premium-licensing.php';

if ( class_exists( 'Custom_Bulkquick_Edit_Premium' ) ) {
	return;
}


class Custom_Bulkquick_Edit_Premium extends Aihrus_Common {
	const BASE    = CBQEP_BASE;
	const ID      = 'custom-bulkquick-edit-premium';
	const SLUG    = 'cbqep_';
	const VERSION = CBQEP_VERSION;

	const KEY_WOOCOMMERCE = '_woocommerce_';

	public static $class = __CLASS__;
	public static $license;
	public static $notice_key;
	public static $parts_woocommerce;
	public static $plugin_assets;
	public static $time_not_set = -1;
	public static $time_units   = array( 'mm', 'jj', 'aa', 'hh', 'mn', 'ss' );

	public function __construct() {
		parent::__construct();

		self::$plugin_assets = plugins_url( '/assets/', dirname( __FILE__ ) );
		self::$plugin_assets = self::strip_protocol( self::$plugin_assets );

		add_action( 'admin_init', array( __CLASS__, 'admin_init' ) );
		add_action( 'init', array( __CLASS__, 'init' ) );

		if ( ! Custom_Bulkquick_Edit::do_load() ) {
			return;
		}

		add_action( 'admin_menu', array( __CLASS__, 'admin_menu' ) );
		self::load_parts_woocommerce();
		self::load_options();
	}


	public static function admin_init() {
		if ( ! self::version_check() )
			return;

		global $CBQEP_Licensing;
		if ( ! $CBQEP_Licensing->valid_license() ) {
			self::set_notice( 'notice_license', DAY_IN_SECONDS );
		}

		add_action( 'cbqe_save_post', array( __CLASS__, 'save_post_keyed' ) );
		add_filter( 'cbqe_check_field_type', array( __CLASS__, 'check_field_type' ), 10, 2 );
		add_filter( 'cbqe_columns', array( __CLASS__, 'columns' ) );
		add_filter( 'cbqe_configuration_default', array( __CLASS__, 'configuration_default' ), 10, 3 );
		add_filter( 'cbqe_configuration_default', array( __CLASS__, 'configuration_keyed' ), 10, 3 );
		add_filter( 'cbqe_get_post_types_args', array( __CLASS__, 'get_post_types_args' ) );
		add_filter( 'cbqe_ignore_quick_edit', array( __CLASS__, 'ignore_quick_edit' ) );
		add_filter( 'cbqe_manage_posts_custom_column_field_type', array( __CLASS__, 'manage_posts_custom_column_field_type' ), 10, 4 );
		add_filter( 'cbqe_manage_posts_custom_column_field_type', array( __CLASS__, 'manage_posts_custom_column_field_type_keyed' ), 10, 4 );
		add_filter( 'cbqe_post_save_fields', array( __CLASS__, 'post_save_fields' ) );
		add_filter( 'cbqe_post_save_value', array( __CLASS__, 'post_save_value' ), 10, 3 );
		add_filter( 'cbqe_quick_edit_custom_box_field', array( __CLASS__, 'quick_edit_custom_box_field' ), 10, 5 );
		add_filter( 'cbqe_quick_edit_custom_box_field', array( __CLASS__, 'quick_edit_custom_box_field_keyed' ), 10, 5 );
		add_filter( 'cbqe_quick_scripts_bulk', array( __CLASS__, 'scripts_bulk' ), 10, 6 );
		add_filter( 'cbqe_quick_scripts_extra', array( __CLASS__, 'scripts_extra' ), 10, 6 );
		add_filter( 'cbqe_quick_scripts_quick', array( __CLASS__, 'scripts_quick' ), 10, 6 );
		add_filter( 'cbqe_settings_as_types', array( __CLASS__, 'settings_as_types' ) );
		add_filter( 'cbqe_settings_config_desc', array( __CLASS__, 'settings_config_desc' ), 10, 3 );
		add_filter( 'cbqe_settings_config_script', array( __CLASS__, 'config_script' ), 10, 7 );
		add_filter( 'plugin_action_links', array( __CLASS__, 'plugin_action_links' ), 10, 2 );
		add_filter( 'pre_update_option_active_plugins', array( __CLASS__, 'pre_update_option_active_plugins' ), 10, 2 );
	}


	public static function init() {
		load_plugin_textdomain( self::ID, false, 'custom-bulkquick-edit-premium/languages' );
	}


	public static function admin_menu() {
		add_action( 'admin_print_scripts', array( __CLASS__, 'scripts' ) );
		add_action( 'admin_print_styles', array( __CLASS__, 'styles' ) );
	}


	public static function load_options() {
		add_filter( 'cbqe_sections', array( __CLASS__, 'sections' ) );
		add_filter( 'cbqe_settings', array( __CLASS__, 'settings' ) );
	}


	public static function sections( $sections ) {
		$sections[ 'premium' ] = esc_html__( 'Premium', 'custom-bulkquick-edit-premium' );

		return $sections;
	}


	public static function settings( $settings ) {
		$desc_date    = esc_html__( 'Enable bulk editing of %1$s\' date.', 'custom-bulkquick-edit-premium' );
		$title_date   = esc_html__( 'Date', 'custom-bulkquick-edit-premium' );
		$title_enable = esc_html__( 'Enable "%s"?', 'custom-bulkquick-edit-premium' );

		foreach ( Custom_Bulkquick_Edit::$post_types as $post_type => $label ) {
			$settings[ $post_type . Custom_Bulkquick_Edit_Settings::ENABLE . 'post_date' ] = array(
				'section' => $post_type,
				'title' => sprintf( $title_enable, $title_date ),
				'label' => $title_date,
				'desc' => sprintf( $desc_date, $label ),
				'type' => 'checkbox',
			);
		}

		$settings['disable_donate'] = array(
			'section' => 'premium',
			'title' => esc_html__( 'Disable Donate Text?', 'custom-bulkquick-edit-premium' ),
			'desc' => esc_html__( 'Remove "If you like…" text with the donate and premium purchase links from the settings screen.', 'custom-bulkquick-edit-premium' ),
			'type' => 'checkbox',
		);

		$desc_conf  = esc_html__( 'Configuration values for %s. In general, do NOT edit these.', 'custom-bulkquick-edit-premium' );
		$title_conf = esc_html__( '%s Configuration', 'custom-bulkquick-edit-premium' );

		// WooCommerce
		$post_type = 'product';
		if ( in_array( $post_type, Custom_Bulkquick_Edit::$post_types_keys ) ) {
			$post_key = $post_type . Custom_Bulkquick_Edit_Settings::ENABLE . self::KEY_WOOCOMMERCE;
			foreach ( self::$parts_woocommerce as $field => $item ) {
				$key   = $post_key . $field;
				$title = $item['title'];
				$type  = isset( $item['type'] ) ? $item['type'] : 'select';

				$settings[ $key ] = array(
					'section' => $post_type,
					'title' => $title,
					'label' => $title,
					'type' => 'select',
					'choices' => array(
						'' => esc_html__( 'Hide', 'custom-bulkquick-edit-premium' ),
						self::KEY_WOOCOMMERCE . $type => esc_html__( 'Show', 'custom-bulkquick-edit-premium' ),
					),
				);

				$settings[ $key . Custom_Bulkquick_Edit_Settings::CONFIG ] = array(
					'section' => $post_type,
					'title' => sprintf( $title_conf, $title ),
					'desc' => sprintf( $desc_conf, $title ),
					'type' => 'textarea',
					'validate' => 'trim',
				);
			}
		}

		return $settings;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function scripts_bulk( $scripts_bulk, $post_type, $column_name, $field_name, $field_type, $field_name_var ) {
		switch ( $field_type ) {
			case 'color':
				$scripts_bulk[ $column_name ] = "'{$field_name}': bulk_row.find( 'input[name={$field_name}]' ).val()";
				break;

			case 'date':
			case 'datetime':
				$scripts_bulk[ $column_name ] = "'{$field_name}': bulk_row.find( 'input[name={$field_name}]' ).val()";
				break;
		}

		return $scripts_bulk;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function scripts_extra( $scripts_extra, $post_type, $column_name, $field_name, $field_type, $field_name_var ) {
		switch ( $field_type ) {
			case 'color':
				$js = self::get_js_colorpicker( $post_type, $field_name, 'bulk' );

				$scripts_extra[ $column_name ] = $js;
				break;

			case 'date':
				$js = self::get_js_datepicker( $post_type, $field_name, 'bulk' );

				$scripts_extra[ $column_name ] = $js;
				break;

			case 'datetime':
				$js = self::get_js_datetimepicker( $post_type, $field_name, 'bulk' );

				$scripts_extra[ $column_name ] = $js;
				break;
		}

		return $scripts_extra;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function scripts_quick( $scripts_quick, $post_type, $column_name, $field_name, $field_type, $field_name_var ) {
		switch ( $field_type ) {
			case 'color':
				$js = self::get_js_colorpicker( $post_type, $field_name );

				$scripts_quick[ $column_name . '1' ] = "var {$field_name_var} = jQuery( '.column-{$column_name}', post_row ).text();";
				$scripts_quick[ $column_name . '2' ] = "jQuery( ':input[name={$field_name}]', edit_row ).val( {$field_name_var} );";
				$scripts_quick[ $column_name . '3' ] = $js;
				break;

			case 'date':
				$js = self::get_js_datepicker( $post_type, $field_name );

				$scripts_quick[ $column_name . '1' ] = "var {$field_name_var} = jQuery( '.column-{$column_name}', post_row ).text();";
				$scripts_quick[ $column_name . '2' ] = "jQuery( ':input[name={$field_name}]', edit_row ).val( {$field_name_var} );";
				$scripts_quick[ $column_name . '3' ] = $js;
				break;

			case 'datetime':
				$js = self::get_js_datetimepicker( $post_type, $field_name );

				$scripts_quick[ $column_name . '1' ] = "var {$field_name_var} = jQuery( '.column-{$column_name}', post_row ).text();";
				$scripts_quick[ $column_name . '2' ] = "jQuery( ':input[name={$field_name}]', edit_row ).val( {$field_name_var} );";
				$scripts_quick[ $column_name . '3' ] = $js;
				break;
		}

		return $scripts_quick;
	}


	public static function get_js_datepicker( $post_type, $field_name, $mode = 'quick' ) {
		$key         = Custom_Bulkquick_Edit::get_field_key( $post_type, $field_name );
		$key        .= Custom_Bulkquick_Edit_Settings::CONFIG;
		$date_format = cbqe_get_option( $key );

		if ( 'quick' == $mode  )
			$js = "jQuery( '.datepicker', edit_row ).datepicker({ dateFormat: '{$date_format}' });";
		else
			$js = "jQuery( '#bulk-edit .datepicker' ).datepicker({ dateFormat: '{$date_format}' });";

		return $js;
	}


	public static function get_js_datetimepicker( $post_type, $field_name, $mode = 'quick' ) {
		$key         = Custom_Bulkquick_Edit::get_field_key( $post_type, $field_name );
		$key        .= Custom_Bulkquick_Edit_Settings::CONFIG;
		$date_format = cbqe_get_option( $key );
		$week_start  = get_option( 'start_of_week' );

		if ( 'quick' == $mode  ) {
			$js = "jQuery( '.datetimepicker', edit_row ).datetimepicker({
				dateFormat: '{$date_format}',
				firstDay: '{$week_start}',
			});";
		} else {
			$js = "jQuery( '#bulk-edit .datetimepicker' ).datetimepicker({
				dateFormat: '{$date_format}',
				firstDay: '{$week_start}',
			});";
		}

		return $js;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function get_js_colorpicker( $post_type, $field_name, $mode = 'quick' ) {
		if ( 'quick' == $mode  )
			$js = "jQuery( '.colorpicker', edit_row ).wpColorPicker();";
		else
			$js = "jQuery( '#bulk-edit .colorpicker' ).wpColorPicker();";

		return $js;
	}


	public static function scripts() {
		wp_register_script( 'jquery-ui-timepicker-addon', self::$plugin_assets . 'js/jquery-ui-timepicker-addon.js', array( 'jquery', 'jquery-ui-datepicker' ), '1.4.3', true );

		wp_enqueue_script( 'jquery-ui-timepicker-addon' );
		wp_enqueue_script( 'wp-color-picker' );
	}


	public static function styles() {
		wp_enqueue_style( 'jquery-style', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css' );
		wp_enqueue_style( 'wp-color-picker' );
	}


	public static function plugin_action_links( $links, $file ) {
		if ( self::BASE == $file )
			array_unshift( $links, Custom_Bulkquick_Edit::$settings_link );

		return $links;
	}


	public static function version_check() {
		$valid_version = true;
		if ( ! $valid_version ) {
			deactivate_plugins( self::BASE );
			self::check_notices();
		}

		return $valid_version;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function quick_edit_custom_box_field( $input, $field_type, $field_name, $options, $bulk_mode ) {
		$column_name    = str_replace( Custom_Bulkquick_Edit::SLUG, '', $field_name );
		$field_name_var = str_replace( '-', '_', $field_name );

		$result = $input;
		switch ( $field_type ) {
			case 'color':
				$result = '<input type="text" class="colorpicker" name="' . $field_name . '" autocomplete="off" />';
				break;

			case 'date':
				$result = '<input type="text" class="datepicker" name="' . $field_name . '" autocomplete="off" />';
				break;

			case 'datetime':
				$result = '<input type="text" class="datetimepicker" name="' . $field_name . '" autocomplete="off" />';
				break;

			case 'float':
			case 'int':
				$result = Custom_Bulkquick_Edit::custom_box_input( $column_name, $field_name, $field_name_var );
				break;

			case 'image':
				break;

			case 'multiple':
				$result = Custom_Bulkquick_Edit::custom_box_select_multiple( $column_name, $field_name, $field_name_var, $options, $bulk_mode );
				break;

			case 'post_date':
				$result = self::custom_datetime( $column_name, $field_name, $field_name_var );
				break;

			case 'user':
				$users = get_users();

				$options = array();
				foreach ( $users as $user )
					$options[ $user->ID ] = $user->display_name;

				$result = self::custom_box_select_array( $column_name, $field_name, $field_name_var, $options, $bulk_mode );
				break;
		}

		return $result;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function manage_posts_custom_column_field_type( $current, $field_type, $column, $post_id ) {
		global $post;

		$result = $current;
		switch ( $field_type ) {
			case 'color':
				if ( ! empty( $current ) ) {
					$result = '<span style="background-color: ' . $current . '; padding: 2px;">' . $current . '</span>';
				} else
					$result = $current;
				break;

			case 'date':
				$result = date( get_option( 'date_format' ), strtotime( $current ) );
				break;

			case 'datetime':
				$result = date( get_option( 'date_format' ) . ' H:i', strtotime( $current ) );
				break;

			case 'int':
				$result = intval( $current );
				if ( is_numeric( $result ) && 0 == $result && 1 == strlen( $result ) ) {
					$result = '&Oslash;';
				}
				break;

			case 'float':
				$result = floatval( $current );
				if ( is_numeric( $result ) && 0 == $result && 1 == strlen( $result ) ) {
					$result = '&Oslash;';
				}
				break;

			case 'image':
				if ( has_post_thumbnail( $post_id ) )
					$result = get_the_post_thumbnail( $post_id, 'thumbnail' );
				break;

			case 'multiple':
				$details = Custom_Bulkquick_Edit::get_field_config( $post->post_type, $column );
				$options = explode( "\n", $details );

				$result = Custom_Bulkquick_Edit::column_select( $column, $current, $options, $field_type );
				break;

			case 'post_date':
				if ( 'post_date' != $column ) {
					if ( empty( $current ) ) {
						$t_time = '';
						$h_time = '';
					} else {
						$time = strtotime( $current );

						$t_time = date( __( 'Y/m/d g:i:s A', 'custom-bulkquick-edit-premium' ), $time );
						$h_time = date( __( 'Y/m/d', 'custom-bulkquick-edit-premium' ), $time );
					}
				} else {
					if ( '0000-00-00 00:00:00' == $post->post_date ) {
						$t_time = '';
						$h_time = '';
					} else {
						$t_time = get_the_time( __( 'Y/m/d g:i:s A', 'custom-bulkquick-edit-premium' ) );
						$m_time = $post->post_date;
						$h_time = mysql2date( __( 'Y/m/d', 'custom-bulkquick-edit-premium' ), $m_time );
					}
				}

				$result = '<abbr title="' . esc_attr__( $t_time , 'custom-bulkquick-edit-premium') . '">' . apply_filters( 'post_date_column_time', $h_time, $post, $column, '' ) . '</abbr>';
				break;

			case 'user':
				$userdata = get_userdata( $result );
				if ( is_object( $userdata ) ) {
					$result  = '<select name="' . $column . '" disabled="disabled">';
					$result .= '<option value="' . $userdata->ID . '" selected="selected">' . esc_html( $userdata->display_name ) . '</option>';
					$result .= '</select>';
				}
				break;
		}

		return $result;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function settings_config_desc( $desc_conf, $post_type, $field ) {
		$text = __( '<a href="%s">Date formats</a>.', 'custom-bulkquick-edit-premium' );
		$desc = sprintf( $text, esc_url( 'http://api.jqueryui.com/datepicker/#utility-formatDate' ) );

		$desc_conf .= ' ' . $desc;

		return $desc_conf;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function configuration_default( $default, $id, $type ) {
		switch ( $type ) {
			case 'date':
			case 'datetime':
				$default = 'MM d, yy';
				break;

			case 'multiple';
				$default  = '';
				$default .= esc_html__( 'Yes', 'custom-bulkquick-edit-premium' );
				$default .= "\n";
				$default .= 'no|' . esc_html__( 'No', 'custom-bulkquick-edit-premium' );
				$default .= "\n";
				$default .= 'where-beef|' . esc_html__( 'Where\'s the beef?', 'custom-bulkquick-edit-premium' );
				break;
		}

		return $default;
	}


	public static function settings_as_types( $as_types ) {
		$as_types['color']    = esc_html__( 'As color', 'custom-bulkquick-edit-premium' );
		$as_types['date']     = esc_html__( 'As date', 'custom-bulkquick-edit-premium' );
		$as_types['datetime'] = esc_html__( 'As datetime', 'custom-bulkquick-edit-premium' );
		$as_types['float']    = esc_html__( 'As float', 'custom-bulkquick-edit-premium' );
		$as_types['int']      = esc_html__( 'As integer', 'custom-bulkquick-edit-premium' );
		$as_types['multiple'] = esc_html__( 'As multiple select', 'custom-bulkquick-edit-premium' );
		$as_types['user']     = esc_html__( 'As user', 'custom-bulkquick-edit-premium' );
		// $as_types['image'] = esc_html__( 'As image', 'custom-bulkquick-edit-premium' );

		return $as_types;
	}


	public static function get_post_types_args( $args ) {
		unset( $args[ '_builtin' ] );

		return $args;
	}


	public static function activation() {
		if ( ! current_user_can( 'activate_plugins' ) )
			return;
	}


	public static function deactivation() {
		if ( ! current_user_can( 'activate_plugins' ) )
			return;
	}


	public static function uninstall() {
		if ( ! current_user_can( 'activate_plugins' ) )
			return;
		
		require_once CBQEP_DIR_INC . 'class-custom-bulkquick-edit-premium-licensing.php';

		$CBQEP_Licensing = new Custom_Bulkquick_Edit_Premium_Licensing();
		$CBQEP_Licensing->deactivate_license();
	}


	public static function columns( $columns ) {
		return $columns;
	}


	public static function custom_box_select_array( $column_name, $field_name, $field_name_var, $options, $bulk_mode = false, $multiple = false ) {
		$result = '<select name="' . $field_name;
		if ( $multiple ) {
			if ( ! $bulk_mode )
				$result .= '[]';

			$result .= '" multiple="multiple';
		}

		$result .= '">';

		if ( $bulk_mode && ! $multiple )
			$result .= '<option value="">' . esc_html__( '&mdash; No Change &mdash;', 'custom-bulkquick-edit-premium' ) . '</option>';

		$result .= '<option value="' . Custom_Bulkquick_Edit_Settings::RESET . '">' . esc_html__( '&mdash; Unset &mdash;', 'custom-bulkquick-edit-premium' ) . '</option>';

		foreach ( $options as $key => $value )
			$result .= '<option value="' . $key . '">' . $value . '</option>';

		$result .= '</select>';

		if ( ! $bulk_mode ) {
			Custom_Bulkquick_Edit::$scripts_quick[ $column_name . '1' ] = "var {$field_name_var} = jQuery( '.column-{$column_name} option', post_row ).filter(':selected').val();";
			Custom_Bulkquick_Edit::$scripts_quick[ $column_name . '2' ] = "jQuery( ':input[name={$field_name}] option[value=' + {$field_name_var} + ']', edit_row ).prop('selected', true);";
		} else
			Custom_Bulkquick_Edit::$scripts_bulk[ $column_name ] = "'{$field_name}': bulk_row.find( 'select[name={$field_name}]' ).val()";

		return $result;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function config_script( $script, $args, $id, $field, $f, $c, $hide ) {
		$replace = $hide . " || 'user' == val || 'int' == val || 'float' == val || 'post_date' == val || 'color' == val || 'post_thumbnail' == val";
		$script  = str_replace( $hide, $replace, $script );

		return $script;
	}


	public static function notice_license() {
		$post_type     = null;
		$settings_id   = Custom_Bulkquick_Edit_Settings::ID;
		$required_name = CBQEP_REQ_NAME;
		$purchase_url  = 'https://aihr.us/products/custom-bulkquick-edit-premium-wordpress-plugin/';
		$item_name     = CBQEP_NAME;

		aihr_notice_license( $post_type, $settings_id, $required_name, $purchase_url, $item_name );
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function custom_datetime( $column_name, $field_name, $field_name_var ) {
		ob_start();
		self::touch_time();
		$content = ob_get_contents();
		ob_end_clean();

		$time_not_set = self::$time_not_set;

		Custom_Bulkquick_Edit::$scripts_bulk[ $column_name ] = "'{$field_name}': {$time_not_set}";

		foreach ( self::$time_units as $timeunit ) {
			$new_field_name = $field_name . '-' . $timeunit;

			$find    = 'name="' . $timeunit . '"';
			$replace = 'name="' . $new_field_name . '"';
			$content = str_replace( $find, $replace, $content );

			$input = 'input';
			if ( 'mm' == $timeunit )
				$input = 'select';

			Custom_Bulkquick_Edit::$scripts_bulk[ $column_name . $timeunit ] = "'{$column_name}_{$timeunit}': bulk_row.find( '{$input}[name={$new_field_name}]' ).val()";
		}

		return $content;
	}


	public static function check_field_type( $field_type, $column_name ) {
		switch ( $column_name ) {
			case 'post_date':
				$field_type = 'post_date';
				break;

			case 'post_thumbnail':
				$field_type = 'image';
				break;
		}

		return $field_type;
	}


	public static function ignore_quick_edit( $ignore_quick_edit ) {
		$ignore_quick_edit[] = 'post_date';

		return $ignore_quick_edit;
	}


	public static function post_save_fields( $post_save_fields ) {
		$post_save_fields[] = 'post_date';

		return $post_save_fields;
	}


	public static function post_save_value( $value, $post_id, $field_name ) {
		switch ( $field_name ) {
			case 'post_date':
				if ( self::$time_not_set != $value )
					return null;

				$value = self::get_date( $field_name );
				if ( ! is_null( $value ) ) {
					remove_action( 'save_post', array( 'Custom_Bulkquick_Edit', 'save_post' ), 25 );

					$gmt  = get_gmt_from_date( $value );
					$data = array(
						'ID' => $post_id,
						'post_date_gmt' => $gmt,
					);
					wp_update_post( $data );
				}
				break;

			case 'post_thumbnail':
				return null;
				break;
		}

		return $value;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.Superglobals)
	 */
	public static function get_date( $field_name ) {
		foreach ( self::$time_units as $timeunit ) {
			$key = $field_name . '_' . $timeunit;
			if ( isset( $_POST[ $key ] ) ) {
				if ( is_numeric( $_POST[ $key ] ) ) {
					$$timeunit = intval( $_POST[ $key ] );
					unset( $_POST[ $key ] );
				} elseif ( 'jj' == $timeunit ) {
					return null;
				}
			} else {
				return null;
			}
		}

		$aa = ( $aa <= 0 ) ? date( 'Y' ) : $aa;
		$mm = ( $mm <= 0 ) ? date( 'n' ) : $mm;
		$jj = ( $jj > 31 ) ? 31 : $jj;
		$jj = ( $jj <= 0 ) ? date( 'j' ) : $jj;
		$hh = ( $hh > 23 ) ? $hh -24 : $hh;
		$mn = ( $mn > 59 ) ? $mn -60 : $mn;
		$ss = ( ! isset( $ss ) ) ? 0 : $ss;
		$ss = ( $ss > 59 ) ? $ss -60 : $ss;

		$date       = sprintf( '%04d-%02d-%02d %02d:%02d:%02d', $aa, $mm, $jj, $hh, $mn, $ss );
		$valid_date = wp_checkdate( $mm, $jj, $aa, $date );
		if ( ! $valid_date ) {
			return null;
		}

		return $date;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function pre_update_option_active_plugins( $plugins, $old_value ) {
		if ( ! is_array( $plugins ) )
			return $plugins;

		$index = array_search( self::BASE, $plugins );
		if ( false !== $index && ! empty( $index ) ) {
			unset( $plugins[ $index ] );
			array_unshift( $plugins, self::BASE );
		}

		return $plugins;
	}


	/**
	 * Print out HTML form date elements for editing post publish date.
	 *
	 * @ref wp-admin/includes/template.php `touch_time`
	 */
	public static function touch_time() {
		global $wp_locale;

		$jj = '';
		$mm = '';
		$aa = '';
		$hh = '';
		$mn = '';
		$ss = '';

		$month = "<select name=\"mm\">\n";
		for ( $i = 1; $i < 13; $i = $i +1 ) {
			$monthnum = zeroise($i, 2);
			$month   .= "\t\t\t" . '<option value="' . $monthnum . '" ' . selected( $monthnum, $mm, false ) . '>';
			/* translators: 1: month number (01, 02, etc.), 2: month abbreviation */
			$month .= sprintf( __( '%1$s-%2$s', 'custom-bulkquick-edit-premium' ), $monthnum, $wp_locale->get_month_abbrev( $wp_locale->get_month( $i ) ) ) . "</option>\n";
		}

		$month .= '</select>';

		$day    = '<input type="text" name="jj" value="' . $jj . '" size="2" maxlength="2" autocomplete="off" placeholder="DD" />';
		$year   = '<input type="text" name="aa" value="' . $aa . '" size="4" maxlength="4" autocomplete="off" placeholder="YYYY" />';
		$hour   = '<input type="text" name="hh" value="' . $hh . '" size="2" maxlength="2" autocomplete="off" placeholder="HH" />';
		$minute = '<input type="text" name="mn" value="' . $mn . '" size="2" maxlength="2" autocomplete="off" placeholder="MM" />';

		echo '<div class="timestamp-wrap">';
		/* translators: 1: month, 2: day, 3: year, 4: hour, 5: minute */
		printf( __( '%1$s %2$s, %3$s @ %4$s : %5$s', 'custom-bulkquick-edit-premium' ), $month, $day, $year, $hour, $minute );

		echo '</div><input type="hidden" id="ss" name="ss" value="' . $ss . '" />';

		return;
	}


	public static function load_parts_woocommerce() {
		$product_type  = apply_filters( 'default_product_type', 'simple' );
		$product_types = array(
			'simple' => __( 'Simple product', 'custom-bulkquick-edit-premium' ),
			'grouped' => __( 'Grouped product', 'custom-bulkquick-edit-premium' ),
			'external' => __( 'External/Affiliate product', 'custom-bulkquick-edit-premium' ),
			'variable' => __( 'Variable product', 'custom-bulkquick-edit-premium' )
		);

		$product_type_selector = apply_filters( 'product_type_selector', $product_types, $product_type );

		self::$parts_woocommerce = array(
			'product-type' => array(
				'title' => __( 'Product Type', 'custom-bulkquick-edit-premium' ),
				'type' => 'select',
				'options' => $product_type_selector,
			),
		);
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function configuration_keyed( $default, $id, $type ) {
		$field   = self::get_field_name( $id );
		$options = null;
		if ( false !== strstr( $type, self::KEY_WOOCOMMERCE ) ) {
			$options = ! empty( self::$parts_woocommerce[ $field ]['options'] ) ? self::$parts_woocommerce[ $field ]['options'] : null;
		}

		if ( is_null( $options ) ) {
			return $default;
		}

		if ( is_array( $options ) ) {
			$parts = array();
			foreach ( $options as $key => $value ) {
				$parts[] = $key . '|' . $value;
			}

			$default = implode( "\n", $parts );
		}

		return $default;
	}


	public static function get_field_name( $id ) {
		$field = preg_replace( '#^.*' . self::KEY_WOOCOMMERCE . '#', '', $id );
		$field = str_replace( Custom_Bulkquick_Edit_Settings::CONFIG, '', $field );

		return $field;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function quick_edit_custom_box_field_keyed( $input, $field_type, $field_name, $options, $bulk_mode ) {
		$column_name    = str_replace( Custom_Bulkquick_Edit::SLUG, '', $field_name );
		$field_name_var = str_replace( '-', '_', $field_name );

		$result = $input;
		switch ( $field_type ) {
			case self::KEY_WOOCOMMERCE . 'multiple':
				$result = Custom_Bulkquick_Edit::custom_box_select_multiple( $column_name, $field_name, $field_name_var, $options, $bulk_mode );
				break;

			case self::KEY_WOOCOMMERCE . 'radio':
				if ( ! $bulk_mode )
					$result = Custom_Bulkquick_Edit::custom_box_radio( $column_name, $field_name, $field_name_var, $options );
				else
					$result = Custom_Bulkquick_Edit::custom_box_select( $column_name, $field_name, $field_name_var, $options, $bulk_mode );
				break;

			case self::KEY_WOOCOMMERCE . 'select':
				$result = Custom_Bulkquick_Edit::custom_box_select( $column_name, $field_name, $field_name_var, $options, $bulk_mode );
				break;

			case self::KEY_WOOCOMMERCE . 'text':
				$result = Custom_Bulkquick_Edit::custom_box_input( $column_name, $field_name, $field_name_var );
				break;

			case self::KEY_WOOCOMMERCE . 'textarea':
				$result = Custom_Bulkquick_Edit::custom_box_textarea( $column_name, $field_name, $field_name_var );
				break;
		}

		return $result;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public static function manage_posts_custom_column_field_type_keyed( $current, $field_type, $column, $post_id ) {
		global $post;

		$details = Custom_Bulkquick_Edit::get_field_config( $post->post_type, $column );
		$options = explode( "\n", $details );

		$type = str_replace( self::KEY_WOOCOMMERCE, '', $field_type );

		$result = $current;
		switch ( $field_type ) {
			case self::KEY_WOOCOMMERCE . 'multiple':
			case self::KEY_WOOCOMMERCE . 'select':
				if ( self::KEY_WOOCOMMERCE . 'product-type' == $column ) {
					if ( $terms = wp_get_object_terms( $post_id, 'product_type' ) ) {
						$current = sanitize_title( current( $terms )->name );
					} else {
						$current = apply_filters( 'default_product_type', 'simple' );
					}
				} else {
					$current = explode( ',', $current );
				}

				$result  = Custom_Bulkquick_Edit::column_select( $column, $current, $options, $type );
				break;
				break;

			case self::KEY_WOOCOMMERCE . 'radio':
				$result = Custom_Bulkquick_Edit::column_checkbox_radio( $column, $current, $options, $type );
				break;

			case self::KEY_WOOCOMMERCE . 'text':
			case self::KEY_WOOCOMMERCE . 'textarea':
				$result = $current;
				break;
		}

		return $result;
	}


	/**
	 *
	 *
	 * @SuppressWarnings(PHPMD.Superglobals)
	 */
	public static function save_post_keyed( $post_id ) {
		$product_type = 'product-type';
		foreach ( $_POST as $field => $value ) {
			if ( false === strpos( $field, Custom_Bulkquick_Edit::SLUG . self::KEY_WOOCOMMERCE . $product_type ) ) {
				continue;
			}

			wp_set_object_terms( $post_id, $value, 'product_type' );
		}
	}
}

?>
