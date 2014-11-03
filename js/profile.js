(function() {
	var app = angular.module('profile', []);
	
	app.controller('profileController', ['myBookService', function(myBookService) {
		
		this.profileSaved = false;
		
		this.strings = {
			'name': 'Name',
			'name_required': 'Please enter the name',
			'age': 'Age',
			'age_required': 'Please enter the age',
			'age_range': 'Range of the age between 20 and 40',
			'phone': 'Phone',
			'phone_required': 'Please enter the phone',
			'email': 'Email',
			'email_required': 'Please enter the email',
			'email_invalid': 'Please enter the valid email',
			'address': 'Address',
			'profile_image': 'Profile Image',
			'save': 'Save Profile',
			'save_profile': 'Profile saved successfully!'
		};
		
		this.profile = {
			'name': '',
			'age': '0',
			'phone': '',
			'email': '',
			'address': '',
			'image': ''
		};
		
		this.profile.image = myBookService.profileImage;
		
		this.validateProfile = function() {			
			myBookService.profileImage = this.profile.image;
			this.profileSaved = true;
		};
	}]);	
})();