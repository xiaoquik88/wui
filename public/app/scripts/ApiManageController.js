(function() {

    'use strict';

    angular
        .module('apiApp')
        .controller('ApiManageController',['$scope', '$stateParams',
            function (  $scope,   $stateParams) {

                var vm = this;
                vm.onSubmit = onSubmit;
                vm.model = {
                    api_name : '',
                    adv_url: 'http://*domain*/iamfromthedatabase/testinglah',
                    api_description : '29.72 million (2013)\n98.39 million (2013)',
                    params: [
                        {
                            id : "t_member_id",
                            type : "numeric",
                            required : true,
                            desc : "Valid Member ID"
                        },
                        {
                            id : "t_member_age",
                            type : "numeric",
                            required : false,
                            desc : "Age Doesn't matter"
                        }
                    ],
                    adv_url_method:'METHOD'
                };



                vm.pageTitle = 'Simple Custom Templates';
                vm.formFields = [{
                    className: 'row',
                    fieldGroup: [
                    {
                        key: 'api_name',
                        type: 'input',
                        className: 'col-xs-12',
                        templateOptions: {
                            type: 'text',
                            label: 'Name',
                            placeholder: 'API Name',
                            required: true

                        }
                    }]
                },

                    {
                        className: 'row',
                        fieldGroup: [
                            {
                        key:'adv_url',
                        type:'dd-input-left',
                        className: 'col-xs-12',
                        templateOptions: {
                            label: 'URL',
                            class: 'testing',
                            placeholder:'http://',
                            required: true,
                            ddOptions : ['GET','POST','PUT','UPDATE','PATCH','DELETE']

                        }
                    }]},
                    {className: 'row',
                        fieldGroup: [{
                        key: 'api_description',
                        type: 'textarea',
                        className: 'col-xs-12',
                        templateOptions: {
                            type: 'text',
                            label: 'Description',
                            placeholder: 'Please explicitly describe the API',
                            required: true,
                            rows : 6
                        }
                    }]},
                    {
                        "template": "<div style='margin-left: 10px;'><strong>Parameters</strong></div>"
                    },
                    {
                        "className": "row",
                        "fieldGroup": [
                            {
                                "className": "col-xs-3",
                                "type": "input",
                                "key": "parName",
                                "templateOptions": {
                                    "label": "Name"
                                }
                            },
                            {
                                "className": "col-xs-3",
                                "type": "select",
                                "key": "parType",
                                "templateOptions": {
                                    "label": "Type",
                                    options: [
                                        {name: 'Numeric', value: 'numeric'},
                                        {name: 'String', value: 'string'},
                                        {name: 'Boolean', value: 'boolean'},
                                        {name: 'Required Numeric', value: 'req_numeric'},
                                        {name: 'Required String', value: 'req_string'},
                                        {name: 'Required Boolean', value: 'req_boolean'}
                                    ]
                                }
                            },
                            {
                                "className": "col-xs-6",
                                "type": "textarea",
                                "key": "parDesc",
                                templateOptions: {
                                    type: 'text',
                                    label: 'Description',
                                    placeholder: 'Please explicitly describe the parameters',
                                    rows : 6
                                }
                            }
                        ]
                    }
                    ,
                    {
                        "className": "row",
                        "fieldGroup": [
                            {
                                "className": "col-xs-3",
                                "type": "input",
                                "key": "parName",
                                "templateOptions": {
                                    "label": "Name"
                                }
                            },
                            {
                                "className": "col-xs-3",
                                "type": "input",
                                "key": "parType",
                                "templateOptions": {
                                    "label": "Type"
                                }
                            },
                            {
                                "className": "col-xs-6",
                                "type": "textarea",
                                "key": "parDesc",
                                templateOptions: {
                                    type: 'text',
                                    label: 'Description',
                                    placeholder: 'Please explicitly describe the parameters',
                                    rows : 6
                                }
                            }
                        ]
                    },
                    {
                        "className": "row",
                        "fieldGroup": [
                            {
                                "className": "col-xs-6",
                                "fieldGroup": [
                                    {
                                        //"className": "col-xs-6",
                                        "type": "textarea",
                                        "key": "parName",
                                        "templateOptions": {
                                            type: 'text',
                                            label: 'Illustrate',
                                            placeholder: 'Boleh!',
                                            rows : 6
                                        }
                                    }
                                ]
                            },
                            {
                                "className": "col-xs-6",
                                "fieldGroup": [
                                    {
                                        "className": "row",
                                        "fieldGroup": [
                                            {
                                                "className": "col-xs-6",
                                                "type": "input",
                                                "key": "parName",
                                                "templateOptions": {
                                                    "label": "Name"
                                                }
                                            },
                                            {
                                                "className": "col-xs-6",
                                                "type": "select",
                                                "key": "parType",
                                                "templateOptions": {
                                                    "label": "Type",
                                                    options: [
                                                        {name: 'Numeric', value: 'numeric'},
                                                        {name: 'String', value: 'string'},
                                                        {name: 'Boolean', value: 'boolean'},
                                                        {name: 'Required Numeric', value: 'req_numeric'},
                                                        {name: 'Required String', value: 'req_string'},
                                                        {name: 'Required Boolean', value: 'req_boolean'}
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "className": "row",
                                        "fieldGroup": [
                                            {
                                                "className": "col-xs-6",
                                                "type": "input",
                                                "key": "parName2",
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Name2',
                                                    placeholder: 'API Name'
                                                }

                                            },
                                            {
                                                "className": "col-xs-6",
                                                "type": "select",
                                                "key": "parType",
                                                "templateOptions": {
                                                    label : "Type",
                                                    options: [
                                                        {name: 'Numeric', value: 'numeric'},
                                                        {name: 'String', value: 'string'},
                                                        {name: 'Boolean', value: 'boolean'},
                                                        {name: 'Required Numeric', value: 'req_numeric'},
                                                        {name: 'Required String', value: 'req_string'},
                                                        {name: 'Required Boolean', value: 'req_boolean'}
                                                    ]

                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "className": "row",
                                        "fieldGroup": [
                                            {
                                                "className": "col-xs-12",
                                                "type": "input",
                                                "key": "parName3",
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Name1',
                                                    placeholder: 'API Name'


                                                }

                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }

                ];


                vm.illustrate = angular.copy(vm.formFields);


                function onSubmit() {
                    console.log(vm.model);
                }

            }])

})();
