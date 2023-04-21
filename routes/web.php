<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $data_path = realpath('../resources/assets/data/content.json');
    $data = json_decode(file_get_contents($data_path));
    $environment = App::environment();

    return view('home.index', [
            'globals' => $data->globals,
            'meta' => $data->meta,
            'hero' => $data->hero,
            'projects' => [
                'live' => $data->projects->live,
                'archived' => $data->projects->archived
            ],
            'about' => $data->about,
            'contact' => $data->contact
    ]);
});
