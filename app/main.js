requirejs.config({
	paths: {
		'text': '../lib/require/text',
		'durandal': '../lib/durandal/js',
		'plugins': '../lib/durandal/js/plugins',
		'transitions': '../lib/durandal/js/transitions',
		'knockout': '../lib/knockout/knockout-3.1.0',
		'bootstrap': '../lib/bootstrap/js/bootstrap',
		'jquery': '../lib/jquery/jquery-1.9.1'
	}
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'plugins/router'], function (system, app, viewLocator, router) {

	//>>excludeStart("build", true);
	system.debug(true);
	//>>excludeEnd("build");

	app.title = 'LANDesk Project';

	app.configurePlugins({
		router: true
	});

	app.start().then(function () {
		viewLocator.useConvention();

		app.setRoot('viewmodels/shell');
	});
});