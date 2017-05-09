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

app.factory('PagerService', function($http, apiURL) {
    return {
        GetPager:function(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 10;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        },
        toParams: function(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        }
    }
});
