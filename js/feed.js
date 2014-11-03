(function() {
	var app = angular.module('feed', []);
	
	app.controller('feedController', ['myBookService', function(myBookService) {
		
		this.feedId = 0;
		this.feedImage = myBookService.profileImage;
		
		this.feeds = [];
		
		this.strings = {
			'feed_required': 'Please enter the URL/text feed',
			'feed': 'Text feed or URL feed',
			'post': 'Post'
		};
		
		this.validateFeed = function() {
			
			this.feedId++;
			this.feed.id = this.feedId;
			
			this.feed.type = 'text';
			if (this.isUrl(this.feed.value)) {
				this.feed.type = 'url';
			}
			
			this.feed.date = new Date();
			
			this.feeds.push(this.feed);
			
			this.feed = this.getNewFeed();
		};
		
		this.getNewFeed = function() {
			
			return {
				'id': 0,
				'type': '',
				'value': '',
				'dateTime': ''
			};
		};
		
		this.showFeed = function() {
			this.feedImage = myBookService.profileImage;
			return this.feeds.length > 0;
		};
		
		this.deleteFeed = function(feedIndex) {
			this.feeds.splice(feedIndex, 1);
		};
		
		this.isUrl = function(str) {
			return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(str);
		}
		
		this.feed = this.getNewFeed();
	}]);	
})();