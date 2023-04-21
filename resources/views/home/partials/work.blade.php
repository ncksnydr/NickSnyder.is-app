<section id="work">
	<div class="container-grid grid-cols-2 gap-4">
			@foreach ($projects['live'] as $item)

				<article class="card grid grid-cols-2 z-10">
			
				<div class="card-image">
					<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80">
				</div>

				 <section class="card-data">

					
							<h3 class="card-title mb-6">{{ $item->title }}</h4>
							<div class="grid grid-cols-2">
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
						


					<a href="{{ $item->link->url }}" class="btn btn-primary" target="_blank">
				
					@if ($item->link->isWaybackMachine)
						View archived project via WaybackMachine.
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