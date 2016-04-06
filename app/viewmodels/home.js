define(['plugins/http', 'durandal/app', 'plugins/router', 'knockout'], function (http, app, router, ko) {
	
	return {
		user: {
			username: ko.observable(),
			password: ko.observable()
		},
		activate: function () {
			this.user.username("");
			this.user.password("");
		},
		sendInfo: function (user) {
			var userJS = ko.toJS(this.user);
			console.log(userJS);
			
			return http.post("http://localhost:5000/auth/login", userJS).then(function(response) {
			router.navigate("db-query");
			});
		}
	};
});