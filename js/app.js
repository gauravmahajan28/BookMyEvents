var eventsGoingNotGoingApp = angular.module('eventsGoingNotGoingApp', ['ngRoute','ngMaterial','ngAnimate','ngSanitize','ui.bootstrap']);

    // configure our routes
    eventsGoingNotGoingApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '../views/login.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '../views/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '../views/contact.html',
                controller  : 'contactController'
            });
    });
