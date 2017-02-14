<!-- TAGS, CAYEGORIES, SEARCH -->
<?php if (is_search() || is_category() || is_tag()) { ?>
<div class="subpage-title container-fluid">
    <div class="row-fluid">
        <div class="span4 hidden-phone"></div>
        <div class="span4">

            <!-- SEARCH PAGE -->
            <?php if(is_search()) { ?>
                <h1><?php _e('Search results for', 'ipin'); ?> "<?php the_search_query(); ?>"</h1>
                <?php if (category_description()) { ?>
                    <?php echo category_description(); ?>
                <?php } ?>
            <?php } ?>

            <!-- CATEGORIES -->
            <?php if(is_category()) { ?>
                <h1><?php single_cat_title(); ?></h1>
                <?php if (category_description()) { ?>
                    <?php echo category_description(); ?>
                <?php } ?>
            <?php } ?>

            <!-- TAGS -->
            <?php if(is_tag()) { ?>
                <h1><?php _e('Tag:', 'ipin'); ?> <?php single_tag_title(); ?></h1>
                <?php if (tag_description()) { ?>
                    <?php echo tag_description(); ?>
                <?php } ?>
            <?php } ?>

        </div>
        <div class="span4"></div>
    </div>
</div>
<?php } ?>
