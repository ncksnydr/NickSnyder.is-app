<!-- Mobile menu, show/hide based on menu open state. -->
  <div id="mobileMenu" class="hidden" role="dialog" aria-modal="true">
	  <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-2 sm:ring-gray-900/10">
		
      <div class="flex items-center justify-between">
        <button type="button" id="mobileMenuClose" class="-m-2.5 rounded-md p-2.5 icon icon-mobile-trigger">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
						<a href="{{ $links->nav->projects }}" class="nav-item" target="_blank">Projects</a>
						<a href="{{ $links->nav->resume }}" class="nav-item" target="_blank">Resume</a>
						<a href="{{ $links->nav->about }}" class="nav-item" target="_blank">About</a>

						<a href="{{ $links->social->linkedin }}" class="nav-item" target="_blank">LinkedIn</a>
						<a href="{{ $links->social->github }}" class="nav-item" target="_blank">GitHub</a>
						<a href="{{ $links->social->codepen }}" class="nav-item" target="_blank">CodePen</a>
						<a href="{{ $links->social->dribbble }}" class="nav-item" target="_blank">Dribbble</a>
          </div>
        </div>
      </div>
    </div>
  </div>