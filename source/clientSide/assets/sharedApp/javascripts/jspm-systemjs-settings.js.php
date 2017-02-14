<?php // Loading SystemJS and jspm confuguration - for module loader and es6 usage.
// CURRENTLY INCLUDED IN webcomponents-polymer-settings.codeblock.php to simplify testing.
?>
<script>
  System.import('<?= \SZN\App::$locations['app']['url'] . '/sharedApp/javascripts' . '/appMainEntryPoint.js'; ?>');
</script>
