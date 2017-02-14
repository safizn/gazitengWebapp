<?php
/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
 wp_head(); ?>
</head>
<body <?php body_class('fullbleed layout vertical'); ?> style="" unresolved>

<?php //	do_action('SZN_after_body_tag'); ?>
