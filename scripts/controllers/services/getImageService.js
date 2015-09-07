'use strict';

angular.module('travelBooking')
    .factory('getImageService', function($resource) {
        return $resource('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US', {}, {
            get: {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    });
