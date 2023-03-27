<?php

	// TODO: Create master JSON document for content.
	// TODO: Hide all parts except masthead.
	// TODO: Modify masthead.
		// TODO: Test responsive.
		// TODO: Add JavaScript required.
		// TODO: Test links.
		// TODO: Add JS smooth scroll
	// TODO: Modify hero section
		// TODO: Get content from master JSON
		// TODO: Headline and intro
		// TODO: External sites (GH, Dribbble, CodePen)
	// TODO: Modify about section
		// TODO: Take new headshot
		// TODO: Edit headshot to have 90 school photo background(s)
		// TODO: Update and add bio (via master JSON)
	// TODO: Modify contact section
		// TODO: Add JavaScript for form
		// TODO: Update styles
		// TODO: Update sidebar content
	// TODO: Add work items
		// TODO: Port live items to JSON
		// TODO: Port archived and favorites into one array called "archived"
		// TODO: Add aspect ratio tailwind plugin
		// TODO: Add data to card w/ placeholder image
		// TODO: Convert and optimize images to new aspect ratio

		// Archived favorites
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
				<link rel="stylesheet" type="text/css" href="/assets/css/tofino/tofino.css">
				<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7455494/7340752/css/fonts.css">
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
			<main id="app">
				@include('../chrome/masthead')
				@yield('content')
				@include('../chrome/footer')
			</main>
    </body>
</html>
