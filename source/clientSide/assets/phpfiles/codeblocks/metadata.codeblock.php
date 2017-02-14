<!-- METADATA -->

<link rel="manifest" href="<?php echo WP_HOME; ?>/manifest.json">

<meta charset="<?php bloginfo( 'charset' ); ?>" />

<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no"> <!-- Bootstrap CSS coded for mobile devices -->

<title><?php wp_title( '|', true, 'right' );	bloginfo( 'name' );	$site_description = get_bloginfo( 'description', 'display' ); if ($site_description && (is_home() || is_front_page())) echo " | $site_description"; ?></title>

<link rel="shortcut icon"  sizes="16x16" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/favicon.ico" type="image/x-icon">
<link rel="icon" sizes="16x16" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/favicon.ico" type="image/x-icon">

<link rel="apple-touch-icon" sizes="57x57" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo \SZN\App::$appURL; ?>/images/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo \SZN\App::$appURL; ?>/images/favicon/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="<?php echo \SZN\App::$appURL; ?>/images/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<link rel="profile" href="http://gmpg.org/xfn/11" />



<!-- Old platforms support -->

<!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<!--[if IE 7]>
  <link href="<?php echo get_template_directory_uri(); ?>/css/font-awesome-ie7.css" rel="stylesheet">
<![endif]-->
