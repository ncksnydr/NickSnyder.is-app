<?php

declare(strict_types = 1);

namespace App\Http\Controllers;

use Illuminate\Support\Arr;

class HomeController extends Controller {
	public function index() {
		$data_path = base_path().'/public/assets/data/content.json';
		// $data = cache()->remember("home.v1.1", now()->addDays(5), static fn () => json_decode(file_get_contents($data_path)));

		$data = json_decode(file_get_contents($data_path));

		// Randomize live projects.
		//$projects_live = Arr::shuffle($data->sections->projects->live);
		$projects_live = $data->sections->projects->live;
		// Randomize archived projects.
		$projects_archived = Arr::shuffle($data->sections->projects->archived);

		return view('home.index', [
			'colors' => $data->global->colors,
			'info' => $data->global->info,
			'links' => $data->global->links,
			'meta' => $data->global->meta,
			'contact' => $data->sections->contact,
			'hero' => $data->sections->hero,
			'sections' => [
				'contact' => $data->sections->contact,
				'work' => [
					'live' => $projects_live,
					'archived' => $projects_archived
				]
			]
		]);
	}
}
