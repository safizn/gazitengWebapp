<!-- 1. Load platform support before any code that touches the DOM. -->
<script src="<?= \SZN\App::$locations['bowerComponents']['url'] . '/webcomponentsjs/webcomponents-lite.min.js'; ?>"></script>
<!-- 2.1 Load polymer settings Global Polymer settings -->
<script>
  /* this script must run before Polymer is imported */
  window.Polymer = {
    dom: "<?= $args['dom'] ? $args['dom'] : 'shady'; ?>",
    lazyRegister: "<?= $args['lazyRegister'] ? $args['lazyRegister'] : 'false'; ?>"
  };
</script>

<!-- 2.2 Polymer Google UI -->
<!-- DYNAMIC WAY SHOWS ERROR IN INSPECTION <link rel="import" href="		<?php // echo SZN_web_components_directory_url('polymer_components/polymer','polymer.html'); ?>"> -->
<!-- STATIC WAY USED INSTEAD  <link rel="import" href="http://dentrist.com/wp-content/plugins/SZN_web_components_system/polymer_components/polymer/polymer.html">  -->
<link rel="import" href="<?= \SZN\App::$locations['bowerComponents']['url'] . '/polymer/' . ($args['polymerFeatureSet'] ? $args['polymerFeatureSet'] : 'polymer-micro.html'); ?>">
<!-- END Polymer Google UI -->
