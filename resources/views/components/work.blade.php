<?php
	$collection = file_get_contents("/Users/nick/Sites/web/NickSnyder.is/app/development/resources/assets/projects.json");
	$collection = json_decode($collection);


	// echo "<pre>";
	// var_dump($collection);
	// echo "</pre>";

?>
@foreach ($collection->data as $item)
	{{-- WORKS! -- }}
	<div class="bg-white border-r-4 border-black">
		<h1>{{ $item->name }}</h1>
	</div>
	{{-- @foreach ($items as $item)
		{{ $item }}
	@endforeach --}}
@endforeach