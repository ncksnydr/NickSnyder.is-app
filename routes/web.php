<?php

declare(strict_types = 1);

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

Route::get('/', static function () {
	$data_path = realpath('../resources/assets/data/content.json');
	$data = json_decode(file_get_contents($data_path));
	$environment = App::environment();

	// Random subject line
	$subject_lines = [
		'I would like to request a meeting of the minds',
		'You\'re just what we\'ve been looking for!',
		'Contact request'
	];

	$random_subject_line = $subject_lines[rand(0, (count($subject_lines) - 1))];
	$data->contact->email->subjectLine = $random_subject_line;

	return view('home.index', [
		'globals' => $data->globals,
		'meta' => $data->meta,
		'hero' => $data->hero,
		'projects' => [
			'live' => $data->projects->live
		],
		'about' => $data->about,
		'contact' => $data->contact
	]);
});
