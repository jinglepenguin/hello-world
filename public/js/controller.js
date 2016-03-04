

//var myApp = angular.module('penguinApp', []);

var myApp = angular.module('penguinApp', []).controller('ngRepeatCtrl', ngRepeatCtrl);

function ngRepeatCtrl($scope){
	$scope.characters = 
	[{name:'sakura',class:'mage'}, 
	{name:'tomoyo',class:'healer'}, 
	{name:'shaoran',class:'knight'}];

};

