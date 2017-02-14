<template is="dom-bind">
<div id="footer" class="container" style="font-size: 11px;">
	<div class="text-align-center" style="font-size: 11px;">
	  	<a style="font-size: 11px;" href="<?php echo home_url() ?>" title="Home"><?php bloginfo('name') ?></a> &copy; 2010 - <?php echo date("Y"); ?>
			<br />
			Dentistry ❤ Our Passion. <?php // bloginfo('description') ?> <?php if (is_home()) { ?> <?php } ?>
			<br />
    	<a href="http://dentrist.com/about/" title="About Page" style="font-size: 11px;">About</a>
	    <br />
	  </div>
</div>
</template>
