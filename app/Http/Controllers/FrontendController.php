<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class FrontendController extends Controller
{
    public function index()
    {
    	return view('welcome');
    }


    public function fetchcategory()
    {
    	$data = Category::where('child_id',0)->where('main_menu',1)->where('status',1)->get();

    	return response()->json($data);

    }
}
