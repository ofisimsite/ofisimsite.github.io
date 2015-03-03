'use strict';

angular.module('OfisimSite')

    .directive('customBackground', function () {
        return {
            restrict: "A",
            controller: ['$scope', '$element', '$location',
                function ($scope, $element, $location) {
                    var path = function () {
                        return $location.path();
                    };

                    var addBackground = function (path) {
                        $element.removeClass('body-home body-sub');

                        if (path.indexOf('/home') == 0) {
                            return $element.addClass('body-home');
                        }
                        else {
                            return $element.addClass('body-sub');
                        }
                    };

                    addBackground($location.path());

                    return $scope.$watch(path, function (newVal, oldVal) {
                        if (newVal === oldVal) {
                            return;
                        }

                        return addBackground(newVal);
                    });
                }
            ]
        };
    });
