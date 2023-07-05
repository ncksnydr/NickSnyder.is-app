<title>{{ $meta->title }}</title>
<meta name="description" content="{{ $meta->description }}">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="{{ $app->make('url')->to('/') }}">
<meta property="og:type" content="website">
<meta property="og:title" content="{{ $meta->title }}">
<meta property="og:description" content="{{ $meta->description }}">
<meta property="og:image" content="{{ $meta->image }}">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="">
<meta property="twitter:url" content="{{ $app->make('url')->to('/') }}">
<meta name="twitter:title" content="{{ $meta->title }}">
<meta name="twitter:description" content="{{ $meta->description }}">
<meta name="twitter:image" content="{{ $meta->image }}">

<link rel="apple-touch-icon" sizes="57x57" href="/assets/images/branding/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/assets/images/branding/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/assets/images/branding/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/assets/images/branding/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/assets/images/branding/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/assets/images/branding/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/assets/images/branding/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/assets/images/branding/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/branding/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/assets/images/branding/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/branding/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/assets/images/branding/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/branding/favicon-16x16.png">
<link rel="manifest" href="/assets/images/branding/manifest.json">
<meta name="msapplication-TileColor" content="{{ $colors->primary }}">
<meta name="msapplication-TileImage" content="/assets/images/branding/ms-icon-144x144.png">
<meta name="theme-color" content="{{ $colors->primary }}">
