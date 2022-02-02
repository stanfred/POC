angular.module('myApp').factory('GetData', ['$http', function($http) {
    var posts = [];
    var promise;
    return {
        posts_async: function() {
            if(true) {
                promise = $http.get('assets/debug_json/data.json')
                .then(
                    function(response) {
                        posts = response.data.oData;
                        return posts;
                    });
            }
            return promise;
        }
    };
}]);

angular.module('myApp').factory('GetData2', ['$http', function($http) {
    var posts = [];
    var promise;
    return {
        posts_async: function() {
            if(true) {
                promise = $http.get('assets/debug_json/data2.json')
                .then(
                    function(response) {
                        posts = response.data.oData;
                        return posts;
                    });
            }
            return promise;
        }
    };
}]);

angular.module('myApp').factory('GetData3', ['$http', function($http) {
    var posts = [];
    var promise;
    return {
        posts_async: function() {
            if(true) {
                promise = $http.get('assets/debug_json/data3.json')
                .then(
                    function(response) {
                        posts = response.data.oData;
                        return posts;
                    });
            }
            return promise;
        }
    };
}]);