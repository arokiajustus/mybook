(function() {
	
	var app = angular.module('directives', []);
	
	app.directive('invalidMessage', function() {
	
		return {
			restrict: 'A',
			compile: function(element, attr) {

				element.on('invalid', function(event){
					this.classList.add('error');
					this.setCustomValidity(attr.invalidMessage);
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
				}
				scope.onResize();

				angular.element($window).bind('resize', function() {
					scope.onResize();
				})
			}
		}
	}]);
	
	app.directive("fileread", [function () {
		return {
			scope: {
				fileread: "="
			},
			link: function (scope, element, attributes) {
				element.bind("change", function (changeEvent) {
					var reader = new FileReader();
					reader.onload = function (loadEvent) {
						scope.$apply(function () {
							scope.fileread = loadEvent.target.result;
						});
					}
					reader.readAsDataURL(changeEvent.target.files[0]);
				});
			}
		}
	}]);
})();