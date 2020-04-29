"use strict";

var app = angular.module('onload', [
    'ngRoute',
    'isteven-multi-select',
    'ngDialog',
    'angularFileUpload',
    'angularCSS'
]);
app.config(['$routeProvider', function ($routeProvider) {
    var pageTitle = {
        welcome: "Welcome to Project Moses | Stay Safe, Philippines!",
        selfTriage: "COVID-19 Self Assessment and Triage Tool | Project Moses",
        hospitalDirectory: "Hospital Directory | Project Moses",
        newsMedia: "News Media Aggregator | Project Moses",
        hospitalDetails: "HOSPITAL NAME | Project Moses",
        hospitalLogin: "Please Log In to the Hospital Portal | Project Moses",
        requestAccess: "Apply for Access to the Hospital Portal | Project Moses",
        hospitalPortal: "Hospital Portal | Project Moses",
        updateHospitalInfo: "Update Hospital Information | Project Moses",
        appsTracker: "COVID-19 Apps | Project Moses",
        faqs: "Frequently Asked Questions | Project Moses",
        dohTracker: "DOH COVID-19 Case Tracker | Project Moses",
        jhuTracker: "Johns Hopkins Interactive Map | Project Moses",
        about: "About the Project | Project Moses",
        officialStatements: "Official Statements Archive | Project Moses",
        emergingResearch: "Emerging Research | Project Moses",
        governmentAnnouncements: "Government Announcements | Project Moses",
        usefulLinks: "Useful Links | Project Moses",
        updateCase: "Update Patient Case | Project Moses",
        citizenPatrol: {
            clinics: "Citizens Patrol - Clinics | Project Moses",
            grocery: "Citizens Patrol - Grocery Stores | Project Moses",
            pharmacies: "Citizens Patrol - Pharmacies | Project Moses",
            roads: "Citizens Patrol - Roads | Project Moses",
            submitReport: "Submit Citizen's Report | Project Moses"
        }
    };

    $routeProvider
        .when('/', {
            title: pageTitle.welcome,
            templateUrl: 'views/dashboard/main-page.html',
            css: [
                {
                    href: 'ASSETS/css/home.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/self-triage', {
            title: pageTitle.selfTriage,
            controller: 'SelfTriage',
            templateUrl: 'views/self-triage/self-triage.html',
            css: [
                {
                    href: 'ASSETS/css/triage.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/hospital-directory/:region/:city/:hospitalName', {
            title: pageTitle.hospitalDirectory,
            controller: 'HospitalDirectory',
            templateUrl: 'views/hospital-directory/hospital-directory.html',
            css: [
                {
                    href: 'ASSETS/css/hospital-directory.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/news-media', {
            title: pageTitle.newsMedia,
            controller: 'NewsMedia',
            templateUrl: 'views/dashboard/news-media.html',
            css: {
                href: 'ASSETS/css/news-media.css',
                method: 'append',
                persist: false,
                preload: true,
                bustCache: true
            }
        })
        .when('/hospital-details/:hospital_id', {
            title: pageTitle.hospitalDetails,
            controller: 'HospitalDetails',
            templateUrl: 'views/hospital-directory/hospital-details.html',
            css: [
                {
                    href: 'ASSETS/css/hospital-directory.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/hospital-login', {
            title: pageTitle.hospitalLogin,
            controller: 'HospitalPortal',
            templateUrl: 'views/hospital-portal/hospital-login.html',
            css: [
                {
                    href: 'ASSETS/css/hospital-portal.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/request-access', {
            title: pageTitle.requestAccess,
            controller: 'HospitalPortal',
            templateUrl: 'views/hospital-portal/request-access.html',
            css: [
                {
                    href: 'ASSETS/css/hospital-portal.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/hospital-portal', {
            title: pageTitle.hospitalPortal,
            controller: 'HospitalPortal',
            templateUrl: 'views/hospital-portal/hospital-dashboard.html',
            requireAuth: true,
            css: [
                {
                    href: 'ASSETS/css/hospital-portal.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/update-hospital-info', {
            title: pageTitle.updateHospitalInfo,
            controller: 'HospitalPortal',
            templateUrl: 'views/hospital-portal/update-hospital-info.html',
            requireAuth: true,
            css: [
                {
                    href: 'ASSETS/css/hospital-portal.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/admin', {
            controller: 'Admin',
            templateUrl: 'views/admin/dashboard.html',
            requireAdmin: true,
            css: [
                {
                    href: 'ASSETS/css/admin-page.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/admin-table.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/admin/login', {
            controller: 'Admin',
            templateUrl: 'views/admin/login.html',
            css: {
                href: 'ASSETS/css/admin-page.css',
                method: 'append',
                persist: false,
                preload: true,
                bustCache: true
            }
        })
        .when('/resources/apps-tracker', {
            title: pageTitle.appsTracker,
            templateUrl: 'views/resources/apps-tracker.html'
        })
        .when('/resources/faqs', {
            title: pageTitle.faqs,
            controller: 'Resources',
            templateUrl: 'views/resources/faqs.html'
        })
        .when('/doh-tracker', {
            title: pageTitle.dohTracker,
            controller: 'Trackers',
            templateUrl: 'views/trackers/doh-tracker.html'
        })
        .when('/jhu-tracker', {
            title: pageTitle.jhuTracker,
            templateUrl: 'views/trackers/jhu-tracker.html'
        })
        .when('/about', {
            title: pageTitle.about,
            templateUrl: 'views/dashboard/about-project-moses.html'
        })
        .when('/resources/official-statements', {
            title: pageTitle.officialStatements,
            templateUrl: 'views/resources/statements.html'
        })
        .when('/government-announcements', {
            title: pageTitle.governmentAnnouncements,
            templateUrl: 'views/dashboard/government-announcements.html'
        })
        .when('/resources/useful-links', {
            title: pageTitle.usefulLinks,
            templateUrl: 'views/resources/useful-links.html'
        })
        .when('/resources/emerging-research', {
            title: pageTitle.emergingResearch,
            templateUrl: 'views/resources/emerging-research.html'
        })
        .when('/citizen-patrol/clinics', {
            title: pageTitle.citizenPatrol.clinics,
            controller: 'Clinics',
            templateUrl: 'views/citizen-patrol/clinics.html',
            css: [
                {
                    href: 'ASSETS/css/citizens-patrol.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/citizen-patrol/grocery', {
            title: pageTitle.citizenPatrol.grocery,
            controller: 'Grocery',
            templateUrl: 'views/citizen-patrol/grocery.html',
            css: [
                {
                    href: 'ASSETS/css/citizens-patrol.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/citizen-patrol/pharmacies', {
            title: pageTitle.citizenPatrol.pharmacies,
            controller: 'Pharmacies',
            templateUrl: 'views/citizen-patrol/pharmacies.html',
            css: [
                {
                    href: 'ASSETS/css/citizens-patrol.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/citizen-patrol/roads', {
            title: pageTitle.citizenPatrol.roads,
            controller: 'Roads',
            templateUrl: 'views/citizen-patrol/roads.html',
            css: [
                {
                    href: 'ASSETS/css/citizens-patrol.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        .when('/citizen-patrol/submit-report', {
            title: pageTitle.citizenPatrol.submitReport,
            controller: 'SubmitReport',
            templateUrl: 'views/citizen-patrol/submit-report.html',
            css: [
                {
                    href: 'ASSETS/css/citizens-patrol.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                },
                {
                    href: 'ASSETS/css/responsive.min.css',
                    method: 'append',
                    persist: false,
                    preload: true,
                    bustCache: true
                }
            ]
        })
        // .when('/update-case/:case_id', {
        //     title: pageTitle.updateCase,
        //     controller: 'HospitalPortal',
        //     templateUrl: 'views/hospital-portal/update-case.html',
        //     requireAuth: true
        // })
        .otherwise({
            redirectTo: '/'
        })
}]);
app.controller("Admin", ['$scope', '$window', 'SessionFactory', '$location', 'AdminFactory', 'ngDialog', 'FileUploader', 'PagerService', function (
    $scope,
    $window,
    SessionFactory,
    $location,
    AdminFactory,
    ngDialog,
    FileUploader,
    PagerService
) {
    $scope.adminKey = SessionFactory.adminAuthKey;
    $scope.isAdmin = true;

    $scope.currentURL = $location.url();

    $scope.isLoading = false

    $scope.loginForm = {
        username: "",
        password: ""
    }

    $scope.hospitals = [];
    $scope.apps = [];
    $scope.researches = [];
    $scope.annoucements = [];
    $scope.submissions = [];
    $scope.requestAccess = []

    $scope.adminPages = [
        {
            section: "apps",
            name: "Add App(s) (Covid19 Apps)",
            active: false
        },
        {
            section: "researches",
            name: "Add Research(s) (Emerging Research)",
            active: false
        },
        {
            section: "annoucements",
            name: "Add Government Announcement(s) (Government Announcements)",
            active: false
        },
        {
            section: "submissions",
            name: "Hospital Request Access Submissions",
            active: true
        },
        {
            section: "hospitals",
            name: "Approved Users",
            active: false
        }
    ];

    $scope.sections = {
        apps: false,
        researches: false,
        annoucements: false,
        submissions: true,
        hospitals: false
    }

    $scope.form = {
        hospital_name: '',
        person_name: '',
        department: '',
        profession: '',
        position: '',
        username: '',
        password: '',
        email: '',
        contact_num: ''
    }

    $scope.uploadingImage = false;
    $scope.appImageUpload = {};
    $scope.appImageUpload.queue = {};

    // $scope.pager = {};
    // $scope.setPage = setPage

    init();

    function init() {
        if ($scope.adminKey !== null) {
            if ($scope.sections.submissions || $scope.sections.hospitals) {
                getHospitals()
            }
            if ($scope.sections.apps) {
            }
            if ($scope.sections.annoucements) {
            }
            if ($scope.sections.researches) {
            }
        }
    }

    function getAdminDetails() {
        var dataForm = {
            public_id: '',
            adminKey: $scope.adminKey
        };
        $scope.isLoading = true
        var promise = AdminFactory.getAdminDetails(dataForm)
        promise.then(function (data) {
            console.log("getAdminDetails -> data", data)
        }).catch(function (error) {
            $scope.isLoading = false
            console.log("getHospitals -> error", error)
        })
    }

    function getHospitals() {
        var dataForm = {
            adminKey: $scope.adminKey
        }
        $scope.isLoading = true
        if ($scope.sections.submissions) {
            var promise = AdminFactory.getHospitals(dataForm)
            promise.then(function (data) {
                $scope.requestAccess = data.data.data
                $scope.isLoading = false
                console.log("getHospitalRequests -> $scope.requestAccess", $scope.requestAccess)
                console.log("getHospitals -> data", data.data)
            }).catch(function (error) {
                $scope.isLoading = false
                console.log("getHospitals -> error", error)
            })
        } else if ($scope.sections.hospitals) {
            dataForm.approved = true;
            var promise = AdminFactory.getHospitals(dataForm)
            promise.then(function (data) {
                $scope.hospitals = data.data.data
                // setPage(1)
                $scope.isLoading = false
                console.log("getHospitals -> $scope.hospitals", $scope.hospitals)
                console.log("getHospitals -> data", data.data)
            }).catch(function (error) {
                $scope.isLoading = false
                console.log("getHospitals -> error", error)
            })
        }
        console.log($scope.sections)
    }

    $scope.loginAdmin = function () {
        for (var i in $scope.loginForm) {
            if ($scope.loginForm[i] === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Please fill up all the forms!',
                    text: 'Check the forms and try again',
                })
                return false
            }
        }
        $scope.loginForm.hospital = false;
        $scope.isLoading = true
        var promise = SessionFactory.login($scope.loginForm)
        promise.then(function (data) {
            console.log("$scope.login -> data", data)
            var accessToken = data.data.access_token;
            localStorage.clear();
            localStorage.setItem("adminAuthKey", accessToken)
            $window.location = './#/admin';
            $window.location.reload();
            $scope.isLoading = false
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An error occured!',
                text: error.data
            })
            console.log("$scope.login -> error", error)
            $scope.isLoading = false
        })
    }

    $scope.changeStatus = function (hospitalId, status) {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to ${status} this access request?`,
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            console.log("$scope.changeStatus -> hospitalId, status", hospitalId, status)
            if (result.value) {
                var formData = {
                    info: {
                        public_id: hospitalId,
                    },
                    status: status,
                    adminKey: $scope.adminKey
                };
                console.log("$scope.changeStatus -> formData", formData)
                var promise = AdminFactory.updateHospitalRequestStatus(formData)
                promise.then(function () {
                    Swal.fire(
                        'Approve!',
                        `The hospital access request was ${status}`,
                        'success'
                    );
                    getHospitals();
                }).catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'An error occured!',
                        text: error.data
                    })
                    console.log("$scope.login -> error", error)
                })
            }
        })
    }

    $scope.deleteHospital = function (hospitalId) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to delete this hospital info?',
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                var formData = {
                    info: {
                        public_id: hospitalId
                    },
                    adminKey: $scope.adminKey
                };
                console.log("$scope.changeStatus -> formData", formData)
                var promise = AdminFactory.deleteHospitalInfo(formData)
                promise.then(function () {
                    getHospitals();
                    Swal.fire(
                        'Deleted!',
                        'Hospital info and account has successfully deleted',
                        'success'
                    );
                }).catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'An error occured!',
                        text: error.data
                    })
                    console.log("$scope.login -> error", error)
                })
            }
        })
    }

    $scope.switchTable = function (v) {
        for (var s in $scope.sections) {
            $scope.sections[s] = false
        }
        for (var p in $scope.adminPages) {
            $scope.adminPages[p].active = false
        }
        $scope.sections[v.section] = true;
        v.active = v.active === true ? false : true
        init()
        console.log("$scope.switchTable -> $scope.adminPages", $scope.adminPages)
        console.log("$scope.switchTable ->  $scope.sections", $scope.sections)
        console.log("$scope.switchTable -> v", v)
    }

    $scope.addHospital = function (method) {
        $scope.appTemplateMSG = method === 'add' ? 'Add New Hospital' : 'Edit Hospital Details'
        var templateMSG = method === 'add' ? 'Are you sure you want to add this hospital?' : 'Save edited details?'

        ngDialog.openConfirm({
            template: 'AddOrEditHospitals',
            className: 'ngdialog-theme-plain',
            preCloseCallback: function () {
                var nestedConfirmDialog = ngDialog.openConfirm({
                    template: `<p>${templateMSG}</p>` +
                        '<div class="ngdialog-buttons">' +
                        '<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>' +
                        '<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>' +
                        '</div>',
                    plain: true,
                    className: 'ngdialog-theme-plain'
                });
                return nestedConfirmDialog;
            },
            scope: $scope,
            showClose: false,
            closeByEscape: false,
            closeByNavigation: false,
            closeByDocument: false
        }).then(function () {
            $scope.form = {};
            return false;
        }, function () {
            if (
                $scope.form.hospital_name === ''
                || $scope.form.person_name === ''
                || $scope.form.department === ''
                || $scope.form.profession === ''
                || $scope.form.position === ''
                || $scope.form.username === ''
                || $scope.form.password === ''
                || $scope.form.email === ''
                || $scope.form.contact_num === ''
            ) {
                Swal.fire('Warning!', 'Please fill up all the forms!', 'warning');
            } else {
                var dataForm = {
                    adminKey: $scope.adminKey,
                    info: $scope.form
                }
                $scope.isLoading = true
                var promise = AdminFactory.addHospital(dataForm)
                promise.then(function () {
                    Swal.fire('Success!', 'New Hospital Added!', 'success');
                    $scope.isLoading = false
                    $window.location.reload();
                }).catch(function (error) {
                    console.log("$scope.addHospital -> error", error)
                    $scope.isLoading = false
                    Swal.fire('Error!', 'An error occured! Please try again.', 'error');
                })
            }
            console.log($scope.form)
        })
    }

    $scope.addEditApp = function (method) {
        $scope.appTemplateMSG = method === 'add' ? 'Add New App' : 'Edit App Details'
        var templateMSG = method === 'add' ? 'Are you sure you want to add this app?' : 'Save edited details?'

        ngDialog.openConfirm({
            template: 'AddOrEditApp',
            className: 'ngdialog-theme-plain',
            preCloseCallback: function () {
                var nestedConfirmDialog = ngDialog.openConfirm({
                    template: `<p>${templateMSG}</p>` +
                        '<div class="ngdialog-buttons">' +
                        '<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>' +
                        '<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>' +
                        '</div>',
                    plain: true,
                    className: 'ngdialog-theme-plain'
                });
                return nestedConfirmDialog;
            },
            scope: $scope,
            showClose: false,
            closeByEscape: false,
            closeByNavigation: false,
            closeByDocument: false
        }).then(function () {
            $scope.form = {};
            return false;
        }, function () {
            console.log($scope.form)
        })
    }

    $scope.addEditResearch = function (method) {
        $scope.appTemplateMSG = method === 'add' ? 'Add New Emerging Research' : 'Edit Emerging Research Details'
        var templateMSG = method === 'add' ? 'Are you sure you want to add this research?' : 'Save edited details?'

        ngDialog.openConfirm({
            template: 'AddOrEditResearch',
            className: 'ngdialog-theme-plain',
            preCloseCallback: function () {
                var nestedConfirmDialog = ngDialog.openConfirm({
                    template: `<p>${templateMSG}</p>` +
                        '<div class="ngdialog-buttons">' +
                        '<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>' +
                        '<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>' +
                        '</div>',
                    plain: true,
                    className: 'ngdialog-theme-plain'
                });
                return nestedConfirmDialog;
            },
            scope: $scope,
            showClose: false,
            closeByEscape: false,
            closeByNavigation: false,
            closeByDocument: false
        }).then(function () {
            $scope.form = {};
            return false;
        }, function () {
            console.log($scope.form)
        })
    }

    $scope.addEditAnnouncement = function (method) {
        $scope.appTemplateMSG = method === 'add' ? 'Add New Government Announcement' : 'Edit Government Announcement Details'
        var templateMSG = method === 'add' ? 'Are you sure you want to add this announcement?' : 'Save edited details?'

        ngDialog.openConfirm({
            template: 'AddOrEditAnnouncement',
            className: 'ngdialog-theme-plain',
            preCloseCallback: function () {
                var nestedConfirmDialog = ngDialog.openConfirm({
                    template: `<p>${templateMSG}</p>` +
                        '<div class="ngdialog-buttons">' +
                        '<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>' +
                        '<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>' +
                        '</div>',
                    plain: true,
                    className: 'ngdialog-theme-plain'
                });
                return nestedConfirmDialog;
            },
            scope: $scope,
            showClose: false,
            closeByEscape: false,
            closeByNavigation: false,
            closeByDocument: false
        }).then(function () {
            $scope.form = {};
            return false;
        }, function () {
            console.log($scope.form)
        })
    }

    var appImageUpload = $scope.appImageUpload = new FileUploader({
        url: ''
    });
    appImageUpload.filters.push({
        name: 'enforceMaxFileSize',
        fn: function (item) {
            return item.size <= 5000000;
        }
    });
    appImageUpload.filters.push({
        name: 'imageFilter',
        fn: function (item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return "|png|jpg|".indexOf(type) !== -1;
        }
    });
    appImageUpload.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {

    };
    appImageUpload.onAfterAddingFile = function (fileItem) {

    };
    appImageUpload.onAfterAddingAll = function (addedFileItems) { };
    appImageUpload.onBeforeUploadItem = function (item) {

    };
    appImageUpload.onProgressItem = function (fileItem, progress) { };
    appImageUpload.onProgressAll = function (progress) { };
    appImageUpload.onSuccessItem = function (fileItem, response, status, headers) { };
    appImageUpload.onErrorItem = function (fileItem, response, status, headers) { };
    appImageUpload.onCancelItem = function (fileItem, response, status, headers) { };
    appImageUpload.onCompleteItem = function (fileItem, response, status, headers) {

    };
    appImageUpload.onCompleteAll = function () { };

    // function setPage(page) {
    //     if (page < 1 || page > $scope.pager.totalPages) {
    //         return;
    //     }
    //     if ($scope.sections.submissions || $scope.sections.hospitals) {
    //         console.log($scope.hospitals)
    //         $scope.pager = PagerService.GetPager($scope.hospitals.length, page);
    //         var hospitals = $scope.hospitals.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
    //         console.log("setPage -> hospitals", hospitals)
    //         $scope.hospitals = hospitals
    //     }
    //     if ($scope.sections.apps) {
    //     }
    //     if ($scope.sections.annoucements) {
    //     }
    //     if ($scope.sections.researches) {
    //     }
    // }

}])
app.controller("Clinics", ['$scope', function (
    $scope
) {

}]);
app.controller("Grocery", ['$scope', function (
    $scope
) {

}]);
app.controller('HospitalDetails', ['$scope', '$routeParams', 'HospitalDirectoryFactory', function (
    $scope,
    $routeParams,
    HospitalDirectoryFactory
) {
    $scope.hospital_public_id = $routeParams.hospital_id
    $scope.isLoadingDetails = false
    $scope.hospitalDetails = {};

    init();

    function init() {
        $scope.isLoadingDetails = true
        getParamters();
    }

    function getParamters() {
        console.log($scope.hospital_public_id)
        if ($scope.hospital_public_id !== null) {
            getHospitalDetails();
        } else {
            $window.location = '#/hospital-directory';
        }
    }

    function getHospitalDetails() {
        var dataForm = {
            public_id: $scope.hospital_public_id
        }
        $scope.isLoadingDetails = true;
        var promise = HospitalDirectoryFactory.getHospitalDetails(dataForm)
        promise.then(function (data) {
            $scope.hospitalDetails = data.data.data;
            $scope.hospitalDetails.contact_num = $scope.hospitalDetails.contact_num.split(";");
            console.log("getHospitalDetails ->  $scope.hospitalDetails", $scope.hospitalDetails)
            $scope.isLoadingDetails = false;
        }).catch(function (error) {
            $window.location = '#/hospital-directory';
            $scope.isLoadingDetails = false;
            console.log("getHospitalDetails -> error", error)
        })
    }

}])
app.controller('HospitalDirectory', ['$scope', '$window', '$routeParams', 'HospitalDirectoryFactory', function (
    $scope,
    $window,
    $routeParams,
    HospitalDirectoryFactory
) {

    $scope.quickFilterButtons = {
        acp: {
            background: "",
            color: ""
        },
        rs: {
            background: "",
            color: ""
        },
        dch: {
            background: "",
            color: ""
        },
        apt: {
            background: "",
            color: ""
        }
    }

    $scope.filter = {
        sortBy: ""
    }

    $scope.quickFilters = {
        acp: false,
        rs: false,
        dch: false,
        apt: false,
        readinessScores: []
    }

    $scope.inputedSearchForm = {};
    $scope.hospitals = [];

    $scope.isLoading = false
    $scope.isLoadingHospitals = false

    $scope.readinessScores = [
        { name: "1.0 - 2.0", ticked: false },
        { name: "3.0 - 4.0", ticked: false },
        { name: "5.0 - 6.0", ticked: false },
        { name: "7.0 - 8.0", ticked: false },
        { name: "9.0 - 10.0", ticked: false }
    ];

    $scope.displayFields = {
        region: false,
        city: false,
        hospitalName: false
    }

    init();

    function init() {
        getAllHospitals();
    }

    function getInputedSearchForm() {
        for (var s in $routeParams) {
            if ($routeParams[s] !== "null") {
                $scope.inputedSearchForm = $routeParams
            }
        }
        if (typeof ($scope.inputedSearchForm) === 'object') {
            if (JSON.stringify($scope.inputedSearchForm) !== '{}') {
                addInitialFilters();
                console.log("getInputedSearchForm -> $scope.inputedSearchForm", $scope.inputedSearchForm)
            }
        }
    }

    function getAllHospitals() {
        $scope.isLoadingHospitals = true
        var promise = HospitalDirectoryFactory.getAllHospitals()
        promise.then(function (data) {
            var initialHospitals = data.data.data
            var hospitals = alasql(`SELECT * from ? WHERE hospital_public_id IS NOT NULL`, [initialHospitals]);

            for (var h in hospitals) {
                if (hospitals[h].contact_num) {
                    hospitals[h].contact_num = hospitals[h].contact_num.split(";");
                }
            }

            $scope.hospitals = hospitals
            console.log("getAllHospitals -> $scope.hospitals", $scope.hospitals)
            console.log("getAllHospitals -> hospitals", hospitals)
            getInputedSearchForm();
            $scope.isLoadingHospitals = false
        }).catch(function (error) {
            console.log("getAllHospitals -> error", error)
            $scope.isLoadingHospitals = false
        })
    }

    function addInitialFilters() {
        if ($scope.hospitals.length > 0) {
            $scope.isLoadingHospitals = true
            var region = $scope.inputedSearchForm.region !== "null" ? `AND address_1 LIKE '%${$scope.inputedSearchForm.region}%'` : '';
            var city = $scope.inputedSearchForm.city !== "null" ? `AND address_2 LIKE '%${$scope.inputedSearchForm.city}%'` : '';
            var hospitalName = $scope.inputedSearchForm.hospitalName !== "null" ? `AND hospital_name LIKE '%${$scope.inputedSearchForm.hospitalName}%'` : '';
            var initialQueryResults = alasql(`SELECT * from ? WHERE hospital_public_id IS NOT NULL ${region} ${city} ${hospitalName}`, [$scope.hospitals])
            $scope.hospitals = initialQueryResults
            $scope.isLoadingHospitals = false
        }
    }

    $scope.setReadinessScore = function (method) {
        if (method === 'all') {
            console.log($scope.quickFilters.readinessScores)
        } else if (method === 'reset') {
            console.log($scope.quickFilters.readinessScores)
        } else {
            console.log($scope.quickFilters.readinessScores)
        }
    }

    $scope.removeDisplay = function (field) {
        $scope.displayFields[field] = true
        $scope.inputedSearchForm[field] = "null";
        var fieldCounter = 0;
        for (var f in $scope.inputedSearchForm) {
            if ($scope.inputedSearchForm[f] === 'null') {
                fieldCounter++;
            }
        }
        if (fieldCounter === 3) {
            for (var d in $scope.displayFields) {
                if ($scope.displayFields[d]) {
                    $scope.displayFields[d] = false
                }
            }
            for (var f in $scope.inputedSearchForm) {
                if ($scope.inputedSearchForm[f]) {
                    $scope.inputedSearchForm[f] = 'null'
                }
            }
            $window.location = './#/hospital-directory/null/null/null';
        }
        if ($scope.displayFields.region && $scope.displayFields.city && $scope.displayFields.hospitalName) {
            $window.location = './#/hospital-directory/null/null/null';
        }
    }

    $scope.quickFilterButton = function (btn) {
        if (btn === 'ACP') {
            if ($scope.quickFilterButtons.acp.background !== "") {
                $scope.quickFilterButtons.acp = {
                    background: "",
                    color: ""
                }
            } else {
                $scope.quickFilterButtons.acp = {
                    background: "#1a4456",
                    color: "#ffffff"
                }

            }
            $scope.quickFilters.acp = $scope.quickFilters.acp === false ? true : false
        } else if (btn === 'RS') {
            if ($scope.quickFilterButtons.rs.background !== "") {
                $scope.quickFilterButtons.rs = {
                    background: "",
                    color: ""
                }
            } else {
                $scope.quickFilterButtons.rs = {
                    background: "#e17646",
                    color: "#ffffff"
                }

            }
            $scope.quickFilters.rs = $scope.quickFilters.rs === false ? true : false
        } else if (btn === 'DCH') {
            if ($scope.quickFilterButtons.dch.background !== "") {
                $scope.quickFilterButtons.dch = {
                    background: "",
                    color: ""
                }
            } else {
                $scope.quickFilterButtons.dch = {
                    background: "#47b6e6",
                    color: "#ffffff"
                }

            }
            $scope.quickFilters.dch = $scope.quickFilters.dch === false ? true : false
        } else if (btn === 'APT') {
            if ($scope.quickFilterButtons.apt.background !== "") {
                $scope.quickFilterButtons.apt = {
                    background: "",
                    color: ""
                }
            } else {
                $scope.quickFilterButtons.apt = {
                    background: "#191b4a",
                    color: "#ffffff"
                }

            }
            $scope.quickFilters.apt = $scope.quickFilters.apt === false ? true : false
        }
        quickFilterHospitals()
    }

    function quickFilterHospitals() {
        if ($scope.hospitals.length > 0) {
            $scope.isLoadingHospitals = true
            var acp = $scope.quickFilters.acp === true ? "AND admitting_confirmed = 'yes' " : '';
            var rs = $scope.quickFilters.rs === true ? "AND requesting_supplies = 'yes' " : '';
            var dch = $scope.quickFilters.dch === true ? "AND designated_for_covid = 'yes' " : '';
            var apt = $scope.quickFilters.apt === true ? "AND accepting_for_test = 'yes' " : '';
            var filterButtonsData = alasql(`SELECT * from ? WHERE hospital_public_id IS NOT NULL ${acp} ${rs} ${dch} ${apt}`, [$scope.hospitals]);
            $scope.hospitals = filterButtonsData;
            console.log("quickFilterHospitals -> $scope.hospitals", $scope.hospitals)
            $scope.isLoadingHospitals = false
        }
    }

    $scope.sortBySelect = function () {
        if ($scope.hospitals.length > 0) {
            $scope.isLoadingHospitals = true
            var sortByFilterAZHospitalName = $scope.filter.sortBy === 'Hospital Name (A to Z)' ? 'ORDER BY hospital_name ASC' : '';
            var sortByFilterZAHospitalName = $scope.filter.sortBy === 'Hospital Name (Z to A)' ? 'ORDER BY hospital_name DESC' : '';
            var sortByFilterHighLow = $scope.filter.sortBy === 'COVID 19 Patients (High to Low)' ? 'ORDER BY num_confirmed_covid DESC' : '';
            var sortByFilterLowHigh = $scope.filter.sortBy === 'COVID 19 Patients (Low to High)' ? 'ORDER BY num_confirmed_covid ASC' : '';
            var sortByData = alasql(`SELECT * from ? WHERE hospital_public_id IS NOT NULL ${sortByFilterAZHospitalName} ${sortByFilterZAHospitalName} ${sortByFilterHighLow} ${sortByFilterLowHigh}`, [$scope.hospitals]);
            $scope.hospitals = sortByData;
            console.log("$scope.sortBySelect -> $scope.hospitals", $scope.hospitals)
            $scope.isLoadingHospitals = false
        }
    }

    $scope.goToDetails = function (hospital_public_id) {
        console.log("$scope.goToDetails -> hospital_public_id", hospital_public_id)
        $window.location = `#/hospital-details/${hospital_public_id}`;
    }

}])
app.controller('HospitalPortal', ['$scope', '$location', 'HospitalPortalFactory', 'SessionFactory', '$window', '$routeParams', '$anchorScroll', function (
    $scope,
    $location,
    HospitalPortalFactory,
    SessionFactory,
    $window,
    $routeParams,
    $anchorScroll
) {
    $scope.loginKey = SessionFactory.authKey;
    $scope.isAdmin = SessionFactory.adminAuthKey !== null ? true : false

    $scope.currentURL = $location.url()

    $scope.isLoadingDetails = false
    $scope.isLoggedIn = false
    $scope.isLoading = false
    $scope.isLoadingCases = false

    $scope.patientCaseId = "";

    $scope.loginForm = {
        username: "",
        password: "",
        hospital: false
    };

    $scope.requestAccessForm = {
        contact_num: "",
        department: "",
        email: "",
        hospital_name: "",
        password: "",
        person_name: "",
        position: "",
        profession: "",
        username: ""
    };

    $scope.dashboardFilters = {
        caseID: '',
        selfAssessment: '',
        location: '',
        age: '',
        comorbidity: '',
        sysmptomSeverity: '',
        exposure: '',
        caseStatus: '',
        caseFilter: 'All Cases',
        searchFilter: ''
    };

    $scope.hospitalInfo = {
        accepting_for_test: "",
        address_1: "",
        address_2: "",
        address_3: "",
        admitting_confirmed: "",
        contact_num: "",
        date_created: "",
        designated_for_covid: "",
        hospital_id: 0,
        hospital_name: "",
        id: 0,
        morgue: "",
        notes: "",
        num_alcohol: 0,
        num_ambulance: 0,
        num_beds_confirmed: 0,
        num_beds_pui: 0,
        num_body_bags: 0,
        num_confirmed_covid: 0,
        num_covid_kits: 0,
        num_doctors_for_covid: 0,
        num_face_masks: 0,
        num_face_shield: 0,
        num_hoods: 0,
        num_medstaff_for_covid: 0,
        num_nurses_for_covid: 0,
        num_pui: 0,
        num_ventilators: 0,
        num_shoe_covers: 0,
        num_surgical_gloves: 0,
        public_id: "",
        requesting_supplies: "",
        num_antibody_testing_kits: 0,
        num_of_disinfectants: 0,
        num_of_goggles: 0,
        num_morgue_freezers_space: 0,
        num_negative_pressure_rooms: 0
    };

    $scope.mockData = [{
        case_id: "6HYO64",
        self_assessment_date_time: "2019-09-20 17:37:04",
        location: "Qiaobian",
        age: 21,
        comorbidity: false,
        sysmptom_severity: "yes",
        exposure_to_covid: "yes",
        case_status: "self assessed",
        archived: false
    }, {
        case_id: "3KVLT",
        self_assessment_date_time: "2019-08-02 05:27:35",
        location: "Sendangagung",
        age: 22,
        comorbidity: true,
        sysmptom_severity: "no",
        exposure_to_covid: "no + ILI",
        case_status: "dropped",
        archived: false
    }, {
        case_id: "2NMMF3",
        self_assessment_date_time: "2019-05-19 11:47:23",
        location: "Yasothon",
        age: 23,
        comorbidity: true,
        sysmptom_severity: "yes",
        exposure_to_covid: "yes",
        case_status: "confirmed",
        archived: false
    }, {
        case_id: "B90OXT",
        self_assessment_date_time: "2019-07-12 03:15:10",
        location: "Zainsk",
        age: 24,
        comorbidity: true,
        sysmptom_severity: "no",
        exposure_to_covid: "no + ILI",
        case_status: "management in-progress",
        archived: false
    }, {
        case_id: "WPHJJB",
        self_assessment_date_time: "2020-01-03 14:11:10",
        location: "Hoeryŏng",
        age: 25,
        comorbidity: true,
        sysmptom_severity: "no",
        exposure_to_covid: "no + ILI",
        case_status: "unreachable",
        archived: false
    }, {
        case_id: "N2U6E9",
        self_assessment_date_time: "2019-07-22 10:09:52",
        location: "La Palma",
        age: 26,
        comorbidity: false,
        sysmptom_severity: "yes",
        exposure_to_covid: "yes",
        case_status: "dismissed",
        archived: false
    }, {
        case_id: "0PLVGD",
        self_assessment_date_time: "2020-02-26 22:56:02",
        location: "Jepuro",
        age: 27,
        comorbidity: false,
        sysmptom_severity: "no",
        exposure_to_covid: "no + ILI",
        case_status: "managed elsewhere",
        archived: false
    }, {
        case_id: "EQMSJP",
        self_assessment_date_time: "2019-12-13 16:55:34",
        location: "Thị Trấn Ngan Dừa",
        age: 28,
        comorbidity: true,
        sysmptom_severity: "yes",
        exposure_to_covid: "yes",
        case_status: "referred elsewhere",
        archived: false
    }, {
        case_id: "1RCFPZ",
        self_assessment_date_time: "2019-12-07 20:41:05",
        location: "San Vicente",
        age: 29,
        comorbidity: true,
        sysmptom_severity: "no",
        exposure_to_covid: "yes + ILI",
        case_status: "recovered",
        archived: false
    }, {
        case_id: "AZ0YDC",
        self_assessment_date_time: "2019-09-22 03:29:56",
        location: "Andkhōy",
        age: 30,
        comorbidity: true,
        sysmptom_severity: "no",
        exposure_to_covid: "yes + ILI",
        case_status: "deceased",
        archived: false
    }];

    $scope.professions = ["Physician", "Nurse", "Allied Medical Professional"];

    $scope.requestAccessModal = false

    init();

    function init() {
        $scope.isLoadingDetails = true
        if ($scope.isAdmin) {
            $window.location = './#/admin';
        }
        if ($scope.loginKey !== null) {
            getHospitalInfo();
            updateCustomData();

            if ($routeParams.case_id !== null || $routeParams.case_id !== undefined) {
                $scope.patientCaseId = $routeParams.case_id;
                console.log("init -> $routeParams.case_id", $routeParams.case_id)

            }
        }
    }

    function getHospitalInfo() {
        $scope.isLoadingDetails = true
        var promise = SessionFactory.getHospitalInfo()
        promise.then(function (data) {
            $scope.hospitalInfo = data.data.data
            console.log("getHospitalInfo -> $scope.hospitalInfo", $scope.hospitalInfo)
            console.log("getHospitalInfo -> data.data.data", data.data.data)
            $scope.isLoadingDetails = false
        }).catch(function (error) {
            $scope.isLoadingDetails = false
            localStorage.removeItem("authKey")
            $window.location.reload()
            $window.location = './#/hospital-login';
            console.log("getHospitalInfo -> error", error)
        })
    }

    $scope.login = function () {
        for (var i in $scope.loginForm) {
            if ($scope.loginForm[i] === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Please fill up all the forms!',
                    text: 'Check the forms and try again',
                })
                return false
            }
        }
        $scope.loginForm.hospital = true;
        $scope.isLoading = true
        var promise = SessionFactory.login($scope.loginForm)
        promise.then(function (data) {
            console.log("$scope.login -> data", data)
            var accessToken = data.data.access_token;
            localStorage.setItem("authKey", accessToken)
            $window.location = './#/hospital-portal';
            $window.location.reload()
            $scope.isLoading = false
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An error occured!',
                text: error.data
            })
            console.log("$scope.login -> error", error)
            $scope.isLoading = false
        })
    }

    $scope.submitApplication = function () {
        for (var i in $scope.requestAccessForm) {
            if ($scope.requestAccessForm[i] === "" || $scope.requestAccessForm[i] === undefined || $scope.requestAccessForm[i] === null) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Please fill up all the forms!',
                    text: 'Check the forms and try again',
                })
                return false
            }
        }
        $scope.isLoading = true
        var promise = HospitalPortalFactory.submitApplication($scope.requestAccessForm)
        promise.then(function () {
            $scope.requestAccessModal = true
            resetForms();
            $scope.isLoading = false
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An error occured!',
                text: error.data
            })
            console.log("$scope.submitApplication -> error", error)
            $scope.isLoading = false
        })
    }

    $scope.closeRequestAccessModal = function () {
        $scope.requestAccessModal = !$scope.requestAccessModal ? true : false;
    }

    function updateCustomData() {
        $scope.isLoadingCases = true
        for (var i in $scope.mockData) {
            $scope.mockData[i].comorbidity = $scope.mockData[i].comorbidity === true ? "Yes" : "No"
            $scope.mockData[i].self_assessment_date_time = new Date($scope.mockData[i].self_assessment_date_time)
        }
        console.log("updateCustomData -> $scope.mockData", $scope.mockData)
        $scope.isLoadingCases = false
    }

    $scope.setOrder = function (header) {
        if ($scope.dashboardFilters[header] === '') {
            $scope.dashboardFilters[header] = 'DESC'
        } else {
            $scope.dashboardFilters[header] = $scope.dashboardFilters[header] === 'DESC' ? 'ASC' : 'DESC'
        }

        $scope.isLoadingCases = true
        var caseIDFilter = $scope.dashboardFilters.caseID === '' ? '' : `,case_id ${$scope.dashboardFilters.caseID}`;
        var selfAssessmentFilter = $scope.dashboardFilters.selfAssessment === '' ? '' : `,self_assessment_date_time ${$scope.dashboardFilters.selfAssessment}`;
        var locationFilter = $scope.dashboardFilters.location === '' ? '' : `,location ${$scope.dashboardFilters.location}`;
        var ageFilter = $scope.dashboardFilters.age === '' ? '' : `,age ${$scope.dashboardFilters.age}`;
        var comorbidityFilter = $scope.dashboardFilters.comorbidity === '' ? '' : `,comorbidity ${$scope.dashboardFilters.comorbidity}`;
        var sysmptomSeverityFilter = $scope.dashboardFilters.sysmptomSeverity === '' ? '' : `,sysmptom_severity ${$scope.dashboardFilters.sysmptomSeverity}`;
        var exposureFilter = $scope.dashboardFilters.exposure === '' ? '' : `,exposure_to_covid ${$scope.dashboardFilters.exposure}`;
        var caseStatusFilter = $scope.dashboardFilters.caseStatus === '' ? '' : `,case_status ${$scope.dashboardFilters.caseStatus}`;

        console.log("$scope.dashboardFilters", $scope.dashboardFilters)
        var finalOrderBy = `${caseIDFilter} ${selfAssessmentFilter} ${locationFilter} ${ageFilter} ${comorbidityFilter} ${sysmptomSeverityFilter} ${exposureFilter} ${caseStatusFilter}`;
        console.log("$scope.setOrder -> finalOrderBy", finalOrderBy)
        var newData = alasql(`SELECT * from ? ORDER BY archived DESC ${finalOrderBy}`, [$scope.mockData]);
        console.log("$scope.setOrder -> newData", newData)

        $scope.mockData = newData
        $scope.isLoadingCases = false
        console.log("$scope.setOrder -> $scope.mockData ", $scope.mockData)
    }

    $scope.updateInfo = function () {
        if (
            $scope.hospitalInfo.accepting_for_test === "" ||
            $scope.hospitalInfo.address_1 === "" ||
            $scope.hospitalInfo.address_2 === "" ||
            $scope.hospitalInfo.address_3 === "" ||
            $scope.hospitalInfo.admitting_confirmed === "" ||
            $scope.hospitalInfo.contact_num === "" ||
            $scope.hospitalInfo.date_created === "" ||
            $scope.hospitalInfo.designated_for_covid === "" ||
            $scope.hospitalInfo.hospital_name === "" ||
            $scope.hospitalInfo.morgue === "" ||
            $scope.hospitalInfo.public_id === "" ||
            $scope.hospitalInfo.requesting_supplies === ""
        ) {
            Swal.fire({
                icon: 'warning',
                title: 'All fields except Notes are required.',
                text: 'If you leave a numerical field blank, it registers as zero (0).'
            })
            return false;
        }
        $scope.hospitalInfo.num_alcohol = $scope.hospitalInfo.num_alcohol === null ? null : $scope.hospitalInfo.num_alcohol;
        $scope.hospitalInfo.num_ambulance = $scope.hospitalInfo.num_ambulance === null ? null : $scope.hospitalInfo.num_ambulance;
        $scope.hospitalInfo.num_beds_confirmed = $scope.hospitalInfo.num_beds_confirmed === null ? null : $scope.hospitalInfo.num_beds_confirmed;
        $scope.hospitalInfo.num_beds_pui = $scope.hospitalInfo.num_beds_pui === null ? null : $scope.hospitalInfo.num_beds_pui;
        $scope.hospitalInfo.num_body_bags = $scope.hospitalInfo.num_body_bags === null ? null : $scope.hospitalInfo.num_body_bags;
        $scope.hospitalInfo.num_confirmed_covid = $scope.hospitalInfo.num_confirmed_covid === null ? null : $scope.hospitalInfo.num_confirmed_covid;
        $scope.hospitalInfo.num_covid_kits = $scope.hospitalInfo.num_covid_kits === null ? null : $scope.hospitalInfo.num_covid_kits;
        $scope.hospitalInfo.num_doctors_for_covid = $scope.hospitalInfo.num_doctors_for_covid === null ? null : $scope.hospitalInfo.num_doctors_for_covid;
        $scope.hospitalInfo.num_face_masks = $scope.hospitalInfo.num_face_masks === null ? null : $scope.hospitalInfo.num_face_masks;
        $scope.hospitalInfo.num_face_shield = $scope.hospitalInfo.num_face_shield === null ? null : $scope.hospitalInfo.num_face_shield;
        $scope.hospitalInfo.num_hoods = $scope.hospitalInfo.num_hoods === null ? null : $scope.hospitalInfo.num_hoods;
        $scope.hospitalInfo.num_medstaff_for_covid = $scope.hospitalInfo.num_medstaff_for_covid === null ? null : $scope.hospitalInfo.num_medstaff_for_covid;
        $scope.hospitalInfo.num_nurses_for_covid = $scope.hospitalInfo.num_nurses_for_covid === null ? null : $scope.hospitalInfo.num_nurses_for_covid;
        $scope.hospitalInfo.num_pui = $scope.hospitalInfo.num_pui === null ? null : $scope.hospitalInfo.num_pui;
        $scope.hospitalInfo.num_ventilators = $scope.hospitalInfo.num_ventilators === null ? null : $scope.hospitalInfo.num_ventilators;
        $scope.hospitalInfo.num_shoe_covers = $scope.hospitalInfo.num_shoe_covers === null ? null : $scope.hospitalInfo.num_shoe_covers;
        $scope.hospitalInfo.num_surgical_gloves = $scope.hospitalInfo.num_surgical_gloves === null ? null : $scope.hospitalInfo.num_surgical_gloves;
        $scope.hospitalInfo.num_antibody_testing_kits = $scope.hospitalInfo.num_antibody_testing_kits === null ? null : $scope.hospitalInfo.num_antibody_testing_kits;
        $scope.hospitalInfo.num_of_disinfectants = $scope.hospitalInfo.num_of_disinfectants === null ? null : $scope.hospitalInfo.num_of_disinfectants;
        $scope.hospitalInfo.num_of_goggles = $scope.hospitalInfo.num_of_goggles === null ? null : $scope.hospitalInfo.num_of_goggles;
        $scope.hospitalInfo.num_morgue_freezers_space = $scope.hospitalInfo.num_morgue_freezers_space === null ? null : $scope.hospitalInfo.num_morgue_freezers_space;
        $scope.hospitalInfo.num_negative_pressure_rooms = $scope.hospitalInfo.num_negative_pressure_rooms === null ? null : $scope.hospitalInfo.num_negative_pressure_rooms;

        var dataForm = {
            info: $scope.hospitalInfo,
            loginKey: $scope.loginKey
        };
        console.log("$scope.updateInfo ->  dataForm", dataForm)
        $anchorScroll("body");
        $scope.isLoadingDetails = true
        var promise = HospitalPortalFactory.updateHospitalInfo(dataForm)
        promise.then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Hospital Info Updated!'
            })
            $scope.isLoadingDetails = false
            $window.location = './#/hospital-portal';
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An error occured while updating hospital info!',
                text: error.data
            })
            $scope.isLoadingDetails = false
            console.log("getHospitalInfo -> error", error)
        })
    }

    function resetForms() {
        $scope.requestAccessForm = {
            contact_num: "",
            department: "",
            email: "",
            hospital_name: "",
            password: "",
            person_name: "",
            position: "",
            profession: "",
            username: ""
        }
    }

    $scope.changeProfession = function (profession) {

        console.log("changeProfession")
        console.log("$scope.changeProfession -> profession", profession)
        $scope.requestAccessForm.profession = profession
    }

    $scope.changePosition = function (position) {
        console.log("changeposition")
        console.log("$scope.changeposition -> position", position)
        $scope.requestAccessForm.position = position
    }
}])
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
app.controller('NewsMedia', ['$scope', function (
    $scope
) {

}])
app.controller("Pharmacies", ['$scope', function (
    $scope
) {

}]);
app.controller("Resources", ['$scope', '$location', function (
    $scope,
    $location
) {
    $scope.activeNav = $location.url()

    init()

    function init() {
        if ($scope.activeNav === '/resources/faqs') {
            faqsPage();
        }
    }

    function faqsPage() {
        var faqAccordion = document.getElementsByClassName("question-container");
        if (faqAccordion.length > 0) {
            for (var i = 0; i < faqAccordion.length; i++) {
                faqAccordion[i].onclick = function () {
                    if (this.classList.contains('question-open')) {
                        this.classList.remove("question-open");
                        var panel = this.nextElementSibling;
                        panel.style.maxHeight = null;
                    } else {
                        this.classList.add("question-open");
                        var panel = this.nextElementSibling;
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                    }
                }
            }
        };
    }

}])
app.controller("Roads", ['$scope', function (
    $scope
) {

}]);
app.controller('SelfTriage', ['$scope', '$window', 'SelfTriageFactory', 'ngDialog', '$anchorScroll', function (
    $scope,
    $window,
    SelfTriageFactory,
    ngDialog,
    $anchorScroll
) {
    $scope.isLoadingPage = false
    $scope.isLoadingCountries = false
    $scope.isLoadingillnessesOrConditions = false

    $scope.selfTriageSection = {
        triageHome: true,
        triageDemographicsAsymptomatic: false,
        triageTestingAsymptomatic: false,
        triageTravelAsymptomatic: false,
        triageExposureAsymptomatic: false,
        triageDemographicsSymptomatic: false,
        triageTestingSymptomatic: false,
        triageTravelSymptomatic: false,
        triageExposureSymptomatic: false,
        triageILISymptomatic: false,
        triageSymptomsChecklistSymptomatic: false,
        triageComorbiditySymptomatic: false
    };

    $scope.selfTriageResultSection = {
        triageResultAllright: false,
        triageResultPUM: false,
        triageResultConfirmed: false,
        triageNoResults: false,
        triageResultProbable: false,
        triageResultNotcovid: false,
        triageResultSuspectA: false,
        triageResultSuspectB: false,
        caseAssgined: false
    };

    $scope.resultTitle = {
        allRight: "You’re All Right! | COVID - 19 Self Assessment and Triage Tool | Project Moses",
        tooSoon: "It’s Too Soon to Tell | COVID - 19 Self Assessment and Triage Tool | Project Moses",
        notCovid: "Looks Like It’s Not COVID - 19! | COVID - 19 Self Assessment and Triage Tool | Project Moses",
        probable: "You're a PROBABLE COVID-19 Case! | COVID-19 Self Assessment and Triage Tool | Project Moses",
        suspect: "You're a SUSPECT COVID-19 Case! | COVID-19 Self Assessment and Triage Tool | Project Moses",
        confirmed: "You're a CONFIRMED COVID-19 Case! | COVID-19 Self Assessment and Triage Tool | Project Moses"
    };

    $scope.selector = {
        countrySelector: '',
        diseasesSelector: ''
    }

    $scope.form = {
        triageUser: {
            symptom: {
                cough: false,
                troubleBreathing: false,
                soreThroat: false,
                fever: false,
                otherSymptoms: false
            },
            birthDate: {
                month: '',
                day: '',
                year: '',
                fullDate: ''
            },
            gender: '',
            pregnant: '',
            address: {
                region: '',
                city: '',
                barangay: ''
            },
            healthCareWorker: '',
            understoodTerms: false,
            track: '',
            testInfo: {
                tested: '',
                accreditedTester: '',
                result: ''
            },
            recentlyTraveled: '',
            countriesVisitedCountryCode: [],
            takenCaredOfConfirmedPatientsWithProperPPE: '',
            stayedInCloseWithProbableOrConfirmed: '',
            traveledTogetherWithConfirmed: '',
            symptomStartsWithin14DaysBeingInCountry: '',
            ppe14Days: '',
            environment14Days: '',
            symptomsStartWithin14DaysBeingExposed: '',
            iliExposureHistory: '',
            otherSeriousillnessesOrConditions: '',
            otherSeriousIllnessesOrConditionsList: [],
            symptomsChecklist: {
                fever: '',
                sputumProduction: '',
                myalgia: '',
                nausea: '',
                diarrhea: '',
                dryCough: '',
                soreThroat: '',
                arthralgia: '',
                vomiting: '',
                difficultyBreathing: '',
                fatigue: '',
                headaches: '',
                chills: '',
                nasalCongestion: '',
                shortnessOfBreath: ''
            }
        }
    };

    $scope.months = [
        {
            fullMonth: 'January (01)',
            shortMonth: '01'
        },
        {
            fullMonth: 'February (02)',
            shortMonth: '02'
        },
        {
            fullMonth: 'March (03)',
            shortMonth: '03'
        },
        {
            fullMonth: 'April (04)',
            shortMonth: '04'
        },
        {
            fullMonth: 'May (05)',
            shortMonth: '05'
        },
        {
            fullMonth: 'June (06)',
            shortMonth: '06'
        },
        {
            fullMonth: 'July (07)',
            shortMonth: '07'
        },
        {
            fullMonth: 'August (08)',
            shortMonth: '08'
        },
        {
            fullMonth: 'September (09)',
            shortMonth: '09'
        },
        {
            fullMonth: 'October (10)',
            shortMonth: '10'
        },
        {
            fullMonth: 'November (11)',
            shortMonth: '11'
        },
        {
            fullMonth: 'December (12)',
            shortMonth: '12'
        },
    ];

    $scope.buttonStatus = {
        noSymptoms: false,
        proceedTriageDemographicsAsymptomatic: false,
        proceedTriageTestingAsymptomatic: false,
        proceedTriageTravelAsymptomatic: false,
        proceedtriageExposureAsymptomatic: false,
        proceedTriageDemographicsSymptomatic: false,
        proceedTriageTestingSymptomatic: false,
        proceedTriageTravelSymptomatic: false,
        proceedTriageExposureSymptomatic: false,
        proceedILIExposureHistorySymptomatic: false,
        proceedTriageComorbiditySymptomatic: false,
        proceedTriageSymptomsChecklistSymptomatic: false
    };

    $scope.showField = {
        ageResponse: false,
        addressResponse: false,
        triageTestingAsymptomatic: false
    };

    $scope.customValues = {
        age: 0,
        address: '',
        customValues: '',
        matchCountrySelected: false,
        directExposureHistory: false,
        months: 0,
        additionalRoute: '',
        additionalRoute2: ''
    };

    $scope.countries = [];
    $scope.illnessesOrConditions = [
        "Diabetes mellitus",
        "Cardiovascular Disease",
        "Hypertension",
        "Cancer",
        "Autoimmune Diseases",
        "Leukemia",
        "Chronic Obstructive Pulmonary Disease (COPD)"
    ];
    $scope.visitedCountries = [];
    $scope.comorbidList = [];

    $scope.endResult = "";
    $scope.lastYear = new Date().getFullYear() - 1;

    $scope.emptyCheckList = {
        fever: '',
        sputumProduction: '',
        myalgia: '',
        nausea: '',
        diarrhea: '',
        dryCough: '',
        soreThroat: '',
        arthralgia: '',
        vomiting: '',
        difficultyBreathing: '',
        fatigue: '',
        headaches: '',
        chills: '',
        nasalCongestion: '',
        shortnessOfBreath: ''
    };

    $scope.showViolator = false

    init();

    function init() {
        console.log($scope.form)
        var windowElement = angular.element($window);
        windowElement.on('beforeunload', function (event) {
            // Do whatever you want in here before the page unloads.        
            event.returnValue = "Refresh is disabled";
            // The following line of code will prevent reload or navigating away.
            event.preventDefault();
        });
        // getAllLocationsPH();
    }

    $scope.$watch("form.triageUser", function () {
        $scope.form.triageUser.pregnant = $scope.form.triageUser.gender === 'male' ? 'no' : $scope.form.triageUser.pregnant

        if ($scope.form.triageUser.track === 'asymptomatic') {
            $scope.buttonStatus.proceedTriageDemographicsAsymptomatic = $scope.showField.ageResponse
                && $scope.showField.addressResponse && $scope.form.triageUser.gender !== ''
                && $scope.form.triageUser.pregnant !== '' && $scope.form.triageUser.healthCareWorker !== '' ? true : false

            if ($scope.form.triageUser.testInfo.tested === 'no') {
                $scope.form.triageUser.testInfo.accreditedTester = '';
                $scope.form.triageUser.testInfo.result = '';
                $scope.buttonStatus.proceedTriageTestingAsymptomatic = true;
            } else if ($scope.form.triageUser.testInfo.tested === 'yes') {
                if ($scope.form.triageUser.testInfo.accreditedTester === 'no') {
                    $scope.buttonStatus.proceedTriageTestingAsymptomatic = true;
                    $scope.endResult = 'probable'
                    $window.document.title = $scope.endResult === 'probable' ? $scope.resultTitle.probable : 'Project Moses';
                } else if ($scope.form.triageUser.testInfo.accreditedTester === 'yes') {
                    if ($scope.form.triageUser.testInfo.result === 'positive') {
                        $scope.endResult = 'positive';
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                        $window.document.title = $scope.endResult === 'positve' ? $scope.resultTitle.positive : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'negative') {
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                    } else if ($scope.form.triageUser.testInfo.result === 'inconclusive') {
                        $scope.endResult = 'inconclusive';
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'have-not-received-yet') {
                        $scope.endResult = 'have-not-received-yet';
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    }
                }
            }

            $scope.form.triageUser.countriesVisitedCountryCode = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.form.triageUser.countriesVisitedCountryCode
            $scope.visitedCountries = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.visitedCountries

            if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                $scope.buttonStatus.proceedTriageTravelAsymptomatic = $scope.form.triageUser.countriesVisitedCountryCode.length > 0 ? true : false
                console.log("$scope.form.triageUser.countriesVisitedCountryCode.length", $scope.form.triageUser.countriesVisitedCountryCode.length)
            } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                $scope.buttonStatus.proceedTriageTravelAsymptomatic = true
            }

            if (
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE === 'no'
                && $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed === 'no'
                && $scope.form.triageUser.traveledTogetherWithConfirmed === 'no'
            ) {
                $scope.endResult = 'allright'
                $scope.buttonStatus.proceedtriageExposureAsymptomatic = true;
                $window.document.title = $scope.endResult === 'allright' ? $scope.resultTitle.allRight : 'Project Moses';
            } else if (
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE !== ''
                && $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed !== ''
                && $scope.form.triageUser.traveledTogetherWithConfirmed !== ''
            ) {
                $scope.endResult = 'pum'
                $scope.buttonStatus.proceedtriageExposureAsymptomatic = true;
                $window.document.title = $scope.endResult === 'allright' ? $scope.resultTitle.probable : 'Project Moses';
            }
        } else if ($scope.form.triageUser.track === 'symptomatic') {
            $scope.buttonStatus.proceedTriageDemographicsSymptomatic = $scope.showField.ageResponse
                && $scope.showField.addressResponse && $scope.form.triageUser.gender !== ''
                && $scope.form.triageUser.pregnant !== '' && $scope.form.triageUser.healthCareWorker !== '' ? true : false

            if ($scope.form.triageUser.testInfo.tested === 'no') {
                $scope.form.triageUser.testInfo.accreditedTester = '';
                $scope.form.triageUser.testInfo.result = '';
                $scope.buttonStatus.proceedTriageTestingSymptomatic = true;
            } else if ($scope.form.triageUser.testInfo.tested === 'yes') {
                if ($scope.form.triageUser.testInfo.accreditedTester === 'no') {
                    $scope.buttonStatus.proceedTriageTestingSymptomatic = true;
                    $scope.endResult = 'probable'
                    $window.document.title = $scope.endResult === 'probable' ? $scope.resultTitle.probable : 'Project Moses';
                } else if ($scope.form.triageUser.testInfo.accreditedTester === 'yes') {
                    if ($scope.form.triageUser.testInfo.result === 'positive') {
                        $scope.endResult = 'positive';
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                        $window.document.title = $scope.endResult === 'positve' ? $scope.resultTitle.positive : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'negative') {
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                    } else if ($scope.form.triageUser.testInfo.result === 'inconclusive') {
                        $scope.endResult = 'inconclusive';
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'have-not-received-yet') {
                        $scope.endResult = 'have-not-received-yet';
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    }
                }
            }

            $scope.form.triageUser.countriesVisitedCountryCode = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.form.triageUser.countriesVisitedCountryCode;
            $scope.visitedCountries = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.visitedCountries;
            $scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry = $scope.form.triageUser.recentlyTraveled === 'yes' ? $scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry : '';

            if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'no') {
                $scope.emptyCheckList.fever = $scope.form.triageUser.symptom.fever === true ? 'yes' : ''
                $scope.emptyCheckList.difficultyBreathing = $scope.form.triageUser.symptom.troubleBreathing === true ? 'yes' : ''
                $scope.emptyCheckList.soreThroat = $scope.form.triageUser.symptom.soreThroat === true ? 'yes' : ''
                $scope.emptyCheckList.dryCough = $scope.form.triageUser.symptom.cough === true ? 'yes' : ''
                $scope.form.triageUser.symptomsChecklist = $scope.emptyCheckList;
                console.log("$scope.form.triageUser.symptomsChecklist", $scope.form.triageUser.symptomsChecklist)
            }

            if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                $scope.buttonStatus.proceedTriageTravelSymptomatic = $scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry !== ''
                    && $scope.form.triageUser.countriesVisitedCountryCode.length > 0 ? true : false
                console.log("$scope.form.triageUser.countriesVisitedCountryCode.length", $scope.form.triageUser.countriesVisitedCountryCode.length)
            } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                $scope.buttonStatus.proceedTriageTravelSymptomatic = true
            }

            $scope.form.triageUser.environment14Days = $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed === 'no' ? 'no' : $scope.form.triageUser.environment14Days;
            $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed = $scope.form.triageUser.traveledTogetherWithConfirmed === 'no' ? 'no' : $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed;
            $scope.form.triageUser.ppe14Days = $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE === 'no' ? 'no' : $scope.form.triageUser.ppe14Days

            $scope.buttonStatus.proceedTriageExposureSymptomatic =
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE !== ''
                    && $scope.form.triageUser.ppe14Days !== ''
                    && $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed !== ''
                    && $scope.form.triageUser.environment14Days !== ''
                    && $scope.form.triageUser.traveledTogetherWithConfirmed !== ''
                    && $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed !== ''
                    ? true : false

            $scope.customValues.directExposureHistory =
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE === 'yes'
                    || $scope.form.triageUser.ppe14Days === 'yes'
                    || $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed === 'yes'
                    || $scope.form.triageUser.environment14Days === 'yes'
                    || $scope.form.triageUser.traveledTogetherWithConfirmed === 'yes'
                    || $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed === 'yes'
                    ? true : false

            $scope.buttonStatus.proceedILIExposureHistorySymptomatic = $scope.form.triageUser.iliExposureHistory !== '' ? true : false

            $scope.form.triageUser.otherSeriousIllnessesOrConditionsList = $scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no' ? [] : $scope.form.triageUser.otherSeriousIllnessesOrConditionsList;
            $scope.comorbidList = $scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no' ? [] : $scope.comorbidList
            if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'yes') {
                $scope.buttonStatus.proceedTriageComorbiditySymptomatic = $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length > 0 ? true : false
                $scope.endResult = "SuspectB";
            } else if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no') {
                $scope.buttonStatus.proceedTriageComorbiditySymptomatic = true;
                console.log("$scope.form.triageUser.otherSeriousIllnessesOrConditions", $scope.form.triageUser.otherSeriousIllnessesOrConditions)
            }

            $scope.form.triageUser.symptomsChecklist.fever = $scope.form.triageUser.symptom.fever === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.fever
            $scope.form.triageUser.symptomsChecklist.difficultyBreathing = $scope.form.triageUser.symptom.troubleBreathing === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.difficultyBreathing
            $scope.form.triageUser.symptomsChecklist.soreThroat = $scope.form.triageUser.symptom.soreThroat === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.soreThroat
            $scope.form.triageUser.symptomsChecklist.dryCough = $scope.form.triageUser.symptom.cough === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.dryCough

            console.log($scope.form.triageUser.symptomsChecklist)
            $scope.buttonStatus.proceedTriageSymptomsChecklistSymptomatic =
                $scope.form.triageUser.symptomsChecklist.fever !== ''
                    || $scope.form.triageUser.symptomsChecklist.sputumProduction !== ''
                    || $scope.form.triageUser.symptomsChecklist.myalgia !== ''
                    || $scope.form.triageUser.symptomsChecklist.nausea !== ''
                    || $scope.form.triageUser.symptomsChecklist.diarrhea !== ''
                    || $scope.form.triageUser.symptomsChecklist.dryCough !== ''
                    || $scope.form.triageUser.symptomsChecklist.soreThroat !== ''
                    || $scope.form.triageUser.symptomsChecklist.arthralgia !== ''
                    || $scope.form.triageUser.symptomsChecklist.vomiting !== ''
                    || $scope.form.triageUser.symptomsChecklist.difficultyBreathing !== ''
                    || $scope.form.triageUser.symptomsChecklist.fatigue !== ''
                    || $scope.form.triageUser.symptomsChecklist.headaches !== ''
                    || $scope.form.triageUser.symptomsChecklist.chills !== ''
                    || $scope.form.triageUser.symptomsChecklist.nasalCongestion !== ''
                    || $scope.form.triageUser.symptomsChecklist.shortnessOfBreath !== '' ? true : false
        }
    }, true);

    $scope.$watch("selfTriageSection", function () {
        console.log($scope.selfTriageSection)
        if ($scope.selfTriageSection.triageTravelSymptomatic || $scope.selfTriageSection.triageTravelAsymptomatic) {
            getCountries();
        }
    }, true)

    $scope.$watch("selfTriageResultSection", function (oldValue, newValue) {
        var selfTriageResultSection = oldValue;
        for (var results in selfTriageResultSection) {
            if (selfTriageResultSection[results] === true) {
                $scope.showViolator = true;
                break;
            }
        }
    }, true)

    function resetForm() {
        $scope.form = {
            triageUser: {
                symptom: {
                    cough: false,
                    troubleBreathing: false,
                    soreThroat: false,
                    fever: false,
                    otherSymptoms: false
                },
                birthDate: {
                    month: '',
                    day: '',
                    year: '',
                    fullDate: ''
                },
                gender: '',
                pregnant: '',
                address: {
                    region: '',
                    city: '',
                    barangay: ''
                },
                healthCareWorker: '',
                understoodTerms: false,
                track: '',
                testInfo: {
                    tested: '',
                    accreditedTester: '',
                    result: ''
                },
                recentlyTraveled: '',
                countriesVisitedCountryCode: [],
                takenCaredOfConfirmedPatientsWithProperPPE: '',
                stayedInCloseWithProbableOrConfirmed: '',
                traveledTogetherWithConfirmed: '',
                symptomStartsWithin14DaysBeingInCountry: '',
                ppe14Days: '',
                environment14Days: '',
                symptomsStartWithin14DaysBeingExposed: '',
                iliExposureHistory: '',
                otherSeriousillnessesOrConditions: '',
                otherSeriousIllnessesOrConditionsList: [],
                symptomsChecklist: {
                    fever: '',
                    sputumProduction: '',
                    myalgia: '',
                    nausea: '',
                    diarrhea: '',
                    dryCough: '',
                    soreThroat: '',
                    arthralgia: '',
                    vomiting: '',
                    difficultyBreathing: '',
                    fatigue: '',
                    headaches: '',
                    chills: '',
                    nasalCongestion: '',
                    shortnessOfBreath: ''
                }
            }
        };
    }

    function getAllLocationsPH() {
        var promise = SelfTriageFactory.getAllLocationsPhilippines()
        promise.then(function (data) {
            console.log("getAllLocationsPH -> data", data)
        }).catch(function (error) {
            console.log("getAllLocationsPH -> error", error)
        })
    }

    function getCountries() {
        $scope.isLoadingCountries = true
        var promise = SelfTriageFactory.getCountries()
        promise.then(function (data) {
            $scope.countries = data.data;
            $scope.isLoadingCountries = false
            console.log("getCountries -> $scope.countries", $scope.countries)
        }).catch(function (error) {
            $scope.isLoadingCountries = false
            console.log("getAllLocationsPH -> error", error)
        })
    }

    function getIllnessesOrConditions() {
        $scope.isLoadingillnessesOrConditions = true
        var promise = SelfTriageFactory.getIllnessesOrConditions()
        promise.then(function (data) {
            $scope.illnessesOrConditions = data.data;
            $scope.isLoadingillnessesOrConditions = false
            console.log("getIllnessesOrConditions -> $scope.illnessesOrConditions", $scope.illnessesOrConditions)
        }).catch(function (error) {
            $scope.isLoadingCountries = false
            console.log("getAllLocationsPH -> error", error)
        })
    }

    $scope.symptomClicked = function (symptom) {
        $scope.form.triageUser.symptom[symptom] = $scope.form.triageUser.symptom[symptom] === true ? false : true

        $scope.form.triageUser.symptomsChecklist.fever = $scope.form.triageUser.symptom.fever === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.fever
        $scope.form.triageUser.symptomsChecklist.difficultyBreathing = $scope.form.triageUser.symptom.troubleBreathing === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.difficultyBreathing
        $scope.form.triageUser.symptomsChecklist.soreThroat = $scope.form.triageUser.symptom.soreThroat === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.soreThroat
        $scope.form.triageUser.symptomsChecklist.dryCough = $scope.form.triageUser.symptom.cough === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.dryCough

        $scope.buttonStatus.noSymptoms = $scope.form.triageUser.symptom.cough === true || $scope.form.triageUser.symptom.troubleBreathing === true
            || $scope.form.triageUser.symptom.soreThroat === true || $scope.form.triageUser.symptom.fever === true
            || $scope.form.triageUser.symptom.otherSymptoms === true ? true : false
        console.log("$scope.symptomClicked -> $scope.buttonStatus.noSymptoms", $scope.buttonStatus.noSymptoms)
        console.log("$scope.symptomClicked -> $scope.form.triageUser.symptom", $scope.form.triageUser.symptom)
    }

    $scope.goToNextSection = function (section) {
        for (var t in $scope.selfTriageSection) {
            if ($scope.selfTriageSection[t]) {
                $scope.selfTriageSection[t] = false
            }
        }
        $anchorScroll("mainContent");
        if (section === "selected-symptoms") {
            if (
                $scope.form.triageUser.symptom.cough === false
                && $scope.form.triageUser.symptom.troubleBreathing === false
                && $scope.form.triageUser.symptom.soreThroat === false
                && $scope.form.triageUser.symptom.fever === false
                && $scope.form.triageUser.symptom.otherSymptoms === false
            ) {
                Swal.fire('Warning!', 'Please select at least one symptom to proceed.', 'warning');
                $scope.selfTriageSection.triageHome = true
            } else {
                console.log("have selected at least one symptom")
                $scope.form.triageUser.track = 'symptomatic';
                $scope.selfTriageSection.triageDemographicsSymptomatic = true
                console.log($scope.form.triageUser.symptom)
            }
        } else if (section === "no-symptoms") {
            console.log("No symptoms")
            $scope.form.triageUser.track = 'asymptomatic';
            $scope.selfTriageSection.triageDemographicsAsymptomatic = true
        }

        if ($scope.form.triageUser.track === 'asymptomatic') {
            if (section === 'testing-asymptomatic') {
                $scope.selfTriageSection.triageTestingAsymptomatic = true
            } else if (section === 'travel-asymptomatic') {
                console.log($scope.endResult)
                if ($scope.form.triageUser.testInfo.result === 'negative') {
                    $scope.selfTriageSection.triageTravelAsymptomatic = true
                } else {
                    if ($scope.endResult === 'positive') {
                        $window.document.title = $scope.resultTitle.confirmed
                        $scope.selfTriageResultSection.triageResultConfirmed = true
                    } else if ($scope.endResult === 'inconclusive') {
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'have-not-received-yet') {
                        $window.document.title = $scope.resultTitle.suspect
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'probable') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultProbable = true
                    } else {
                        $scope.selfTriageSection.triageTravelAsymptomatic = true
                    }
                }
            } else if (section === 'exposure-asymptomatic') {
                if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                    crossReferenceLocations(false, 'asymptomatic')
                } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                    $scope.selfTriageSection.triageExposureAsymptomatic = true
                }
            } else if (section === 'final-asymptomatic') {
                console.log($scope.endResult)
                if ($scope.form.triageUser.recentlyTraveled === 'no') {
                    if ($scope.endResult === 'allright') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.allRight
                        $scope.selfTriageResultSection.triageResultAllright = true
                    } else if ($scope.endResult === 'pum') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    }
                } else if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                    if ($scope.endResult === 'pum') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'allright') {
                        $window.document.title = $scope.resultTitle.allRight
                        $scope.selfTriageResultSection.triageResultAllright = true
                    }
                }
            }
        } else if ($scope.form.triageUser.track === 'symptomatic') {
            if (section === 'testing-symptomatic') {
                $scope.selfTriageSection.triageTestingSymptomatic = true
            } else if (section === 'travel-symptomatic') {
                console.log($scope.endResult)
                if ($scope.form.triageUser.testInfo.result === 'negative') {
                    $scope.selfTriageSection.triageTravelSymptomatic = true
                } else {
                    if ($scope.endResult === 'positive') {
                        $window.document.title = $scope.resultTitle.confirmed
                        $scope.selfTriageResultSection.triageResultConfirmed = true
                    } else if ($scope.endResult === 'inconclusive') {
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'have-not-received-yet') {
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'probable') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultProbable = true
                    } else {
                        $scope.selfTriageSection.triageTravelSymptomatic = true
                    }
                }
            } else if (section === 'exposure-symptomatic') {
                if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                    crossReferenceLocations(true, 'symptomatic')
                } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                    $scope.selfTriageSection.triageExposureSymptomatic = true
                }
            } else if (section === 'direct-exposure-history') {
                if ($scope.customValues.directExposureHistory) {
                    console.log('Selected at least one')
                    console.log($scope.form.triageUser)
                    if (
                        $scope.form.triageUser.ppe14Days === 'yes'
                        || $scope.form.triageUser.environment14Days === 'yes'
                        || $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed === 'yes'
                    ) {
                        // Symptom start within 14 days of exposure
                        $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true
                        $scope.customValues.additionalRoute = 'option-three'
                    } else {
                        $scope.selfTriageSection.triageILISymptomatic = true
                    }
                    console.log("$scope.goToNextSection ->   $scope.customValues.additionalRoute", $scope.customValues.additionalRoute)
                } else {
                    console.log('No to all questions')
                    $scope.selfTriageSection.triageILISymptomatic = true
                }
            } else if (section === 'ili-exposure-history') {
                console.log("$scope.goToNextSection -> $scope.customValues.additionalRoute", $scope.customValues.additionalRoute)
                if ($scope.customValues.additionalRoute === 'option-three') {
                    $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true
                    $scope.customValues.additionalRoute2 = 'option-three-a'
                } else {
                    if (!$scope.form.triageUser.symptom.fever && !$scope.form.triageUser.symptom.cough && !$scope.form.triageUser.symptom.troubleBreathing) {
                        console.log("$scope.goToNextSection -> $scope.form.triageUser.symptom", $scope.form.triageUser.symptom)
                        console.log('No fever, cough and troubleBreathing')
                        $window.document.title = $scope.resultTitle.notCovid
                        $scope.selfTriageResultSection.triageResultNotcovid = true;
                        console.log("$scope.goToNextSection -> $scope.selfTriageResultSection", $scope.selfTriageResultSection)
                    } else if ($scope.form.triageUser.symptom.fever || $scope.form.triageUser.symptom.cough || $scope.form.triageUser.symptom.troubleBreathing) {
                        console.log('Have fever or cough or troubleBreathing')
                        $scope.selfTriageSection.triageComorbiditySymptomatic = true;
                    }
                }
            } else if (section === 'comorbidity-symptomatic') {
                console.log($scope.customValues.additionalRoute)
                if ($scope.customValues.additionalRoute === 'option-one') {
                    // Save Diseases first
                    $window.document.title = $scope.resultTitle.suspect
                    $scope.selfTriageResultSection.triageResultSuspectA = true;
                } else if ($scope.customValues.additionalRoute === 'option-two') {
                    if ($scope.endResult === "SuspectB") {
                        // Save Diseases first
                        $window.document.title = $scope.resultTitle.suspect
                        $scope.selfTriageResultSection.triageResultSuspectB = true;
                    }
                    if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no') {
                        var over59 = $scope.customValues.age > 59 ? true : false
                        var isPregnant = $scope.form.triageUser.pregnant === 'yes' ? true : false
                        var isHealthCareWorker = $scope.form.triageUser.healthCareWorker === 'yes' ? true : false

                        console.log("$scope.goToNextSection -> over59, isPregnant, isHealthCareWorker", over59, isPregnant, isHealthCareWorker)
                        if (over59 || isPregnant || isHealthCareWorker) {
                            $window.document.title = $scope.resultTitle.suspect
                            $scope.selfTriageResultSection.triageResultSuspectB = true;
                        } else {
                            $window.document.title = $scope.resultTitle.suspect
                            $scope.selfTriageResultSection.triageResultNotcovid = true;
                        }
                        console.log("$scope.goToNextSection -> $scope.selfTriageResultSection", $scope.selfTriageResultSection)
                    }
                } else {
                    if ($scope.endResult === "SuspectB") {
                        // Save Diseases first
                        $window.document.title = $scope.resultTitle.suspect
                        $scope.selfTriageResultSection.triageResultSuspectB = true;
                    }
                    if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no') {
                        var over59 = $scope.customValues.age > 59 ? true : false
                        var isPregnant = $scope.form.triageUser.pregnant === 'yes' ? true : false
                        var isHealthCareWorker = $scope.form.triageUser.healthCareWorker === 'yes' ? true : false
                        if (over59 || isPregnant || isHealthCareWorker) {
                            $window.document.title = $scope.resultTitle.suspect
                            $scope.selfTriageResultSection.triageResultSuspectB = true;
                        } else {
                            $window.document.title = $scope.resultTitle.notCovid
                            $scope.selfTriageResultSection.triageResultNotcovid = true;
                        }
                    }
                }
            } else if (section === 'symptoms-checklist') {
                console.log($scope.form)
                if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'yes') {
                    $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true
                } else if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'no') {
                    $scope.selfTriageSection.triageExposureSymptomatic = true
                }
            } else if (section === 'symptoms-checklist-symptomatic') {
                if (
                    $scope.form.triageUser.symptomsChecklist.fever === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.sputumProduction === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.shortnessOfBreath === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.nasalCongestion === 'yes'
                ) {
                    $scope.selfTriageSection.triageComorbiditySymptomatic = true;
                    $scope.customValues.additionalRoute = 'option-one'
                } else if (
                    $scope.form.triageUser.symptomsChecklist.fever === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.dryCough === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.difficultyBreathing === 'yes'
                ) {
                    $scope.customValues.additionalRoute = 'option-two'
                    $scope.selfTriageSection.triageComorbiditySymptomatic = true
                } else {
                    $window.document.title = $scope.resultTitle.notCovid
                    $scope.selfTriageResultSection.triageResultNotcovid = true;
                }
            }
        }
        console.log(section)
    }

    function crossReferenceLocations(value, track) {
        // Do crossreferencehere - if covidLocationsCode === triageUser.countriesVisitedCountryCode ? true : false
        // var promise;
        // promise.then(function () {}).catch(function (error) {})
        $scope.customValues.matchCountrySelected = value
        if (track === 'asymptomatic') {
            if ($scope.customValues.matchCountrySelected === true) {
                $scope.endResult = 'pum'
                $scope.goToNextSection('final-asymptomatic')
                console.log("crossReferenceLocations -> $scope.customValues.matchCountrySelected", $scope.customValues.matchCountrySelected)
            } else {
                $scope.selfTriageSection.triageExposureAsymptomatic = true
            }
        } else if (track === 'symptomatic') {
            console.log("crossReferenceLocations -> track", track)
            if ($scope.customValues.matchCountrySelected === true) {
                saveSymptoms()
                console.log("crossReferenceLocations -> $scope.customValues.matchCountrySelected", $scope.customValues.matchCountrySelected)
            } else {
                $scope.selfTriageSection.triageExposureSymptomatic = true
            }
        }
    }

    function saveSymptoms() {
        if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'yes') {
            // SaveSymptoms in the DB
            // var promise;
            // promise.then(function () {}).catch(function (error) {})
            $scope.goToNextSection('symptoms-checklist')
        } else if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'no') {
            $scope.goToNextSection('symptoms-checklist')
        }
    }

    function saveDiseases() {
        // TODO Save saveDiseases to the database
    }

    $scope.goBack = function (section) {
        console.log($scope.selfTriageSection)
        if ($scope.selfTriageSection.triageComorbiditySymptomatic && $scope.customValues.additionalRoute === 'option-one') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true;
        } else if ($scope.selfTriageSection.triageComorbiditySymptomatic && $scope.customValues.additionalRoute === 'option-one') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true;
        } else if ($scope.selfTriageSection.triageSymptomsChecklistSymptomatic && $scope.customValues.additionalRoute === 'option-three') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageExposureSymptomatic = true;
        } else if ($scope.selfTriageSection.triageExposureSymptomatic && $scope.customValues.additionalRoute === 'option-three' && $scope.customValues.additionalRoute2 === 'option-three-a') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageILISymptomatic = true;
        } else {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection[section] = true
        }
        console.log($scope.selfTriageSection)
        $anchorScroll("mainContent");
    }

    $scope.formChange = function (form) {
        if (form === 'birthDate') {
            $scope.showField.ageResponse = $scope.form.triageUser.birthDate.month !== '' && $scope.form.triageUser.birthDate.day !== ''
                && $scope.form.triageUser.birthDate.year.length === 4 ? true : false
            var monthShort = '';
            for (var date in $scope.months) {
                if ($scope.form.triageUser.birthDate.month === $scope.months[date].fullMonth) {
                    monthShort = $scope.months[date].shortMonth;
                    break;
                }
            }
            var triageUserDateOfBirthString = `${monthShort}/${$scope.form.triageUser.birthDate.day}/${$scope.form.triageUser.birthDate.year}`;
            console.log("$scope.formChange -> triageUserDateOfBirthString", triageUserDateOfBirthString)
            var now = new Date();
            var yearNow = now.getYear();
            var monthNow = now.getMonth();
            var dateNow = now.getDate();

            var triageUserDOB = new Date(triageUserDateOfBirthString.substring(6, 10), triageUserDateOfBirthString.substring(0, 2) - 1, triageUserDateOfBirthString.substring(3, 5));
            if (triageUserDOB.getMonth && typeof triageUserDOB.getMonth === "function") {
                $scope.form.triageUser.birthDate.fullDate = triageUserDOB
            }
            console.log("$scope.formChange -> $scope.form.triageUser.birthDate", $scope.form.triageUser.birthDate)
            console.log("$scope.formChange -> triageUserDOB", triageUserDOB)
            var monthTriageUserDOB = triageUserDOB.getMonth();
            var yearTriageUserDOB = triageUserDOB.getYear();
            var dateTriageUserDOB = triageUserDOB.getDate();

            var userTotalYearAge = yearNow - yearTriageUserDOB;

            if (monthNow >= monthTriageUserDOB) {
                var monthAge = monthNow - monthTriageUserDOB;
            } else {
                userTotalYearAge--;
                var monthAge = 12 + monthNow - monthTriageUserDOB;

            }
            if (dateNow >= dateTriageUserDOB) {
                var dateAge = dateNow - dateTriageUserDOB;
            } else {
                monthAge--;
                if (monthAge < 0) {
                    monthAge = 11;
                    userTotalYearAge--;
                }
            }
            $scope.customValues.months = monthAge
            $scope.customValues.age = userTotalYearAge
            if ($scope.showField.ageResponse) {
                if ($scope.customValues.age < 0 || $scope.customValues.age > 130) {
                    Swal.fire('Warning!', `Please input a proper birth year. You can not be ${$scope.customValues.age} years old`, 'warning');
                    $scope.showField.ageResponse = false;
                    $scope.customValues.age = 0;
                    $scope.form.triageUser.birthDate.year = ''
                }
            }
        } else if (form === 'address') {
            $scope.showField.addressResponse = $scope.form.triageUser.address.region !== '' && $scope.form.triageUser.address.city !== ''
                && $scope.form.triageUser.address.barangay !== '' ? true : false
            $scope.customValues.address = `${$scope.form.triageUser.address.barangay}, ${$scope.form.triageUser.address.city}`;
        }
    }

    $scope.searchCountries = function () {
        if ($scope.countries.length > 0) {
            var searchCountryFilter = alasql(`SELECT * from ? WHERE name != 'Philippines' AND name LIKE '%${$scope.selector.countrySelector}%'`, [$scope.countries])
            $scope.countries = searchCountryFilter
        }
        if ($scope.selector.countrySelector === '') {
            getCountries();
        }
    }

    $scope.addCountry = function (countryCode, country, method) {
        if (countryCode === null && country === null && method === 'addOne') {
            if ($scope.form.triageUser.countriesVisitedCountryCode.length !== 25 && $scope.visitedCountries.length !== 25) {
                if ($scope.countries.length === 1) {
                    var country = $scope.countries;
                    $scope.form.triageUser.countriesVisitedCountryCode.push(country[0].alpha3Code)
                    $scope.visitedCountries.push(country[0].name)
                } else {
                    Swal.fire('Warning!', "You cannot add this location", 'warning');
                }
            } else {
                Swal.fire('Warning!', 'Maximum of 25 countries.', 'warning');
            }
        } else {
            if ($scope.form.triageUser.countriesVisitedCountryCode.length !== 25 && $scope.visitedCountries.length !== 25) {
                $scope.form.triageUser.countriesVisitedCountryCode.push(countryCode)
                $scope.visitedCountries.push(country)

                if ($scope.form.triageUser.countriesVisitedCountryCode.length > 0) {
                    var countryCodes = $scope.form.triageUser.countriesVisitedCountryCode.filter(function (elem, pos) {
                        return $scope.form.triageUser.countriesVisitedCountryCode.indexOf(elem) == pos;
                    });
                    $scope.form.triageUser.countriesVisitedCountryCode = countryCodes
                    console.log("$scope.addCountry -> countryCodes", countryCodes)
                }
                if ($scope.visitedCountries.length > 0) {
                    var countries = $scope.visitedCountries.filter(function (elem, pos) {
                        return $scope.visitedCountries.indexOf(elem) == pos;
                    });
                    $scope.visitedCountries = countries
                    console.log("$scope.addCountry -> countries", countries)
                }
            } else {
                Swal.fire('Warning!', 'Maximum of 25 countries.', 'warning');
            }
        }
    }

    $scope.addDisease = function (disease, method) {
        console.log("$scope.addDisease -> disease, method", disease, method)
        if (disease === null && method === 'entered') {
            if ($scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length !== 10 && $scope.comorbidList.length !== 10) {
                $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.push($scope.selector.diseasesSelector)
                $scope.comorbidList.push($scope.selector.diseasesSelector)
            } else {
                Swal.fire('Warning!', 'Maximum of 10 diseases.', 'warning');
            }
        } else {
            if ($scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length !== 10 && $scope.comorbidList.length !== 10) {
                $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.push(disease)
                $scope.comorbidList.push(disease)

                if ($scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length > 0) {
                    var otherSeriousIllnessesOrConditionsList = $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.filter(function (elem, pos) {
                        return $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.indexOf(elem) == pos;
                    });
                    $scope.form.triageUser.otherSeriousIllnessesOrConditionsList = otherSeriousIllnessesOrConditionsList
                    console.log("$scope.addCountry -> otherSeriousIllnessesOrConditionsList", otherSeriousIllnessesOrConditionsList)
                }
                if ($scope.comorbidList.length > 0) {
                    var diseases = $scope.comorbidList.filter(function (elem, pos) {
                        return $scope.comorbidList.indexOf(elem) == pos;
                    });
                    $scope.comorbidList = diseases
                    console.log("$scope.addCountry -> diseases", diseases)
                }
            } else {
                Swal.fire('Warning!', 'Maximum of 10 diseases.', 'warning');
            }
        }
    }

    $scope.removeCountry = function (countryIndex) {
        $scope.form.triageUser.countriesVisitedCountryCode.splice(countryIndex, 1)
        $scope.visitedCountries.splice(countryIndex, 1)
        console.log("$scope.removeCountry -> countryIndex", countryIndex)
    }

    $scope.removeComorbid = function (comorbidIndex) {
        $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.splice(comorbidIndex, 1)
        $scope.comorbidList.splice(comorbidIndex, 1)
        console.log("$scope.removeCountry -> comorbidIndex", comorbidIndex)
    }

    $scope.showTermsAndDataPrivacy = function () {
        ngDialog.openConfirm({
            template: 'ShowTermsAndDataPrivacyDialog',
            className: 'ngdialog-theme-plain',
            scope: $scope,
            showClose: true,
            closeByEscape: false,
            closeByNavigation: false,
            closeByDocument: false
        });
    }

    $scope.collectData = function (method) {
        if (method === 'agree') {
            console.log($scope.form)
            Swal.fire({
                title: 'Success',
                text: 'Your data has been saved! Thank you for your cooperation.',
                icon: 'success'
            });
            $scope.showViolator = false;
        } else if (method === 'disagree') {
            console.log($scope.form)
            $scope.showViolator = false;
        }
    }

}])
app.controller("SubmitReport", ['$scope', function (
    $scope
) {

}]);
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
app.factory("AdminFactory", ['$http', function ($http) {
    var factory = {};
    var baseApiUrl = "https://server.projectmoses.ph/";

    factory.getAdminDetails = function (data) {
        var promise = $http({
            url: `${baseApiUrl}admin/${data.public_id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + data.adminKey
            }
        });
        return promise;
    };

    factory.getHospitals = function (data) {
        var endpoint = data.approved === true ? 'api/admin_hospital/' : 'api/admin_hospital_application/'
        var promise = $http({
            url: `${baseApiUrl}${endpoint}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + data.adminKey
            }
        });
        return promise;
    };

    factory.updateHospitalRequestStatus = function (data) {
        var endpoint = data.status === 'approve' ? 'api/admin_hospital_approve/' : 'api/admin_hospital_reject/'
        var promise = $http({
            url: `${baseApiUrl}${endpoint}`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + data.adminKey
            },
            data: data.info
        });
        return promise;
    };

    factory.deleteHospitalInfo = function (data) {
        var promise = $http({
            url: 'https://server.projectmoses.ph/api/admin_hospital/',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + data.adminKey
            },
            data: data.info
        });

        return promise;
    };

    factory.addHospital = function (data) {
        var promise = $http({
            url: 'https://server.projectmoses.ph/api/admin_hospital/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + data.adminKey
            },
            data: data.info
        });

        return promise;
    };

    return factory;
}]);
app.factory("CitizenPatrolFactory", ['$http', function ($http) {
    var factory = {};

    return factory;
}]);
app.factory("HospitalDirectoryFactory", ['$http', function ($http) {
    var factory = {};
    var baseApiUrl = "https://server.projectmoses.ph/";
    
    factory.searchParameters = function (data) {
        var searchHospitalForm = {
            region: data.region,
            city: data.city,
            hospitalName: data.hospitalName
        };

        return searchHospitalForm
    }

    factory.getAllHospitals = function () {
        var promise = $http({
            url: 'https://server.projectmoses.ph/api/hospital_info_dash/',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        return promise;
    };

    factory.getHospitalDetails = function (data) {
        var promise = $http({
            url: `https://server.projectmoses.ph/api/hospital_info_dash/${data.public_id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        return promise;
    };

    return factory;
}]);
app.factory('HospitalPortalFactory', ['$http', function ($http) {
    var factory = {};
    const baseApiUrl = "https://server.projectmoses.ph/api/";

    factory.submitApplication = function (data) {
        var promise = $http({
            url: `${baseApiUrl}hospital_reg/`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: data
        });

        return promise;
    };

    factory.updateHospitalInfo = function (data) {
        var promise = $http({
            url: 'https://server.projectmoses.ph/api/hospital_info/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + data.loginKey
            },
            data: data.info
        });

        return promise;
    };

    return factory;
}]);
app.factory("SelfTriageFactory", ['$http', function ($http) {
    var factory = {};
    var baseApiUrl = "https://server.projectmoses.ph/api/";

    factory.getAllLocationsPhilippines = function () {
        var promise = $http({
            url: `${baseApiUrl}locations/`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        return promise;
    };

    factory.getCountries = function () {
        var promise = $http({
            url: 'https://restcountries.eu/rest/v2/all',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        return promise;
    };

    return factory;
}]);
app.factory('SessionFactory', ['$http', function ($http) {
    var factory = {};
    const baseApiUrl = "https://server.projectmoses.ph/api/";

    factory.authKey = localStorage.getItem("authKey");
    factory.adminAuthKey = localStorage.getItem("adminAuthKey");

    factory.login = function (data) {
        var clientId = data.username;
        var clientSecret = data.password;
        var authorizationBasic = btoa(clientId + ':' + clientSecret);
        var endPointURL = data.hospital === true ? 'login_hospital/' : 'login_admin/'

        var promise = $http({
            url: `${baseApiUrl}${endPointURL}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Basic ' + authorizationBasic
            }
        });

        return promise;
    };

    factory.getHospitalInfo = function (data) {
        var promise = $http({
            url: 'https://server.projectmoses.ph/api/hospital_info/',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + factory.authKey
            },
            data: data
        });

        return promise;
    };

    return factory;
}]);
app.service("PagerService", function () {
    // Service definition
    var service = {};

    service.GetPager = GetPager;

    return service;

    // Service implementation
    function GetPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
});