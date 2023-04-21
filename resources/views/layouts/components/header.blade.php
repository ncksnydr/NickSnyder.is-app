<header id="mainHeader" class="bg-white shadow-md z-50 relative">
  <nav class="container" aria-label="Global">
		
		<a href="/" class="-m-1.5 p-1.5">
      <span class="sr-only">{{ $globals->name->firstName }} {{ $globals->name->lastName }}</span>
      <img class="h-12 w-auto" src="/assets/images/branding/nick-snyder-logo.svg" alt="Logo for NickSnyder.is">
    </a>

		<!-- Play around with gray color -->
    <div class="flex lg:hidden">
      <button id="mobileMenuOpen" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div id="desktopMenu" class="hidden lg:flex lg:gap-x-12">
      <a href="{{ $globals->nav->projects }}" class="nav-item">Projects</a>
      <a href="{{ $globals->nav->resume }}" class="nav-item">Resume</a>
      <a href="{{ $globals->nav->dribbble }}" class="nav-item">Design samples</a>
      <a href="{{ $globals->nav->codepen }}" class="nav-item">Code samples</a>
      <a href="{{ $globals->nav->github->source }}" class="nav-item">View source</a>
    </div>
  </nav>

	@include('layouts.components.mobileMenu')
</header>
