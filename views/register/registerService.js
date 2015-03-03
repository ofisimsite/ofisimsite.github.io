'use strict';

angular.module('OfisimSite')

    .factory('RegisterService', ['$http', 'config',
        function ($http, config) {
            return {
                createMember: function (member) {
                    return $http.post(config.apiUrl + 'Public/Register', member);
                },
                reSendMail: function (resend) {
                    return $http.post(config.apiUrl+'Public/ResendActivationMail',angular.toJson(resend));
                }
            };
        }]);