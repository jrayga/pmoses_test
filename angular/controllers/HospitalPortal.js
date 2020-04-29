app.controller('HospitalPortal', function (
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
})