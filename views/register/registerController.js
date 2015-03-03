angular.module('OfisimSite')

    .controller('RegisterController', ['$rootScope', '$scope', '$routeParams', 'RegisterService','$window',
        function ($rootScope, $scope, $routeParams, RegisterService,$window) {
            $rootScope.isHome = false;
            $scope.id = $routeParams.id;

            $scope.createMember = function (member) {
                member.passwordConfirm = member.password;
                member.campaignCode = '';
                member.currency = 'TRY';
                member.privacyPolicy = 'on';
                member.termsOfUse = 'on';
                member.planID = $scope.id;



                RegisterService.createMember(member)
                    .success(function (data) {
                        alert('kullanıcı kayıt başarılı');
                        $window.location.href = '#/resend';
                        $rootScope.resend=member.email;
                    });
            };

            $scope.address=$rootScope.resend;

            $scope.reSendMail = function () {
                RegisterService.reSendMail($rootScope.resend)
                    .success(function (data) {
                        alert('Yeniden mail gönderildi');
                    });
            };


        }
    ]);