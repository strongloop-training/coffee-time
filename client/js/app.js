angular.module('app', ['ui.router', 'lbServices'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('forbidden', {
                    url: '/forbidden',
                    templateUrl: 'views/forbidden.html',
                })
                .state('all-reviews', {
                    url: '/all-reviews',
                    templateUrl: 'views/all-reviews.html',
                    controller: 'AllReviewsController'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'AuthLoginController'
                })
                .state('logout', {
                    url: '/logout',
                    controller: 'AuthLogoutController'
                })
                .state('my-reviews', {
                    url: '/my-reviews',
                    templateUrl: 'views/my-reviews.html',
                    controller: 'MyReviewsController',
                    authenticate: true
                })
                .state('add-review', {
                    url: '/add-review',
                    templateUrl: 'views/add-review.html',
                    controller: 'AddReviewController',
                    authenticate: true
                });
            
            $urlRouterProvider.otherwise('all-reviews');
        }])
    .run([
        '$rootScope',
        '$state',
        function($rootScope, $state) {
            $rootScope.$on('$stateChangeStart', function(event, next) {
                // redirect to login page if not logged in
                if (next.authenticate && !$rootScope.currentUser) {
                    event.preventDefault(); //prevent current page from loading
                    $state.go('forbidden');
                }
            });
        }]);