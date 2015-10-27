var app = angular.module('shine', ['shine.directive']);


app.controller('flip', ['$scope','$timeout', function ($scope,$timeout) {


    var firstCard = document.getElementsByClassName("card")[0],
        secondCard = document.getElementsByClassName("card")[1],
        thirdCard = document.getElementsByClassName("card")[2],
        fourthCard = document.getElementsByClassName("card")[3];
        //delayType = 'timeout';  // css || timeout

    function customDelay (callbackFunction, timeDelay, domElt,delayType) {
        var tEvent = transitionEvent();
        if(delayType === 'css'){
            tEvent && domElt.addEventListener(tEvent, callbackFunction);
        }else if(delayType === 'timeout'){
            $timeout(callbackFunction,timeDelay);
        }
    }

    var transitionEvent = function () {
        var t,
            el = document.createElement('fakeelement'),
            transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };

    $scope.flip = function () {
        var cc_css = function(){
            angular.element(secondCard).toggleClass('flipped');
        };
        var cc_time = function(){
            angular.element(thirdCard).toggleClass('flipped');
        };
        customDelay(cc_css,1000,firstCard,'css');
        customDelay(cc_time,2000,firstCard,'timeout');
        angular.element(firstCard).toggleClass('flipped');
    }

}]);

