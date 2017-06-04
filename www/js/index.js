/**
 * Created by s156386 on 2-6-2017.
 */
var global = angular.module('global', ['ui.router', 'chart.js']);
global.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'www/html/home.html',
        controller: 'HomeCtrl'
    })
        .state({
            name: 'health',
            url: '/health',
            templateUrl: 'www/html/health.html',
            controller: 'HealthCtrl'
        })
        .state({
            name: 'tracking',
            url: '/tracking',
            templateUrl: 'www/html/tracking.html',
            controller: 'TrackingCtrl'
        })
        .state({
            name: 'settings',
            url: '/settings',
            templateUrl: 'www/html/settings.html',
            controller: 'SettingsCtrl'
        });
});