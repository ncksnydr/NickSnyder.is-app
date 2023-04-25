
<section id="contact">
	<div class="relative bg-white">
		<div class="absolute inset-0">
			<div class="absolute inset-y-0 left-0 w-1/2 bg-primaryMuted-100"></div>
		</div>

		<div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
			<div class="bg-primaryMuted-100 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
				<div class="mx-auto max-w-lg">
					<h2 class="subheadline">Get in touch</h2>
					<p class="mt-3 text-lg leading-8 text-primary-900">{!! $contact->copy !!}</p>
					<dl class="mt-8 text-base text-primary-900">
						<div class="mt-3">
							<dt class="sr-only">Email</dt>
							<dd>
								<a class="flex" href="mailto:{{ $contact->email->actual }}?subject={{ $contact->email->subjectLine }}">
									<svg class="h-6 w-6 flex-shrink-0 text-primary-900" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
									</svg>
									<span class="ml-3">{{ $contact->email->display }}</span>
								</a>
							</dd>
						</div>

					</dl>

				</div>
			</div>
			
			<div class="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
				<div class="mx-auto max-w-lg lg:max-w-none">
					<div class="grid lg:grid-cols-3 lg:gap-12">
						<img class="hidden lg:block" src="{{ $about->image->url }}" alt="{{ $about->image->alt }}">
						<div class="col-span-2">
							<h2 class="subheadline mb-3">About Nick</h2>
							<p class=" text-18 leading-8 text-primary-900">{{ $about->bio }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
