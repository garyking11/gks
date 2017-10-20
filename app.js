(function () {
    'use strict';

    var app = angular.module('gks', ['ngRoute','ngCookies']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/categories', {
                templateUrl: 'views/categories.view.php',
                controller: 'CategoriesCtrl'
            }).

            when('/articles', {
                templateUrl: 'views/articles.view.php',
                controller: 'ArticlesCtrl'
            }).

            when('/articles/details/:id', {
                templateUrl: 'views/article-details.view.php',
                controller: 'ArticleDetailsCtrl'
            }).

            when('/articles/category/:category', {
                templateUrl: 'views/cat-articles.view.php',
                controller: 'ArticlesCategoryCtrl'
            }).

            when('/articles/add', {
                templateUrl: 'views/add-article.view.php',
                controller: 'ArticleCreateCtrl'
            }).

            when('/articles/edit/:id', {
                templateUrl: 'views/edit-article.view.php',
                controller: 'ArticleEditCtrl'
            }).

            when('/categories/details/:id', {
                templateUrl: 'views/article-details.view.php',
                controller: 'ArticleDetailsCtrl'
            }).

            when('/categories/add', {
                templateUrl: 'views/add-category.view.php',
                controller: 'CategoryCreateCtrl'
            }).

            when('/categories/edit/:id', {
                templateUrl: 'views/edit-categories.view.php',
                controller: 'CategoryEditCtrl'
            }).
            /*when('/login', {
                templateUrl: 'views/login.view.php',
                controller: 'LoginController',
                controllerAs: 'vm'
            }).

            when('/register', {
                templateUrl: 'register/register.view.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
            })*/
            otherwise({
                redirectTo: '/categories'
            })

    }])/*.run(run);

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }*/

})();