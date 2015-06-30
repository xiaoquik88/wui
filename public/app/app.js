/* global angular */
(function() {

'use strict';

var apiApp = angular.module('apiApp', ['ui.router','formlyBootstrap','formly']);

apiApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/partial-home.html'
        })

        .state('api', {
            abstract: true,
            url: '/api',
            templateUrl: 'app/api/partial-api.html',
            controller: ['$scope', '$state',
                function (  $scope,   $state) {
                    $scope.api = {};
                    $scope.detail = {};
                    $scope.detail.id = 100;


                    $scope.api.title = [
                        {
                            "id":1,
                            "title":"show",
                            "group":"member"
                        },
                        {
                            "id":2,
                            "title":"create",
                            "group":"member"
                        },
                        {
                            "id":3,
                            "title":"edit",
                            "group":"member"
                        },
                        {
                            "id":4,
                            "title":"terminate",
                            "group":"member"
                        }
                    ];

                    $scope.add = function(){

                      //console.log('asasa');
                        $scope.api.title = [
                            {
                                "id":1,
                                "title":"show",
                                "group":"member"
                            },
                            {
                                "id":2,
                                "title":"create",
                                "group":"member"
                            }
                        ];
                    };

                    //$scope.goToRandom = function () {
                    //    var randId = utils.newRandomKey($scope.contacts, "id", $state.params.contactId);
                    //
                    //    // $state.go() can be used as a high level convenience method
                    //    // for activating a state programmatically.
                    //    $state.go('contacts.detail', { contactId: randId });
                    //};
                }]

        })
        .state('api.detail', {

            url: '/{apiId:[0-9]{1,4}}',

            views: {

                // So this one is targeting the unnamed view within the parent state's template.
                'columnTwo@api': {
                    templateUrl: 'app/api/partial-api-detail.html',
                    controller: ['$scope', '$stateParams',
                        function (  $scope,   $stateParams) {
                            $scope.detail = {};
                            $scope.detail.id = $stateParams.apiId;
                            //console.log('checking'+$scope.detail.id);

                        }]
                }


            }
        })
        .state('api.add', {

            url: '/add',

            views: {

                // So this one is targeting the unnamed view within the parent state's template.
                'columnTwo@api': {
                    templateUrl: 'app/api/partial-api-manage.html',
                    controller: 'ApiManageController as vm'
                }


            }
        });





});

})();