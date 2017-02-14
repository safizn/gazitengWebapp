<?php
/*
*  View array data (for debugging)
var_dump( get_field('gallery') );
*/ 
/*
*  Create the Markup for a slider
*  This example will create the Markup for Flexslider (http://www.woothemes.com/flexslider/)
*/
?>
<?php $image['alt']; ?>
<?php $image['caption']; ?>
<?php
$images = get_field('image_gallery');
if( $images ): ?>
    <section class="slider">
            <div id="carousel" class="flexslider">
            <div class="flex-viewport" style="overflow: hidden; position: relative;"><ul class="slides" style="width: 2400%; -webkit-transition: 0s; transition: 0s; -webkit-transform: translate3d(0px, 0px, 0px);">
                <?php foreach( $images as $image ): ?>            
                <li class="flex-active-slide" style="width: 210px; float: left; display: block;">
                    <img src="<?php echo $image['sizes']['thumbnail']; ?>">
                    </li>
            <?php endforeach; ?>
              </ul></div><ul class="flex-direction-nav"><li><a class="flex-prev flex-disabled" href="#">Previous</a></li><li><a class="flex-next" href="#">Next</a></li></ul></div>
          </section>
<?php endif; 
?>
