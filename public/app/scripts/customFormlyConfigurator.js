(function() {

    'use strict';

    angular
        .module('apiApp')
        .run(function(formlyConfig){
            formlyConfig.setType({
                name:'dd-input-left',
                templateUrl:'templates/textbox_w_leftdropdown.html'

            })
        })
        .run(function(formlyConfig){
            formlyConfig.setType({
                name:'rep-fields',
                templateUrl:'paramsField.html'
            })
        })




})();
