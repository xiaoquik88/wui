hyBridApp.directive('postsPagination', function(){  
   return{
      restrict: 'E',
      template: '<ul class="pagination pagination-sm no-margin pull-right">'+
        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="listing(1)">&laquo;</a></li>'+
        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="listing(currentPage-1)">&lsaquo; Prev</a></li>'+
        '<li ng-repeat="i in range" ng-class="{active : currentPage == i}">'+
            '<a href="javascript:void(0)" ng-click="listing(i)">@{{i}}</a>'+
        '</li>'+
        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="listing(currentPage+1)">Next &rsaquo;</a></li>'+
        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="listing(totalPages)">&raquo;</a></li>'+
      '</ul>'
   };
});

hyBridApp.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    changeMonth: true,
                    changeYear: true,
                    yearRange: "2014:2050",
                    showButtonPanel: true,
                    dateFormat: 'mm/yy',
                    onClose: function(dateText, inst) {
                        var month = $("div#ui-datepicker-div .ui-datepicker-month :selected").val();
                        var year = $("div#ui-datepicker-div .ui-datepicker-year :selected").val();

                        $(this).datepicker('setDate', new Date(year, month, 1));
                    },
                    beforeShow : function(input, inst) {
                        if ((datestr = $(this).val()).length > 0) {
                            year = datestr.substring(datestr.length-4, datestr.length);
                            month = datestr.substring(0, 2);
                            // alert("year = "+year+" month = "+month)
                            $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
                            $(this).datepicker('setDate', new Date(year, month, 1));
                        }
                    },
                    onSelect:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    },
                    onClick:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});

