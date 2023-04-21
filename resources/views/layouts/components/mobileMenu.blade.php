<!-- Mobile menu, show/hide based on menu open state. -->
  <div id="mobileMenu" class="hidden" role="dialog" aria-modal="true">
	  <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-2 sm:ring-gray-900/10">
		
      <div class="flex items-center justify-between">
			  <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Nick Snyder</span>
          <img class="h-8 w-auto" src="/assets/images/branding/nick-snyder-logo.svg" alt="Logo for NickSnyder.is">
        </a>

        <button type="button" id="mobileMenuClose" class="-m-2.5 rounded-md p-2.5 text-slate-600">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
						<a href="{{ $globals->nav->projects }}" class="nav-item">Projects</a>
						<a href="{{ $globals->nav->resume }}" class="nav-item">Resume</a>
						<a href="{{ $globals->nav->dribbble }}" class="nav-item">Design samples</a>
						<a href="{{ $globals->nav->codepen }}" class="nav-item">Code samples</a>
						<a href="{{ $globals->nav->github->source }}" class="nav-item">View source</a>
          </div>
        </div>
      </div>
    </div>
  </div>