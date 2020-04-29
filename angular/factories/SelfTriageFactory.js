app.factory("SelfTriageFactory", function ($http) {
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
});