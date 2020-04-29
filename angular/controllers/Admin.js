app.controller("Admin", function (
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

})