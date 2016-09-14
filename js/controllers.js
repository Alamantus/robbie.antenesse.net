var currentDate = new Date();

app.controller("Content", function($scope) {
	$scope.currentYear = currentDate.getFullYear();
	$scope.siteTitle = "Robbie Antenesse";

	$scope.summaryTitle = "At a Glance";
	$scope.traits = [
		{
			"name"		: "Fast",
			"icon"		: "images/icons/fast.png",
			"details"	: "Finishes presentable prototypes in 7–10 days"
		},
		{
			"name"		: "Flexible",
			"icon"		: "images/icons/flexible.png",
			"details"	: "Learns new APIs and converts code between languages"
		},
		{
			"name"		: "Resourceful",
			"icon"		: "images/icons/resourceful.png",
			"details"	: "Finds the most cost-effective solutions to problems"
		}
	];
	knuthShuffle($scope.traits);

	$scope.skillsTitle = "Skills";
	$scope.skills = [
		{
			"name"			: "AngularJS",
			"icon"			: "images/icons/angular.png",
			"specifics"	: "Website templating and auto-populating",
			"yearBegan"	: 2016,
			"links"			: [
											"https://alamantus.github.io"
										]
		},
		{
			"name"			: "Bootstrap",
			"icon"			: "images/icons/bootstrap.png",
			"specifics"	: "Clean, consistent website styling",
			"yearBegan"	: 2013,
			"links"			: [
											"https://alamantus.github.io",
											"http://insanityjam.com"
										]
		},
		{
			"name"			: "C# .NET",
			"icon"			: "images/icons/csharp.png",
			"specifics"	: "Game Development in Unity 3D Game Engine",
			"yearBegan"	: 2013,
			"links"			: [
											"https://alamantus.itch.io"
										]
		},
		{
			"name"			: "CSS3",
			"icon"			: "images/icons/css.png",
			"specifics"	: "Extensive web templating and styling experience",
			"yearBegan"	: 2010,
			"links"			: [
											"http://www.alamantus.com",
											"http://lexicon.ga"
										]
		},
		{
			"name"			: "HTML5",
			"icon"			: "images/icons/html.png",
			"specifics"	: "Extensive web templating and styling experience",
			"yearBegan"	: 2010,
			"links"			: [
											"http://www.alamantus.com",
											"http://lexicon.ga"
										]
		},
		{
			"name"			: "JavaScript",
			"icon"			: "images/icons/javascript.png",
			"specifics"	: "Clean, efficient EMCA2015 (ES6) programming for fast, interactive websites",
			"yearBegan"	: 2012,
			"links"			: [
											"https://github.com/Alamantus"
										]
		},
		{
			"name"			: "jQuery",
			"icon"			: "images/icons/jquery.png",
			"specifics"	: "Easy understanding of APIs to make JavaScript programming easier",
			"yearBegan"	: 2013,
			"links"			: [
											"http://checkpointer.tk"
										]
		},
		{
			"name"			: "MySQL",
			"icon"			: "images/icons/mysql.png",
			"specifics"	: "Database design, management, and API calls",
			"yearBegan"	: 2010,
			"links"			: [
											"http://lexicon.ga",
											"http://checkpointer.tk",
											"http://graceaware.com"
										]
		},
		{
			"name"			: "NodeJS",
			"icon"			: "images/icons/node.png",
			"specifics"	: "Experience with command line tools and package management with NPM",
			"yearBegan"	: 2016,
			"links"			: [
											"https://github.com/Alamantus"
										]
		},
		{
			"name"			: "PHP",
			"icon"			: "images/icons/php.png",
			"specifics"	: "Vanilla PHP and API construction",
			"yearBegan"	: 2012,
			"links"			: [
											"http://lexicon.ga",
											"http://checkpointer.tk",
											"http://graceaware.com"
										]
		},
		{
			"name"			: "Sass",
			"icon"			: "images/icons/sass.png",
			"specifics"	: "Clean, readable stylesheets for improved styling management",
			"yearBegan"	: 2016,
			"links"			: [
											"https://alamantus.github.io",
											"http://playchompy.com"
										]
		},
		{
			"name"			: "Wordpress",
			"icon"			: "images/icons/wordpress.png",
			"yearBegan"	: 2008,
			"specifics"	: "Site management and theme customization",
			"links"			: [
											"http://graceaware.com"
										]
		}
	];
	knuthShuffle($scope.skills);

	$scope.projectsTitle = "Portfolio";
	$scope.projectsMoreInfo = "More about this...";
	$scope.numProjectsBeforeHide = 6;
	$scope.moreProjectsTitle = "More Projects";
	$scope.projects = [
		{
			"name"				: "This Portfolio Site",
			"thumbnail"		: "images/thumbnails/angular.jpg",
			"type"				: "Website",
			"startDate"		: "March 20, 2016",
			"endDate"			: "March 21, 2016",
			"link"				: "https://alamantus.github.io",
			"snippet"			: "Designed and built website with AngularJS, Bootstrap, and Sass",
			"details"			: {
												"role"			: "All",
												"skills"		: "",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "Radio Silence",
			"thumbnail"		: "images/thumbnails/radio-silence.jpg",
			"type"				: "Game",
			"startDate"		: "September 1, 2016",
			"endDate"			: "September 11, 2016",
			"link"				: "https://alamantus.itch.io/radio-silence",
			"snippet"			: "Built with C# in Unity 3D in 10 days for the <a href='https://itch.io/jam/fermi-paradox-jam' target='_blank'>Fermi Paradox Jam</a>",
			"details"			: {
												"role"			: "Code, Development, Design, Art (models, GUIs)",
												"skills"		: "C#, Unity 3D, PHP, MySQL, GiMP, Blender",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "Public Pinboard",
			"thumbnail"		: "images/thumbnails/public-pinboard.jpg",
			"type"				: "Tool",
			"startDate"		: "May 29, 2016",
			"endDate"			: "June 2, 2016",
			"link"				: "http://alamantus.github.io/Public-Pinboard",
			"snippet"			: "Built with PHP for posting small post-it note-like messages to a public space that allows anyone to also remove the messages.",
			"details"			: {
												"role"			: "All",
												"skills"		: "",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "Trade Winds",
			"thumbnail"		: "images/thumbnails/trade-winds.jpg",
			"type"				: "Game",
			"startDate"		: "April 1, 2016",
			"endDate"			: "May 18, 2016",
			"link"				: "https://alamantus.itch.io/trade-winds",
			"snippet"			: "Designed and built with JavaScript and HTML5 Canvas in 14 days for the <a href='https://itch.io/jam/lowrezjam2016' target='_blank'>2016 LOWREZJAM</a> and updated incrementally",
			"details"			: {
												"role"			: "All",
												"skills"		: "",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "Time-to-Page Calculator",
			"thumbnail"		: "images/thumbnails/time-to-page.jpg",
			"type"				: "Tool",
			"startDate"		: "June 15, 2015",
			"endDate"			: "June 19, 2015",
			"link"				: "https://alamantus.itch.io/time-to-page",
			"snippet"			: "Built with JavaScript to convert audiobook time to book page and vice-versa",
			"details"			: {
												"role"			: "All",
												"skills"		: "",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "Insanity Jam",
			"thumbnail"		: "images/thumbnails/insanity-jam.jpg",
			"type"				: "Website",
			"startDate"		: "March 1, 2014",
			"endDate"			: "November 10, 2014",
			"link"				: "http://insanityjam.com",
			"snippet"			: "Designed and built with HTML5, PHP, and Bootstrap for giving information about self-hosted game jam",
			"details"			: {
												"role"			: "All",
												"skills"		: "",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "DataFall",
			"thumbnail"		: "images/thumbnails/DataFall.jpg",
			"type"				: "Game",
			"startDate"		: "March 1, 2014",
			"endDate"			: "March 10, 2014",
			"link"				: "https://alamantus.itch.io/datafall",
			"snippet"			: "Designed and built with C# in Unity 3D for the 2014 Cyberpunk Jam (requires browser plugin to play)",
			"details"			: {
												"role"			: "All",
												"skills"		: "",
												"process"		: "",
												"lessons"		: ""
											}
		}
	];

	$scope.informationTitle = "About Me";
	$scope.information = [
		{
			"heading"	: "My Story",
			"text"		: "Blah blah blah."
		},
		{
			"heading"	: "My Interests",
			"text"		: "Blah blah blah."
		}
	];
});
