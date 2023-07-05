<section id="projects">
	<div class="container-grid grid-cols-1">
			<p class="code-request-copy mb-12 text-center">{{ $hero->codeRequest }}</p>
			@foreach ($sections['work']['live'] as $item)
				@include('home.partials.card')
			@endforeach

			@foreach ($sections['work']['archived'] as $item)
				@include('home.partials.card')
			@endforeach
	</div>
</div>
