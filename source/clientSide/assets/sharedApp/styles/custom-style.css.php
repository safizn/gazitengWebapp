<?php
$upload_dir = wp_upload_dir(); // should be deleted. kept not to break things.
$upload_url = wp_upload_dir()['baseurl'];

$queried_object = get_queried_object();
$queried_object_vars = get_object_vars ( $queried_object );
// echo $vars['labels']->singular_name;
$page_slug = $queried_object_vars['slug'];
$page = get_page_by_path( $page_slug );
$pageid = $page->ID;

$pages = get_posts( array('post_type'=>'page','numberposts' => 1,'include' => $pageid) );
foreach( $pages as $page ) :
  $imageGalleryField = get_field('image_gallery', $page->ID)[0];
endforeach; // end of the loop.
?>
<?php
	if(is_home()) {
		if(is_mobile()) {
			$headerBackgroundImage =  $upload_url . '/2015/10/1501_JuneDental_HERO_4.jpg.CROP_.fresca-xlarge.jpg';
		} else {
			$headerBackgroundImage =  $upload_url . '/2015/10/1501_JuneDental_HERO_4.jpg.CROP_.fresca-xlarge.jpg';
		}
	} elseif(isset($imageGalleryField)) {
		if(is_mobile()) {
			$headerBackgroundImage =  $imageGalleryField['sizes']['medium'];
		} else {
			$headerBackgroundImage =  $imageGalleryField['url'];
		}
	} else {
		$headerBackgroundImage =  $upload_url . '/2015/07/dentist_in_las_vegas.jpg';
	}

?>
app-drawer {
	--app-drawer-content-container: {
		width: 320px;
	}
}

paper-icon-button {
	--iron-icon-stroke-color: rgba(0, 0, 0, 0.2);
}

body {
	margin: 0;
	font-family: arial;
	/*background-color: #eee; */
}

app-header.contentHeader {
	position: fixed;
	top: 0;
	left: 0;
	height: 212px;
	color: #fff;
	background-color: #3f51b5;
	--app-header-background-front-layer: {
		background-image: url(
		<?php echo $headerBackgroundImage; ?>
		);
		background-position: left center;
	};
}

app-header.logoHeader {
	font-weight: bold;
	background-color: white;
}

paper-icon-button {
	--paper-icon-button-ink-color: #4285f4;
	/* --paper-icon-button-ink-color: white; */
}

app-toolbar.tall {
	height: 148px;
}

sample-content {
	padding-top: 212px;
}

[title].contentTitle {
	font-weight: lighter;
	margin-left: 40px;
}

[condensed-title] {
	font-weight: lighter;
	margin-left: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
}

[condensed-title] i {
	font-weight: 100;
	font-style: normal;
}

@media (max-width: 639px) {
	[title] {
		margin-left: 5px;
		font-size: 30px;
	}
	[condensed-title] {
		font-size: 15px;
	}
}


/* paper-drawer-panel id="paperDrawerPanel" ---------------------------------------- */
	  #paperDrawerPanel app-header-layout.main {
		background-color: var(--google-grey-100);
	  }

	  #paperDrawerPanel app-drawer {
		border-right: 1px solid var(--google-grey-300);
	  }

	  #paperDrawerPanel[right-drawer] [drawer] {
		border-left: 1px solid var(--google-grey-300);
	  }

	  paper-button {
		color: white;
		margin: 10px;
		background-color: var(--google-blue-700);
		white-space: nowrap;
	  }
paper-header-panel.paper-header-panel-0 paper-toolbar:after, paper-header-panel.paper-header-panel-0 .paper-header:after {

  box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
}

/* Paper Scroll Header Panel ---------------------------------------- */

paper-scroll-header-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--paper-grey-200, #eee);
	/* box-shadow: inset 0 10px 20px rgba(0,0,0,0.2); */
	box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.2);


	/*
    background-image: url();
		*/
	/*
	 paper-drawer-panel id="paperDrawerPanel" ----------------------------------------
	#paperDrawerPanel [main] {
		background-color: white;
	}

	 Paper Scroll Header Panel ----------------------------------------
	paper-scroll-header-panel {
	  background-color: <?php if(wp_is_mobile()) {echo 'white';} else { echo 'white'; } ?> ;
		box-shadow: inset 0 0px 0px rgba(0,0,0,0.1);
	}
	*/

	background-color: #FAFAFA;

	/* background for toolbar when it is at its full size */
	--paper-scroll-header-panel-full-header: {
		background-image: url(
		<?php echo $headerBackgroundImage; ?>
			);
		};


  /* background for toolbar when it is condensed */
  --paper-scroll-header-panel-condensed-header: {
    background-color: var(--paper-deep-orange-500, #ff5722);
  };
}

paper-toolbar {
  background-color: transparent;
}

paper-toolbar .title {
  font-size: 40px;
<?php if ( !wp_is_mobile() ) { ?>
  margin-left: 0px;
<?php } else { ?>
  margin-left: 0px;
<?php } ?>
text-shadow: 0 1px 2px rgba(0,0,0,0.6);
}

paper-toolbar iron-icon {
  margin: 0 8px;
}

.content {
  padding: 8px;
}

/* ---------------------------------------------- */

.branding-heading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: -o-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  height: 80px;
  padding-left: 24px;
}

.left-sidebar iron-icon {
	margin: 0 16px 0 4px;
}

paper-icon-item {
	 cursor:pointer;
}
paper-icon-item:hover {
	background-color: #F4F4F4;
}
