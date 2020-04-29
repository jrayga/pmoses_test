app.factory('SessionFactory', function ($http) {
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
});