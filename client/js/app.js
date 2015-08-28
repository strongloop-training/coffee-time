angular.module('app', ['ngRoute', 'lbServices'])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/forbidden', {
                    templateUrl: 'views/forbidden.html'
                })
                .when('/', {
                    templateUrl: 'views/all-reviews.html',
                    controller: 'AllReviewsController'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'AuthLoginController'
                })
                .when('/logout', {
                    templateUrl: 'views/logout.html',
                    controller: 'AuthLogoutController'
                })
                .when('/my-reviews', {
                    templateUrl: 'views/my-reviews.html',
                    controller: 'MyReviewsController',
                    authenticate: true
                })
                .when('/add-review', {
                    templateUrl: 'views/add-review.html',
                    controller: 'AddReviewController',
                    authenticate: true
                })
                .otherwise({
                    redirectTo : '/'
                });
        }])
    .run([
        '$rootScope',
        '$location',
        function($rootScope, $location) {
            $rootScope.$on('$routeChangeStart', function(event, next) {
                // redirect to login page if not logged in
                if (next.authenticate && !$rootScope.currentUser) {
                    event.preventDefault(); //prevent current page from loading
                    $location.path('/forbidden');
                }
            });
        }]);