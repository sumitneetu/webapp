var timeout = 380000;

app.factory('Authenticate', function($http, apiURL) {
    return {
        registerUser: function(user) {
            var req = {
                method: 'POST',
                url: apiURL + 'Webservice_User/register',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams({
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'email': user.email,
                    'password': user.password,
                    'country_name': user.c_name,
                    'usertype': user.profile_type
                }),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        login: function(user) {
            var req = {
                method: 'POST',
                url: apiURL + 'Webservice_User/login',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams({
                    'email': user.email,
                    'password': user.password
                }),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        forgetPassword: function(user) {
            var req = {
                method: 'POST',
                url: apiURL + 'Webservice_User/forgotPassword',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams({
                    'email': user.email
                }),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        getCountry: function() {
            return $http.get(apiURL + "Webservice_User/country", {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        getIndustries: function() {
            return $http.get(apiURL + "Webservice_ProProfile/industryType", {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        toParams: function(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        },
        getState: function(cid) {
            var req = {
                method: 'POST',
                url: apiURL + 'Webservice_User/state',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams({
                    'cid': cid
                }),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        }
    }
});
