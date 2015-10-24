var app = angular.module('shine.filter', []);

app.filter('unsafe', function($sce)
{
    return function(val)
    {
        return $sce.trustAsHtml(val);
    };
});