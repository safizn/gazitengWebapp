<?php
if (is_singular() && comments_open() && get_option( 'thread_comments' )) {
  return true;
} else {
  return false;
}
