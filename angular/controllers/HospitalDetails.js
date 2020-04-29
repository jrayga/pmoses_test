app.controller('HospitalDetails', function (
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

})