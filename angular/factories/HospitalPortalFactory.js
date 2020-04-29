app.factory('HospitalPortalFactory', function ($http) {
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
});