// ⭐ Copy & Build distribution code (source -> distribution).
gulp.task('copy:serverSide', ()=> { return rsyncTask( source(), 'serverSide/', '/app/' ); });
gulp.task('copy:root', ()=> { return rsyncTask( source(), 'clientSide/root/', '/app/' ); });
gulp.task('copy:jspm_packages_modules', ()=> { return rsyncTask( source(), 'clientSide/jspm_packages_modules/', '/app/', {'u': true} ); });
gulp.task('copy:bower_packageManager', ()=> { return rsyncTask( source(), 'clientSide/bower_packageManager/', '/app/', {'u': true}); });
gulp.task('copy:packages', 
	gulp.parallel('copy:serverSide','copy:root', 'copy:jspm_packages_modules', 'copy:bower_packageManager')
);
gulp.task('copy:assets', ()=> { return rsyncTask( source(), 'clientSide/assets/', '/app/' );} );
gulp.task('copy:routing', ()=> { return rsyncTask( source(), 'clientSide/routing/', '/app/' ); });
gulp.task('copy:assetsFiles', 
	gulp.parallel('copy:assets', 'copy:routing')
);
gulp.task('copy:sourceToDistribution', 
	gulp.parallel('copy:packages', 'copy:assetsFiles')
);

// Build assets
gulp.task('build:css', require(path.join(config.TaskImplementationPath, 'stylesheet.js')) );
gulp.task('build:js', require(path.join(config.TaskImplementationPath, 'javascript.js')) );
gulp.task('build:html', require(path.join(config.TaskImplementationPath, 'html.js')) );
gulp.task('buildSourceCode', 
	gulp.series(
		'copy:assetsFiles', 
		gulp.parallel('build:css', 'build:html', 'build:js')
	)
);

// Install dependencies (in distribution volume)
gulp.task('install:bower', require(path.join(config.TaskImplementationPath, 'bower.js')) );
gulp.task('install:jspm', require(path.join(config.TaskImplementationPath, 'jspm.js'))(process.env.NODEJS_VERSION) );
gulp.task('install:composer:wordpressPlugins', require(path.join(config.TaskImplementationPath, 'wordpressPlugin.js')) );
gulp.task('install:composer:wordpressMustUsePlugins', require(path.join(config.TaskImplementationPath, 'wordpressMustUsePlugin.js')) );
gulp.task('change:appPermissions', require(path.join(config.TaskImplementationPath, 'changePermissions.js')) );
gulp.task('install:dependencies', 
	gulp.series(
		gulp.parallel('install:bower', 'install:jspm', 'install:composer:wordpressPlugins',	'install:composer:wordpressMustUsePlugins'),
		'buildSourceCode'
	)
);

gulp.task('build', 
	gulp.series(
		'copy:sourceToDistribution',
		'install:dependencies',
		'buildSourceCode'
	)
);

// ⌚ Watch file changes from sources to destination folder.
gulp.task('watch:source', ()=> {
	// assets
	gulp.watch(
		[
			source('clientSide/assets/**/*'),
			source('clientSide/routing/**/*')
		], 
		{interval: INTERVAL, usePolling: usePolling}, 
		gulp.series(
			'copy:assetsFiles', 
			gulp.parallel(
				'build:css',
				'build:html',
				'build:js'
			)
		)
	);
	// bower
	gulp.watch(
		[
			source('clientSide/bower_packageManager/**/*')
		], 
		{interval: INTERVAL, usePolling: usePolling}, 
		gulp.series(
			'copy:bower_packageManager',
			'install:bower'
		)
	);
	// jspm
	gulp.watch(
		[
			source('clientSide/jspm_packages_modules/**/*')
		], 
		{interval: INTERVAL, usePolling: usePolling}, 
		gulp.series(
			'copy:jspm_packages_modules',
			'install:jspm'
		)
	);
	// root
	gulp.watch(
		[
			source('clientSide/root/**/*')
		], 
		{interval: INTERVAL, usePolling: usePolling}, 
		gulp.series(
			'copy:root'
		)
	);
	// serverSide
	gulp.watch(
		[
			source('serverSide/**/*')
		], 
		{interval: INTERVAL, usePolling: usePolling}, 
		gulp.series(
			'copy:serverSide'
		)
	);

});
