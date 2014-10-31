(function() {
	var app = angular.module('myBook', ['ngRoute','directives', 'home', 'feed', 'profile']);
	
	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
    		templateUrl: 'page-center.html'
    	})
		.when('/home', {
    		templateUrl: 'page-home.html',
			controller: 'homeController'
    	})
		.otherwise({ redirectTo: '/' });
	});
	
	app.controller('headerController', ['$location', function($location) {
	
		this.credential = {
			'username': 'admin',
			'password': 'admin',
			'signedin': false
		};
	
		this.images = {
			'logo': 'img/logo.png',
			'logo_size': 100,
			'logo_text': 'img/logo_text.png'
		};
		
		this.strings = {
			'username': 'User Name',
			'username_required': 'Please enter the user name',
			'password': 'Password',
			'password_required': 'Please enter the password',
			'signin': 'Sign In',
			'signin_invalid': 'Please enter the valid credential'
		};
		
		this.login = {
			username: '',
			password: ''
		};
		
		this.validateUser = function() {
			if (this.login.username === this.credential.username
				&& this.login.username === this.credential.password) {
				this.credential.signedin = true;
				this.credential.username = "";
				this.credential.password = "";
				$location.path('/home');
			} else {
				
				var usernameFld = document.getElementById('username');
				var passwordFld = document.getElementById('password');
				usernameFld.classList.add('error');
				passwordFld.classList.add('error');
				usernameFld.setCustomValidity(this.strings.signin_invalid);
			}
		};
		
		this.validateAuthentication = function() {
		
			if ($location.path() == '/home' && !this.credential.signedin) {
				$location.path('/');
			}
		};
		
		this.signout = function() {
			this.credential.signedin = false;
			$location.path('/');
		};
	}]);
})();