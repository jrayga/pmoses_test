app.controller('HospitalDirectory', function (
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

})