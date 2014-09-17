/*
*** NOT WORKING ***
postmark.js v0.0.1
postmark angular service
Written by Tyson Bailey
*/
angular.module('email', []).factory('$email', ['$http',
    function($http) {
        return {
            $send: function(api_user, api_key, to, toname, subject, text, from) {
                var method = 'POST';
                var url = "https://api.postmarkapp.com/email";
app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post["Accept"] = "application/json";
    $httpProvider.defaults.headers.post["X-Postmark-Server-Token"] = api_key;
    
});
                $http({
                    method: method,
                    url: url,
                    data: 
                        'From=tyson@onaclovtech.com&To=onaclov2000@gmail.com&Subject=Postmarktest&textBody=This%20is%20a%20test'
                    //,
                    //headers: {
                     //   'Content-Type': 'application/json',
                    //    'Accept': 'application/json',
                    //    'X-Postmark-Server-Token': 
                    //}
                }).
                success(function(data, status) {}).
                error(function(data, status) {});
            }
        };
    }
]);
