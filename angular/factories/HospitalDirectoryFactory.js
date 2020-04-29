app.factory("HospitalDirectoryFactory", function ($http) {
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
});