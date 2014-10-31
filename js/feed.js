(function() {
	var app = angular.module('feed', []);
	
	app.controller('feedController', function() {
		
		this.feedId = 0;
		
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
		
		this.deleteFeed = function(feedIndex) {
			this.feeds.splice(feedIndex, 1);
		};
		
		this.feed = this.getNewFeed();
	});	
})();