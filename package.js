Package.describe({
    summary: "HTML5-placeholder-polyfill for meteor"
});

Package.on_use(function(api){
	api.use('jquery', 'client');

	api.add_files([
		'dist/placeholder_polyfill.min.css',
		// 'test/config.js',
		'dist/placeholder_polyfill.jquery.min.combo.js'
	], 'client');
});

Package.on_test(function(api){
});