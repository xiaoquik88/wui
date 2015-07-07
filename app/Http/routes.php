<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/gentest', function () {

//    $test = array();
//
//    $test['className'] = 'row';
//    $test['fieldGroup'] = [];
//
//    $child['className'] = "form-control";
//    $child['type'] = "input";
//    $test['fieldGroup'] = $child;
//
//
//    echo "<pre>";
//    print_r(json_encode($test));
//    echo "</pre>";
//    exit;

    $data = array(
        '0'        => 'content 0',
        '1'        => 'content 1',
        '1.1'      => 'content 1.1',
        '1.1.1'    => 'content 1.1.1',
        '2'        => 'content 2',
        '4'        => 'content 4',
        '4.1'      => 'content 4.1',
        '4.1.1'    => 'content 4.1.1',
        '4.1.1.9'  => 'content 4.1.1.9',
        '4.1.1.10' => 'content 4.1.1.10',
        '4.1.1.11' => 'content 4.1.1.11',
    );

    $struct = array(
        'children' => array()
    );

    foreach ($data as $ruleID => $content) {
        $parent =& $struct;
        foreach (explode('.', $ruleID) as $val) {
            if (!isset($parent['children'][$val])) {
                $parent['children'][$val] = array(
                    'content' => '',
                    'children' => array()
                );
            }

            $parent =& $parent['children'][$val];
        }

        $parent['content'] = $content;
    }
    echo "<pre>";
    print_r($struct);
    echo "</pre>";
    exit;

//
//    $formStruct =  DB::table('scr_frm_det')
//        ->where('i_frm_id',2)
//        ->where('i_frm_id',2)
////        ->where('p_pos',0)
//        ->orderBy('p_pos')
//        ->get();


//
//    echo "<pre>";
//    print_r($formStruct);
//    echo "</pre>";
//    exit;


});


Route::get('/login', 'ApiAuthController@index');


Route::get('/apiguide', 'ApiGuideController@index');

Route::get('/method', 'MethodController@index');


