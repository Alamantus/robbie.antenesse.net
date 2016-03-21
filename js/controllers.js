var app = angular.module("Portfolio", []);

app.controller('Header', function($scope) {
	$scope.title = 'Robbie Antenesse';
	$scope.links = [
		{
			'name'	: 'Home',
			'url'	: '/'
		},
		{
			'name'	: 'About',
			'url'	: '#about'
		}
	];
});

app.controller('Summary', function($scope) {
	$scope.skills = [
		{
			'name'		: 'Flexible',
			'icon'		: 'images/icons/flexible.png',
			'details'	: 'blah blah blah'
		},
		{
			'name'		: 'Flexible',
			'icon'		: 'images/icons/flexible.png',
			'details'	: 'blah blah blah'
		},
	];
	$scope.information = [
		{
			'heading'	: 'About',
			'id'		: 'about',
			'text'		: 'Blah blah blah.'
		},
		{
			'heading'	: 'Origin',
			'id'		: 'origin',
			'text'		: 'Blah blah blah.'
		}
	];
});

app.controller('Projects', function($scope) {
	$scope.title = 'Projects I\'ve worked on';
	$scope.projects = [
		{
			'name'			: 'This AngularJS Website',
			'thumbnail'		: 'images/thumbnails/angular.png',
			'startDate'		: 'March 20, 2016',
			'endDate'		: 'March 21, 2016',
			'snippet'		: 'blah blah blah',
			'details'		: 'blah blah blah blah blah blah'
		},
		{
			'name'			: 'This AngularJS Website',
			'thumbnail'		: 'images/thumbnails/angular.png',
			'startDate'		: 'March 20, 2016',
			'endDate'		: 'March 21, 2016',
			'snippet'		: 'blah blah blah',
			'details'		: 'blah blah blah blah blah blah'
		}
	];
});
