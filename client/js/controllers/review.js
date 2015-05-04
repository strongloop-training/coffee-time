angular.module('app')
  .controller('AllReviewsController', ['$scope', 'Review', function($scope, Review) {
    $scope.reviews = Review.find({
      filter: {
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    });
  }])
  .controller('MyReviewsController', ['$scope', 'Review', '$rootScope', function($scope, Review, $rootScope) {
    $scope.reviews = Review.find({
      filter: {
        where: {
          reviewerId: $rootScope.currentUser.id
        },
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    });
  }])
  .controller('AddReviewController', [
    '$scope',
    'CoffeeShop',
    'Review',
    '$state',
    '$rootScope',
    function($scope, CoffeeShop, Review, $state, $rootScope) {
      $scope.coffeeShops = [];
      $scope.selectedShop = {};
      $scope.review = {};

      CoffeeShop
        .find()
        .$promise
        .then(function(coffeeShops) {
          $scope.coffeeShops = coffeeShops;
        });

      $scope.submitForm = function() {
        Review
          .create({
            rating: $scope.review.rating,
            text: $scope.review.comments,
            coffeeShopId: $scope.selectedShop.id,
            reviewerId: $rootScope.currentUser.id
          })
          .$promise
          .then(function() {
            $state.go('my-reviews');
          });
      };
    }
  ]);