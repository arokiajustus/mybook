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
			if (this.feed.value.indexOf('www') == 0) {
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
		
		this.getProfileImage = function() {
			alert('sdfdsf');
		};
		
		this.feed = this.getNewFeed();
	}]);	
})();