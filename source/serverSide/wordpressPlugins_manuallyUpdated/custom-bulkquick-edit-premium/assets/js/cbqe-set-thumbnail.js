/* Ported from wp-admin/js/post.js */


CBQESetThumbnailHTML = function(html){
	$('.inside', '#cbqeimagediv').html(html);
};


CBQERemoveThumbnail = function(nonce, post_id){
	$.post(ajaxurl, {
		action: 'set-post-thumbnail', post_id: post_id, thumbnail_id: -1, _ajax_nonce: nonce, cookie: encodeURIComponent( document.cookie )
	}, function(str){
		if ( str == '0' ) {
			alert( setPostThumbnailL10n.error );
		} else {
			CBQESetThumbnailHTML(str, post_id);
		}
	}
	);
};
