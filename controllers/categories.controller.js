angular.module('gks')

.controller('CategoriesCtrl', ['$scope', '$http', function( $scope, $http ) {
    $http.get('/categories').success(function(data){
        $scope.categories =  data;
        console.log('CategoriesCtrl: ' + $scope.categories);
    });

}])


.controller('CategoryDetailsCtrl', ['$scope', '$http', '$routeParams', '$location',  function( $scope, $http, $routeParams, $location ) {
    $http.get('/categories/' + $routeParams.id).success(function(data){
        $scope.category =  data;
    });

    /*$scope.removeCategory = function() {

        $http.delete('/categories/' + $routeParams.id).success(function (data) {
            console.log(data);
        });

        $location.path('/categories');
    }*/


}])

    .controller('CategoryCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function( $scope, $http, $routeParams, $location ) {
        $http.get('/categories').success(function(data){
            $scope.categories =  data;
            console.log('CategoryCreateCtrl: ' + $scope.categories);
        });

        $scope.addCategory = function() {
            var data = {
                _id: $routeParams.id,
                name: $scope.name,
                description: $scope.description
            };

            $http.post('/categories', data).success(function (data, status) {
                console.log(status);
            });

            $location.path('/categories');
        }

    }])


    .controller('CategoryEditCtrl', ['$scope', '$http', '$routeParams', '$location', function( $scope, $http, $routeParams, $location ) {
/*        $http.get('/categories').success(function(data){
            $scope.categories =  data;
        });*/

        $http.get('/categories/' + $routeParams.id).success(function(data){
            $scope.category =  data;
        });

        $scope.updateCategory = function() {
            var data = {
                id:             $routeParams.id,
                name:           $scope.category.name,
                description:    $scope.category.description
            };

            $http.put('/categories', data).success(function (data, status) {
                console.log(status);
            });



            $location.path('/categories');
        }

        $scope.removeCategory = function() {

            $http.delete('/categories/' + $routeParams.id).success(function (data) {
                console.log(data); alert(data);
            });

            $location.path('/categories');
        }
    }])