'use strict';

var app = angular.module('myApp', ['ui.router', 'stormpath', 'stormpath.templates']);

app.run(function($stormpath) {
    $stormpath.uiRouter({
        loginState: 'login',
        defaultPostLoginState: 'home',
    });
});


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/html/home.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/html/login.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '/html/signup.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: '/html/profile.html',
            controller: 'profileCtrl',
            sp: {
                authenticate: true
            },
            resolve: {
                user: function($user) {
                    return $user.get();
                }
            }
        })

    $urlRouterProvider.otherwise('/');

});
