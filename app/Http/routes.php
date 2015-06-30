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

    $formStruct =  DB::table('scr_frm_det')
        ->where('i_frm_id',2)
//        ->where('p_pos',0)
        ->orderBy('p_pos')
        ->get();

    echo "<pre>";
    print_r($formStruct);
    echo "</pre>";
    exit;


});

function recu(){
    return "hello";
}

Route::get('/login', 'ApiAuthController@index');


Route::get('/apiguide', 'ApiGuideController@index');

Route::get('/method', 'MethodController@index');


