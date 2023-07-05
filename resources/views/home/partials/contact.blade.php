<section id="about" class="bg-primaryMuted-100">
	<div class="relative flex py-24 px-6">
		<aside class="w-2/6">
			<img class="bio-avatar" src="{{ $info->avatar->url }}" alt="{{ $info->avatar->alt }}">
		</aside>
		<section class="w-4/6 pl-16">
			<h2 class="subheadline">About {{ $info->name->firstName }}</h2>
			<p class="mt-3 text-lg leading-8 text-primary-900">{!! $info->bio !!}</p>



			<a class="flex mt-7" href="mailto:{{ $info->email }}">
				<svg class="h-6 w-6 flex-shrink-0 text-primary-900 icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
				</svg>
				<span class="ml-3">{{ $contact->emailDisplay }}</span>
			</a>
		</section>
	</div>
</section>
