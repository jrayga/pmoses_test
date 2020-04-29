app.controller('Index', ['$scope', '$location', 'SessionFactory', '$window', '$anchorScroll', '$interval', '$timeout', function (
    $scope,
    $location,
    SessionFactory,
    $window,
    $anchorScroll,
    $interval,
    $timeout
) {
    $scope.yearNow = new Date().getFullYear()
    $scope.activeNav = "";

    $scope.loginKey = SessionFactory.authKey;
    $scope.adminKey = SessionFactory.adminAuthKey;

    $scope.isLoggedIn = false

    $scope.user = [];

    $scope.searchHospitalForm = {
        region: null,
        city: null,
        hospitalName: null
    };

    init();

    function init() {
        $scope.activeNav = $location.url()
        interceptRouteChanges();
        $scope.isLoggedIn = $scope.loginKey !== null || $scope.adminKey !== null ? true : false
        if ($scope.isLoggedIn) {
            $interval(checkToken, 300000)
        }
    }

    function interceptRouteChanges() {
        // intercept the route change event
        $scope.$on('$routeChangeStart', function (angularEvent, currentURL) {
            // check if the custom property exist
            $scope.hideMainTag = true
            $scope.activeNav = $location.url();
            if (currentURL.requireAuth && $scope.loginKey === null) {
                // user isn’t authenticated
                $location.path("/hospital-login");
            }
            if (currentURL.requireAdmin && $scope.adminKey === null) {
                $location.path("/admin/login");
            }
            if ($scope.loginKey !== null && $scope.adminKey === null) {
                if ($location.url() === '/admin' || $location.url() === '/admin/login') {
                    $location.path("/hospital-portal");
                }
            }
            resetDropDowns();
            $window.document.title = typeof currentURL.title === "string" ? currentURL.title : 'Project Moses'
            $anchorScroll("body");
            $timeout(function () {
                $scope.hideMainTag = false
            }, 1000)
            console.log($scope.hideMainTag)
        });
    }

    $scope.logOut = function () {
        localStorage.clear();
        $window.location = './#/';
        $window.location.reload()
    }

    $scope.scrollTo = function (divID) {
        // $location.hash();
        $anchorScroll.yOffset = 120;
        $anchorScroll(divID);
    }

    function resetDropDowns() {
        var wideLinkTracker = document.getElementById("navlink-trackers-w");
        var wideLinkCitizens = document.getElementById("navlink-citizens-w");
        var wideLinkNews = document.getElementById("navlink-news-w");
        var wideLinkResources = document.getElementById("navlink-resources-w");
        var widePanelTracker = document.getElementById("nav-trackers-w");
        var widePanelCitizens = document.getElementById("nav-citizens-w");
        var widePanelNews = document.getElementById("nav-news-w");
        var widePanelResources = document.getElementById("nav-resources-w");

        var menuTrigger = document.getElementById("mobile-nav-menulink");
        var menuPanel = document.getElementById("mobile-nav-dropdown");
        var secondaryMenu = document.getElementsByClassName("navlink");
        var mobLinkTracker = document.getElementById("navlink-trackers");
        var mobLinkCitizens = document.getElementById("navlink-citizens");
        var mobLinkNews = document.getElementById("navlink-news");
        var mobLinkResources = document.getElementById("navlink-resources");
        var mobPanelTracker = document.getElementById("nav-trackers");
        var mobPanelCitizens = document.getElementById("nav-citizens");
        var mobPanelNews = document.getElementById("nav-news");
        var mobPanelResources = document.getElementById("nav-resources");

        if (wideLinkTracker.classList.contains('dropdown-open')) {
            widePanelTracker.style.maxHeight = '0';
            wideLinkTracker.classList.remove('dropdown-open');
        }
        if (wideLinkCitizens.classList.contains('dropdown-open')) {
            widePanelCitizens.style.maxHeight = '0';
            wideLinkCitizens.classList.remove('dropdown-open');
        }
        if (wideLinkNews.classList.contains('dropdown-open')) {
            widePanelNews.style.maxHeight = '0';
            wideLinkNews.classList.remove('dropdown-open');
        }
        if (wideLinkResources.classList.contains('dropdown-open')) {
            widePanelResources.style.maxHeight = '0';
            wideLinkResources.classList.remove('dropdown-open');
        }

        if (menuTrigger.classList.contains('mobile-menu-open')) {
            if (mobLinkTracker.classList.contains('dropdown-active') || mobLinkCitizens.classList.contains('dropdown-active') || mobLinkNews.classList.contains('dropdown-active') || mobLinkResources.classList.contains('dropdown-active')) {
                mobLinkTracker.classList.remove('dropdown-active');
                mobLinkCitizens.classList.remove('dropdown-active');
                mobLinkNews.classList.remove('dropdown-active');
                mobLinkResources.classList.remove('dropdown-active');
                mobPanelTracker.style.maxHeight = '0';
                mobPanelCitizens.style.maxHeight = '0';
                mobPanelNews.style.maxHeight = '0';
                mobPanelResources.style.maxHeight = '0';
                menuPanel.style.transitionDelay = "200ms";
            }
            menuPanel.style.maxHeight = '0';
            menuTrigger.classList.remove('mobile-menu-open');
            menuPanel.style.transitionDelay = "0ms";
        }
    }

    $scope.dropDownClose = function (navLink, panel) {
        var wideLink = document.getElementById(navLink);
        var widePanel = document.getElementById(panel);
        if (wideLink.classList.contains('dropdown-open')) {
            widePanel.style.maxHeight = '0';
            wideLink.classList.remove('dropdown-open');
        }
        console.log("$scope.dropDownClose -> wideLink", wideLink)
        console.log("$scope.dropDownClose -> widePanel", widePanel)
    }

    function checkToken() {
        var jwtToken = $scope.loginKey !== null ? $scope.loginKey : $scope.adminKey;
        var redirectURL = $scope.loginKey !== null ? "./#/hospital-login" : "./#/admin/login";
        var jwtTokenDecoded = jwt_decode(jwtToken);
        var currentTime = Date.now().valueOf() / 1000;
        if (jwtTokenDecoded.exp < currentTime) {
            console.log("checkToken -> jwtTokenDecoded.exp, currentTime", jwtTokenDecoded.exp, currentTime)
            Swal.fire('Session Expired!', 'Please login again!', 'warning');
            localStorage.clear();
            $window.location = redirectURL
            $window.location.reload()
            /* expired */
        }
    }

    $scope.searchHospital = function () {
        $window.location = `#/hospital-directory/${$scope.searchHospitalForm.region}/${$scope.searchHospitalForm.city}/${$scope.searchHospitalForm.hospitalName}`;
    }

}])