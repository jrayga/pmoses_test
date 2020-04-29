app.factory("AdminFactory", function ($http) {
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
});