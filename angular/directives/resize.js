app.directive('resize', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, controller) {
            angular.element(document).ready(function () {
                $(window).resize();
                $timeout(function () {
                    if (($(elem).height() + $('#main').height()) < $(window).height()) {
                        $(elem).css('height', ($(window).height() - $('#main').height()) + 'px');
                    }
                });
            });
        }
    };
});