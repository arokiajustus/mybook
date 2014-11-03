(function() {
	
	var app = angular.module('directives', []);
	
	app.directive('showErrorMessages', function() {
	
		return {
			restrict: 'A',
			compile: function(element, attr) {

				element.on('invalid', function(event){

					this.classList.add('error');
					
					if (this.validity.valueMissing) {
						this.setCustomValidity(attr.mandatoryMessage);
					} else if (this.validity.typeMismatch) {
						this.setCustomValidity(attr.typeMismatchMessage);
					} else if (this.validity.rangeUnderflow) {
						this.setCustomValidity(attr.rangeMessage);
					} else {
						this.setCustomValidity(attr.mandatoryMessage);
					}
				});
				
				element.on('input', function(event){
					this.classList.remove('error');
					this.setCustomValidity('');
				});
			}
		};
	});
	
	app.directive('resize', ['$window', function($window) {
		return {
			link: function(scope, elem, attrs) {
				scope.onResize = function() {
					$('.contentwrap').css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
					$('.left-content').css({'height': (screen.height - ($('.navbar-fixed-top').height()))+'px'});
				}
				scope.onResize();

				angular.element($window).bind('resize', function() {
					scope.onResize();
				})
			}
		}
	}]);
	
	app.directive("fileread", [function() {
		return {
			scope: {
				fileread: "=",
				filename: "="
			},
			link: function (scope, element, attributes) {
				element.bind("change", function (changeEvent) {
					var reader = new FileReader();
					reader.onload = function (loadEvent) {
						scope.$apply(function () {
							scope.fileread = loadEvent.target.result;
							scope.filename = changeEvent.target.files[0].name;
						});
					}
					reader.readAsDataURL(changeEvent.target.files[0]);
				});
			}
		}
	}]);
})();