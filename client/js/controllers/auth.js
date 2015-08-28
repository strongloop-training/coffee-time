angular
  .module('app')
  .controller('AuthLoginController', [
    '$scope',
    'AuthService',
    '$location',
    function($scope, AuthService, $location) {
      $scope.user = {
        email: '',
        password: ''
      };

      $scope.login = function() {
        AuthService.login($scope.user.email, $scope.user.password)
          .then(function() {
            $location.path('/my-reviews');
          });
      };
    }
  ])
  .controller('AuthLogoutController', [
    '$scope',
    'AuthService',
    '$location',
    function($scope, AuthService, $location) {
      AuthService.logout()
        .then(function() {
          $location.path('/');
        });
    }
  ]);