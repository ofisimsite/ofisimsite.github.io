'use strict';

angular.module('OfisimSite')
    .controller('HomeController', ['$rootScope',
    function ($rootScope) {
        $rootScope.isHome = true;
    }
]);