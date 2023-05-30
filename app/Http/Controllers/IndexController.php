<?php

declare(strict_types = 1);

namespace App\Http\Controllers;

class IndexController extends Controller {
	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function index() {
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
	}
}
