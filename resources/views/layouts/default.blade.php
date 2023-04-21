<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		@include('layouts.partials.seo')
		<link rel="stylesheet" type="text/css" href="/assets/fonts/tofino/tofino.css">
		<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7455494/7340752/css/fonts.css">
		@vite('resources/styles/nks.css')
		@vite('resources/scripts/nks.js')
	</head>
	<body>
		<main id="app">
			@include('layouts.components.header')
			@yield('content')
			@include('layouts.components.footer')
		</main>
	</body>
</html>
