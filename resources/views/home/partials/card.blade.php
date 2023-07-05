<article class="card max-w-4xl lg:w-full mx-auto text-center grid grid-cols-1 mb-12 md:grid-cols-2 md:text-left z-10">
	<div class="card-image bg-cover" style="min-height: 400px; width: 100%;background-image: url('{{ $item->image->url }}')"></div>
	<section class="card-data">
		<h1 class="card-title mb-6 text-center md:text-left">{{ $item->title }}</h1>

		<div class="text-center grid grid-cols-2 md:text-left lg:block">
			<dl class="lg:inline-block mr-9">
				<dt class="category-header">Brand</dt>
				<dd class="category-credit">{{ $item->brand }}</dd>
			</dl>
			<dl class="lg:inline-block">
				<dt class="category-header">{{ $item->client->relationship }}</dt>
				<dd class="category-credit">{{ $item->client->name }}</dd>
			</dl>
		</div>
		
		<p class="card-description">{!! $item->notes !!}</p>
						
		<a href="{{ $item->link->url }}" class="inline-flex btn btn-primary mt-6 mx-auto" target="_blank">
			@if ($item->link->isWaybackMachine)
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
			@endif
			View project
		</a>

		@if ($item->link->isWaybackMachine)
			<p class="inline-block mt-4 leading-5">
				<small>
					This project has been archived by the owner, but is available via <em>The Wayback Machine</em>. A live demo is available by request.
				</small>
			</p>		
		@endif

	</section>
</article>