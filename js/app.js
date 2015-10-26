var app = angular.module('shine', ['shine.directive']);


app.controller('flip', ['$scope', function ($scope) {


    var firstCard = document.getElementsByClassName("card")[0],
        secondCard = document.getElementsByClassName("card")[1],
        thirdCard = document.getElementsByClassName("card")[2],
        fourthCard = document.getElementsByClassName("card")[3];

    function myMethod () {

    }

    function blah () {
        //$('.card').addClass('animClass');
        //waits(myMethod, 2000);

        var waits = (constant.mode === 'timeout') ? $timeout : cssAnim;
        waits(function () {}, 2000)

        var tEvent = transitionEvent();
        tEvent && firstCard.addEventListener(tEvent, function () {
            myMethod();
        });

        $('.card').addClass('animClass');
    }


    var transitionEvent = function () {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
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

        var tEvent = transitionEvent();
        tEvent && firstCard.addEventListener(tEvent, function () {
            angular.element(secondCard).toggleClass('flipped');
        });
        tEvent && secondCard.addEventListener(tEvent, function () {
            angular.element(thirdCard).toggleClass('flipped');
        });
        tEvent && thirdCard.addEventListener(tEvent, function () {
            angular.element(fourthCard).toggleClass('flipped');
        });
        angular.element(firstCard).toggleClass('flipped');
    }

}]);

