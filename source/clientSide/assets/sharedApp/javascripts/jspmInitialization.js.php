<script src="<?= \SZN\App::$locations['app']['url']; ?>/sharedApp/javascripts/jspm_packages/system.js"></script>
<script>
// Must be located between system.js and config.js because baseURL must be configured in the first system.config call. And it is seperated from config.js so it won't be overwritten.
// System.config({
//   baseURL: "/",
//   babelOptions: {
//     presets: ["es2015-script"]
//   }
// });
System.config({
  baseURL: "<?= \SZN\App::$locations['app']['url']; ?>/sharedApp/javascripts/"
});
</script>
<script src="<?= \SZN\App::$locations['app']['url']; ?>/sharedApp/javascripts/jspm_packages/jspm.config.js"></script>
