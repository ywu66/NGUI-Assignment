'use strict';
/* Module for travelBooking app*/
angular.module('travelBooking', [
        'ui.router',
        'ui.bootstrap'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'mainCtrl',
            });
    });
