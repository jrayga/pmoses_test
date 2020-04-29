app.controller("Trackers", ['$scope', '$location', function (
    $scope,
    $location
) {
    init()

    function init() {
        $scope.activeNav = $location.url();

        if ($scope.activeNav === '/doh-tracker') {
            var divElement = document.getElementById('viz1586753573273');
            var vizElement = divElement.getElementsByTagName('object')[0];
            vizElement.style.width = '910px';
            vizElement.style.height = '2127px';
            var scriptElement = document.createElement('script');
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);
        }
    }
}])