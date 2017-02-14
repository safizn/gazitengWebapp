<?php
$page_data = get_page(url_to_postid(self::$URL['segments'][0]));
return (($page_data->post_status == 'publish') ? true : false );
