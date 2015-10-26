var app = angular.module('shine.directive', ['shine.filter']);

/*FLIP CARD DIRECTIVE*/
app.directive('shineFlipcard',function () {
	return {
        restrict: "E",
        replace: true,
        // require: '^ngModel',
        template: '<div class="card"><div class="front" ng-bind-html="frontHTML | unsafe"></div><div class="back" ng-bind-html="backHTML | unsafe"></div></div>',
        scope: {
            shineX: '@',
            shineY: '@'
        },
        link: function (scope, element, attr) {
        	angular.element(element[0]).on('click',function(){

        		angular.element(this).toggleClass('flipped');

        	})

        },
        controller: function ($scope) {
            //This is called before link
            $scope.frontHTML = $scope.shineX;
        	$scope.backHTML = $scope.shineY;
        }
    }
});