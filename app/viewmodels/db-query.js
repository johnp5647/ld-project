define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
	
	return {
		dbInfo: ko.observableArray([]),
		activate: function () {
			var that = this;
			return http.get("http://localhost:5000/api").then(function(response) {
				console.log(ko.toJS(response));
				that.dbInfo(ko.toJS(response));
				
			});
		},
	};
});
	
