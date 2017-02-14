# CHANGELOG Custom Bulk/Quick Edit Premium

## master

## 1.6.0
* Add refund text to readme
* Require Custom Bulk/Quick Edit 1.5.1
* RESOLVES michael-cannon/custom-bulkquick-edit#31 Support WooCommerce product type
* RESOLVES michael-cannon/custom-bulkquick-edit#37 Support attributes (and also customs)
* RESOLVES michael-cannon/custom-bulkquick-edit#39 Custom field value of "0" isn't displayed in the columns
* Revise FAQ section
* Revise license handling
* Revise readme description placement
* Revise readme layout
* Revise touch_time handling
* Update Aihrus integration
* Update copyright
* Update EDD_SL_Plugin_Updater 1.1

## 1.5.0
* Alters option `active_plugins` so that this plugin is among first loaded.
* Check cbqe_activated
* Check for definitions before defining
* Create DIR_INC includes
* Custom Bulk/Quick Edit free no longer required
* Replace plugins_url with self::$plugin_assets
* RESOLVE michael-cannon/custom-bulkquick-edit#30 Display color as its color in edit screen column
* RESOLVE Plugin activation not working
* Revise DIR_LIB libraries
* Settings plugin_path to plugin_assets
* Specify a “Text Domain” and “Domain Path”
* Update file structure
* Use Codeship.io than Travis CI
* Use YouTube https
* Verbiage tweaks

## 1.4.1
* BUGFIX Inactive REQ_BASE due to old Aihrus Framework
* Revise weekly license checking
* Use Aihrus Framework 1.0.1

## 1.4.0
* BUGFIX No notices on deactivation
* Change date format default to MM d, yy
* Convert TODO to https://github.com/michael-cannon/custom-bulkquick-edit-premium/issues
* Implement PHP version checking
* Implement WordPress version checking
* RESOLVE #18 On delete error
* RESOLVE #19 On activate error - no cbqe free installed
* RESOLVE michael-cannon/custom-bulkquick-edit#25 Color selector
* RESOLVE michael-cannon/custom-bulkquick-edit#29 Enable date/time editing
* Readme installation
* Revise readme structure
* Tested up to 3.9.0
* Use aihr_check_aihrus_framework

## 1.3.2
* Update Aihrus framework

## 1.3.1
* Add PHP 5.3+ required notice
* Check for PHP 5.3
* Move Edit Flow components to own plugin

## 1.3.0
* $this to __CLASS__
* Add CBQE_PLUGIN_DIR path
* Add LICENSE
* Add aihrus framework
* Adjust to work with [WordPress SEO by Yoast](http://wordpress.org/support/topic/wp-seo-by-yoast-1) add on
* Allow plugin usage without license
* BUGFIX Quick edit panel doesn't show
* BUGFIX WordPress SEO Sitemap Priority in Quick Edit not recalling value
* Break WordPress SEO into own Premium plugin
* Delete notices on deactivation
* Disable upgrading when license in invalid
* Don't load WordPress SEO options when not needed
* Enable activation and version checking
* Enable bulk editing of post_date
* Enable premium licensing
* Enable upgrading when plugin isn't activated
* Include settings sooner
* Remove API's source code link
* Remove donation buttons from plugins page
* Revise headers
* Update TODO
* Update headers
* Update notice formats
* Update readme options
* Update video handling
* Use `Custom_Bulkquick_Edit::do_load` check

## 1.2.0
* BUGFIX Bulk save clears fields when no data is passed
* Readme tweaks
* Show/hide configuration boxes in settings as needed per as type selected
* Use EDD License Handler licensing and updating
* Work with [Edit Flow](http://wordpress.org/plugins/edit-flow/) date, number, and user types

## 1.1.0
* API rename cbqe_validate_default cbqe_configuration_default
* Add disable donation option
* Add screenshot 5. Bulk Edit with date selector
* Add screenshot 7. Posts Tab - Custom Bulk/Quick Edit Settings panel
* Add screenshot 8. Premium Tab - Custom Bulk/Quick Edit Settings panel
* Add screenshot 9. Post Quick Edit - Full configured options
* BUGFIX Populate date selector in bulk and quick edit
* BUGFIX quick_edit_custom_box_field and manage_posts_custom_column_field_type return incorrect values
* Begin adding `multiple` select type
* Date works with bulk and quick edit
* Multiple select selector
* Revise features list
* SEO tweaks
* Travis ignore WordPress.WhiteSpace.ControlStructureSpacing - false positives
* Update TODO
* Update screenshots

## 1.0.1
* Add settings plugin action link
* BUGFIX missing const REQUIRED_FREE_VERSION
* Begin 'date' type
* Convert &$this to $this
* Create working plugin install and activate notice links
* Don't error out on activation if no free version is active
* Remove styles method
* Update filter names

## 1.0.0
* Add StillMaintained.com notice
* Enable plugin updating

## 0.0.2
* Remove unused code
* Correct filter names
* Add screenshots
* Enable custom post types
* Deactivate if free CBQE not activated
* Move language load to init()
* Update POT
* Video introduction
* Correct plugin URL

## 0.0.1
* Initial code release 