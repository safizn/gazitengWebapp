<?php
// if seg2 is a single post of archive custom type seg1.
$routeID = url_to_postid( self::$URL['path'] );
return ((get_post_status( $routeID ) == true) ? true : false);
