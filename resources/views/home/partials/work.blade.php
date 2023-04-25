<section id="projects">
	<div class="container-grid grid-cols-1">
			@foreach ($projects['live'] as $item)

				<article class="card max-w-4xl lg:w-full mx-auto text-center grid grid-cols-1 mb-12 md:grid-cols-2 md:text-left z-10">
			
				<div class="card-image bg-cover" style="min-height: 400px; width: 100%;background-image: url('{{ $item->image->url }}')">
				</div>

				<section class="card-data">
					<h3 class="card-title mb-6 text-center md:text-left">{{ $item->title }}</h4>
							<div class="grid text-center grid-cols-2 md:text-left">
								<dl>
									<dt class="category-header">Brand</dt>
									<dd class="category-credit">{{ $item->brand }}</dd>
								</dl>
								<dl>
									<dt class="category-header">{{ $item->client->relationship }}</dt>
									<dd class="category-credit">{{ $item->client->name }}</dd>
								</dl>
							</div>
							<p class="card-description">{!! $item->notes !!}</p>
						


					<a href="{{ $item->link->url }}" class="inline-block btn btn-primary mt-6 mx-auto" target="_blank">
					@if ($item->link->isWaybackMachine)
						View archived project via WaybackMachine
					@else
						View project
					@endif
					</a>
				 </section>
				</article>
				{{-- @include('components/card') --}}

			@endforeach
	</div>
</div>