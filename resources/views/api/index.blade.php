@extends('layout.master')

@section('content')
 <script type="text/javascript" src="default-theme/js/angular/angular.js" ></script>
 <script type="text/javascript" src="default-theme/js/angular-ui-router/0.2.14/angular-ui-router.js" ></script>

<div ng-app="hybridApp" ui-view >

</div>



<script type="text/javascript">
  
var hybridApp = angular.module('hybridApp', ['ui.router']);

hybridApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
    
  $stateProvider
     .state('show', {
          url: '/:docid',
          templateUrl: 'ng-partials/api/api_manage.html',
          controller : 'ApiController'
          
      });
});

hybridApp.controller('ApiController', ['$scope',
function($scope) 
{
  $scope.api = {};
  $scope.detail = {};
  $scope.show_index = true;
  $scope.show_detail = false;
  $scope.showApiAddEdit = false;

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


   $scope.getDetail = function(id){

      console.log(id);
      $scope.show_index = false;
      $scope.show_detail = true;
      $scope.showApiAddEdit = false;
      $scope.detail.id = id;
   };

   $scope.register = function(){
       $scope.showApiAddEdit = true;
       $scope.show_index = false;
       $scope.show_detail = false;
   };

}]);  
</script>


@stop