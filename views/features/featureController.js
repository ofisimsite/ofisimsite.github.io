'use strict';

angular.module('OfisimSite')
    .controller('FeatureController', ['$rootScope', '$scope',
    function ($rootScope, $scope) {
        $rootScope.isHome = false;
        $scope.carouselIndex=0;
        $scope.slides = [
            {
                image: 'images/features/toystory.jpg'
            },
            {
                image: 'images/features/up.jpg'
            },
            {
                image: 'images/features/walle.jpg'
            },
            {
                image: 'images/features/nemo.jpg'
            }
        ];


    }

]);