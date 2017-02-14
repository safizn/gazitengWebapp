<?php
if (!is_singular() || is_singular()) {
  return true;
} else {
  return false;
}
