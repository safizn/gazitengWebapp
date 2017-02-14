<?php
// if Archive of a custom type.
// 1st segment should be a custom type and seconf segment empty.
return ((post_type_exists(self::$URL['segments'][0])) ? true : false);
