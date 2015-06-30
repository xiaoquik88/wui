<?php
/**
 * Created by PhpStorm.
 * User: clifford
 * Date: 6/23/15
 * Time: 5:58 PM
 */

namespace App\Http\Controllers;


class ApiAuthController extends Controller{

    function  index(){

        return view('login.index');

    }

}