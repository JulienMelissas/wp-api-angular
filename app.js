var getposts = angular.module('getposts', []);

getposts.controller('PostsController', function($scope, $http) {
  $scope.getPosts = function() {
    var response = $http({
      method: 'GET',
      url: 'http://wp-api.dev/wp-json/wp/v2/posts'
    }).then(function successCallback(response) {
        $scope.posts = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

  $scope.getPosts();
});
