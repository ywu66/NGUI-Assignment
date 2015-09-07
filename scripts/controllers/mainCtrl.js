'use strict';


angular.module('travelBooking')
    .controller('mainCtrl', function($scope, getImageService,$rootScope) {
        $scope.user = {};
        $scope.format = 'dd-MMMM-yyyy';
        $scope.currentDate = new Date();
        $scope.user.departDate = new Date();
        $scope.bgImage = getImageService.get();
        $scope.bgImage.$promise.then(function(data){
                        $rootScope.colors = 'http://www.bing.com' + data.images[0].url;
            console.log($scope.colors);
        });
        $scope.tabs = [{
            active: true
        }, {
            active: false
        }, {
            active: false
        }];

        $scope.departStatus = {
            open: false
        };
        $scope.returnStatus = {
            open: false
        };
        //Go to next step
        $scope.next = function(index) {
            $scope.tabs[index].active = true;
        };
        //Open depart datepicker
        $scope.openDepart = function($event) {
            $scope.departStatus.open = true;
        };
        //Open return datepicker
        $scope.openReturn = function($event) {
            $scope.returnStatus.open = true;
        };
        //Clear depart date if it is repicked
        $scope.clearDate = function() {
            $scope.user.returnDate = null;
        };

    });
