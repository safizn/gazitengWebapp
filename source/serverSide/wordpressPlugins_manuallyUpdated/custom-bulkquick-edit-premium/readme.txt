=== Custom Bulk/Quick Edit Premium ===

Contributors: comprock
Donate link: http://aihr.us/about-aihrus/donate/
Tags: custom, bulk edit, quick edit, custom post types
Requires at least: 3.6
Tested up to: 3.9.0
Stable tag: 1.6.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Custom Bulk/Quick Edit Premium plugin lets you easily add fields to the bulk and quick edit panels of custom post types, pages, and posts.


== Description ==

Through Custom Bulk/Quick Edit Premium, you can easily add text, checkbox, color, date, radio, single and multiple select, and textarea inputs fields to edit post meta within the bulk edit and quick edit screens for custom post types, pages, and posts. Further, you can enable editing of category and tag taxonomies that don't normally appear.

Next, taxonomy, checkbox, radio, and select fields have the option to be reset, as in remove current options during bulk editing. This is very helpful when you want to mass reset or remove information.

Custom Bulk/Quick Edit Premium automatically detects custom fields that use the [manage_{$post_type}_posts_columns](http://codex.wordpress.org/Plugin_API/Filter_Reference/manage_$post_type_posts_columns) filter to display additional columns on the edit screen. **Therefore, unless it's already configured, your theme's `functions.php` file will have to modified to add custom field columns.**

https://www.youtube.com/watch?v=wd6munNz0gI

**[Video introduction](https://www.youtube.com/watch?v=wd6munNz0gI)**

Read **[Installation](http://aihr.us/wordpress-bulk-edit-plugin/)** and **[FAQ](http://aihr.us/wordpress-bulk-edit-plugin/)** to get started.

= Primary Premium Features =

* Adds float, integer, and user inputs
* API of actions and filters
* Auto-suggest for bulk and quick edit taxonomy entries
* Bulk edit post dates
* Color input with color picker
* Date and time input with datetime picker
* Date input with date picker
* Disable donate references
* Easily remove or replace `category` and `taxonomy` relations
* Edit excerpts and titles
* Multiple select selector
* Performance minded – Plugin automatically loads when needed
* Prevents editing of common and static fields like cb, id, author, etc.
* Remove specific category and tag entries
* Sample configurations provided as needed
* Save post handler can be customized for your needs.
* Setting options export/import
* Settings screen
* Supports WordPress's own taxonomy handlers for category and tag relations
* Unset checkbox, radio, and select values during bulk edit
* View category and tag relations on edit screen columns
* Works with Custom Post Types
* Works with posts and pages
* Works with [Edit Flow](http://wordpress.org/plugins/edit-flow/)'s checkbox, location, paragraph, and text types
* Works with [WooCommerce custom attributes and product types](http://www.woothemes.com/woocommerce/)

= Add Ons =
* [Edit Flow](http://wordpress.org/plugins/cbqe-edit-flow/) - Date (Premium required), number, and user types
* [WordPress SEO](http://aihr.us/downloads/wordpress-seo-custom-bulkquick-edit/) - Modify WordPress SEO options via bulk and quick edit panels

= Settings =

**Post**

* Enable "Title"? – Enable editing of post_type' title.
* Enable "Excerpt"? – Enable editing of post_type' excerpt.
* Edit "TBD" taxonomy? – Force making TBD an editable taxonomy field like checked categories or free-text tags.
	* No
	* No, but enable column view (view the column on the admin edit screen)
	* Like categories
	* Like tags
* Reset "TBD" Relations? – During bulk editing, easily remove all of the TBD's prior relationships and add new.
* Enable "Date"? – Enable bulk editing of post_type' date
* Enable "Custom Field"? - As checkbox, radio, select, input, or textarea
* "Custom Field" Configuration - You may create options formatted like "the-key|Supremely, Pretty Values" seperated by newlines.
	* Example configuration
`1
Two
3|Three
four|Four, and forty five
five-five|55`

**Pages**

See Post.

**Reset**

* Export Settings – These are your current settings in a serialized format. Copy the contents to make a backup of your settings.
* Import Settings – Paste new serialized settings here to overwrite your current configuration.
* Remove Plugin Data on Deletion? - Delete all Custom Bulk/Quick Edit data and options from database on plugin deletion
* Reset to Defaults? – Check this box to reset options to their defaults

**Premium**

* License Key - Required to enable premium plugin updating. Activation is automatic. Use `0` to deactivate.
* Disable Donate Text? – Remove "If you like…" text with the donate and premium purchase links from the settings screen.

= Doesn't Work For You? =

No problem, get a 100% refund and keep the software. Your license for support and updates will be revoked though.


== Installation ==

= Requirements =

* PHP 5.3+ [Read notice](https://aihrus.zendesk.com/entries/30678006) – Since 1.3.0

= Install Methods =

* Download `custom-bulkquick-edit-premium.zip` locally
	* Through WordPress Admin > Plugins > Add New
	* Click Upload
	* "Choose File" `custom-bulkquick-edit.zip`
	* Click "Install Now"
* Download and unzip `custom-bulkquick-edit-premium.zip` locally
	* Using FTP, upload directory `custom-bulkquick-edit-premium` to your website's `/wp-content/plugins/` directory

= Activation Options =

* Activate the "Custom Bulk/Quick Edit Premium" plugin after uploading
* Activate the "Custom Bulk/Quick Edit Premium" plugin through WordPress Admin > Plugins

= License Activatation =

1. Set the license key through WordPress Admin > Settings > Custom Bulk/Quick, Premium tab, License Key field
1. License key activation is automatic upon clicking "Save Changes"

= Usage =

1. Read "[How do I add custom columns to my edit page?](https://aihrus.zendesk.com/entries/24800411)"
1. Read "[How do you configure options?](https://aihrus.zendesk.com/entries/24911342)"
1. Read "[Where can I find working samples?](https://aihrus.zendesk.com/entries/27667723)"
1. Select the post, page, and custom post type attributes to enable through WordPress Admin > Settings > Custom Bulk/Quick
1. Once you select 'Show' a configuration panel will open. Leave this blank as upon save, the proper configuration will be loaded.
1. Click "Save Changes"
1. Review and revise newly populated configuration options
1. Click "Save Changes"
1. Use edit page Bulk or Quick Edit panels as normal

= Upgrading =

* Through WordPress
	* Via WordPress Admin > Dashboard > Updates, click "Check Again"
	* Select plugins for update, click "Update Plugins"
* Using FTP
	* Download and unzip `custom-bulkquick-edit-premium.zip` locally
	* Upload directory `custom-bulkquick-edit-premium` to your website's `/wp-content/plugins/` directory
	* Be sure to overwrite your existing `custom-bulkquick-edit-premium` folder contents


== Frequently Asked Questions ==

= Most Common Resolutions =

1. [How do I add custom columns to my edit page?](https://aihrus.zendesk.com/entries/24800411-How-do-I-add-custom-columns-to-my-edit-page-)
1. [Where can I find working samples?](https://aihrus.zendesk.com/entries/27667723-Where-can-I-find-working-samples-)
1. [How do you configure options?](https://aihrus.zendesk.com/entries/24911342-How-do-you-configure-options-)

== Frequently Asked Questions ==

= Most Common Issues =

* [How do I add custom columns to my edit page?](https://aihrus.zendesk.com/entries/24800411)
* [How do you configure options?](https://aihrus.zendesk.com/entries/24911342)
* [Where can I find working samples?](https://aihrus.zendesk.com/entries/27667723)
* Got `Parse error: syntax error, unexpected T_STATIC…`? See [Most Aihrus Plugins Require PHP 5.3+](https://aihrus.zendesk.com/entries/30678006)
* [Debug theme and plugin conflicts](https://aihrus.zendesk.com/entries/25119302)

= Still Stuck or Want Something Done? Get Support! =

1. [Knowledge Base](https://aihrus.zendesk.com/categories/20112546) - read and comment upon frequently asked questions
1. [Open Issues](https://github.com/michael-cannon/custom-bulkquick-edit/issues) - review and submit bug reports and enhancement requests
1. [Support on WordPress](http://wordpress.org/support/plugin/custom-bulkquick-edit) - ask questions and review responses
1. E-mail [support@aihr.us](mailto:support@aihr.us?subject=CBQE+Premium+Support+Request) for personalized assistance
1. [Contribute Code](https://github.com/michael-cannon/custom-bulkquick-edit/blob/master/CONTRIBUTING.md)
1. [Beta Testers Needed](http://aihr.us/become-beta-tester/) - provide feedback and direction to plugin development


== Screenshots ==

1. Post Edit Page - Columns showing values by input type
2. Custom Post Type Quick Edit with job title & excerpts
3. Posts Bulk Edit with job title & excerpts
4. Testimonials Custom Post Type tab - Custom Bulk/Quick Edit Settings panel
5. Bulk Edit with Date Selector
6. Testimonials Custom Post Type Edit Page
7. Posts Tab - Custom Bulk/Quick Edit Settings panel
8. Premium Tab - Custom Bulk/Quick Edit Settings panel
9. Post Quick Edit - Full configured options


== Changelog ==

See [Changelog](http://aihr.us/custom-bulkquick-edit-premium/changelog/)


== Upgrade Notice ==

= 1.5.0 =

* '[Custom Bulk/Quick Edit](http://wordpress.org/extend/plugins/custom-bulkquick-edit/)' plugin is **NOT** required to be installed and activated prior to installing and activating 'Custom Bulk/Quick Edit Premium'.

= 1.3.0 =

* Requires PHP 5.3+ [notice](https://aihrus.zendesk.com/entries/30678006-Testimonials-2-16-0-Requires-PHP-5-3-)

= 0.0.1 =

* Initial release


== Notes ==

TBD


== API ==

* Read the [Custom Bulk/Quick Edit Premium API](http://aihr.us/custom-bulkquick-edit-premium/api/).


== Localization ==

* Spanish translation by [Andrew Kurtis from WebHostingHub](http://www.webhostinghub.com)

You can translate this plugin into your own language if it's not done so already. The localization file `custom-bulkquick-edit-premium.pot` can be found in the `languages` folder of this plugin. After translation, please [send the localized file](http://aihr.us/contact-aihrus/) for plugin inclusion.

**[How do I localize?](https://aihrus.zendesk.com/entries/23691557)**
