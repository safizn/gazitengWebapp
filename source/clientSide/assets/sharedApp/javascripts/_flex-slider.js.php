<?php if(!is_front_page() && is_single()) { ?>

<script type="text/javascript">
// FLEX SLIDER !!
jQuery(function(){
  SyntaxHighlighter.all();
});
jQuery(window).load(function(){
  if (typeof jQuery('#carousel').flexslider !== 'undefined') {
      jQuery('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      jQuery('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

});
</script>

<?php }?>
