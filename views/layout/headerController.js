'use strict';

angular.module('OfisimSite')
    .controller('HeaderController', ['$rootScope', '$scope', '$translate',
        function ($rootScope, $scope, $translate) {
            $rootScope.isHome = true;
            $rootScope.language = 'tr';

            $scope.changeLanguage = function (key) {
                $translate.use(key);
                $rootScope.language = key;
            };
        }
    ]);