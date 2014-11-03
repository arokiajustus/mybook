(function() {
	var app = angular.module('home', []);
	
	app.controller('homeController', function() {
		
		this.activemenu = 'Feed';
		
		this.menu = [
			{'name': 'Feed'}, 
			{'name': 'Profile'}
		];
	});	
})();