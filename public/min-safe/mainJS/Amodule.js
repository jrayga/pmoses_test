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