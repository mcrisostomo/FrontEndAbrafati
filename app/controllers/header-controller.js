app.controller('header-controller', function ($rootScope, $location, $localStorage, $scope, $http, $timeout) {
    
    $scope.user = {};
    if ($localStorage && $localStorage.currentUser)
    {
        $scope.user = $localStorage.currentUser;

    }
    // console.log($localStorage.currentUser);
    // console.log($scope.user);
      
    $scope.LogoutApp = function() {
        httpService.logoutApp()
          .then(
            function success() {
              $location.path('/');          
            },
            function error(response, status) {          
            }
          );
      }
  
  
  });