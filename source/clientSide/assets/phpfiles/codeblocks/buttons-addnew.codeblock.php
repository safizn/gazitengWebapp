<?php // HORIZONTAL BUTTONS TO ADD NEW POST

// add class of css for tablet font size of the span
if (is_tablet()) {
	$brick_add_post_class = 'BrickAddPost-Tablet-Font';
}

$login_redirect_url = 'http://dentrist.com/login'; ?>
<div id="add-new-post-wrapper" class="horizontal-section">
	<div id="brick-add-case" class="brick brick-add-post <?php echo $brick_add_post_class; ?>">
    	<a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=case'; } ?>" title="Add Case">
   		<span> <i class="fa fa-suitcase"></i>  Add Your Dental Case </span>
        </a>
    </div>
	<div id="brick-add-article" class="brick brick-add-post  <?php echo $brick_add_post_class; ?>">
    	<a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=article'; } ?>" title="Add Article">
   		<span> <i class="fa fa-file-text"></i>  Add Article </span>
        </a>
    </div>
	<div id="brick-add-question" class="brick brick-add-post  <?php echo $brick_add_post_class; ?>">
    	<a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=question'; } ?>" title="Add Question">
   		<span> <i class="fa fa-question-circle"></i>  Ask A Quetion </span>
        </a>
    </div>
	<div id="brick-add-entertainment" class="brick brick-add-post <?php echo $brick_add_post_class; ?>">
    	<a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=entertainment'; } ?>" title="Add Entertainment">
   		<span> <i class="fa fa-puzzle-piece"></i>  + Fun & Humor Post </span>
        </a>
    </div>
	<div id="brick-add-quiz" class="brick brick-add-post <?php echo $brick_add_post_class; ?>">
    	<span class="add-icon"> <i class="fa fa-check-circle"></i> </span>
        <a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=open-question'; } ?>" title="Add Open Question">
   		<span> OpenQ</span>
        </a>
    	<a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=sc-questions'; } ?>" title="Add Single Choice Question">
   		<span> SCQ</span>
        </a>
    	<a href="<?php  if ( !is_user_logged_in() ) { echo $login_redirect_url;}else { echo 'http://dentrist.com/wp-admin/post-new.php?post_type=mc-questions'; } ?>" title="Add  Multiple Choice Question">
   		<span>MCQ</span>
        </a>
    </div>
</div>
