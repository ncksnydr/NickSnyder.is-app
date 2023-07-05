<a href="#top"></a>

<h1 align="center">
 <img src="public/assets/images/branding/logo_nick-snyder-full.svg" alt="Logo for Nick Snyder, UX/UI Designer and Full-Stack Developer" style="display:block;margin:0 auto;width:100%;max-width:600px">
</h1>

<p align="center">
 <strong>
    <a href="#installation">Installation</a>
  •
  <a href="#code-samples">Code samples</a>
 •
 <a href="https://nicksnyder.is" target="_blank">Portfolio site</a>
 </strong>
</p>
<hr style="height:1px">

## Installation & configuration

### Installation

To install all dependencies:

1. Open a Terminal; navigate to the project root.
1. In the Terminal, type `npm run init`.

If you would prefer to install dependencies manually, the `init` script does the following:

1. `composer install`
1. `npm install`
1. `cp env.example .env`
1. `npm run build-linter-eslint`
1. `npm run build-linter-markdown`
1. `npm run build-linter-prettier`
1. `npm run build-linter-phpcsfixer`
1. `npm run build-linter-stylelint`

### Configuration

Once dependencies have been installed:

1. Create a named development server using [Laravel Valet](https://laravel.com/docs/10.x/valet) or similar.
1. Open file `.env`.
1. Update the variable `APP_URL` with the named server that you created in step one.
1. Update the variable `APP_KEY` by one of the following:
1. If `artisan` is installed: `php artisan key:generate`
1. Generate a key [here](https://generate-random.org/laravel-key-generator); add to `APP_KEY`.

## Code samples

For those unfamiliar with the file structure of Laravel, here are a few sections where specific code samples can be found.

### Linter configuration file builder (JavaScript [ES6], Node.js, PHP)

A system for building similar linter configuartion files but with the added flexibility to change rules from project-to-project.

The file that finds, compiles, and minifies the linter configurations can be found here: `resources/config/helpers/buildLinterConfig.js` and the individual configuartion files for each linter (ESLint, Markdownlint, Prettier, PHP-CS-Fixer, and Stylelint) can be found here: `resources/config/linters`.

### Tailwind configuration files (JavaScript [ES6])

I use a customized version of TailwindCSS that is focused on integrating styles from a Design System—dubbed _Oscillator_—created and managed in Figma.

The main configuration file (`tailwind.config.js`) can be found at the project root and contains all of the paths to the configuration files. Because I appreciate you stopping by, here is a breakdown of the configuration files:

- `resources/styles/oscillator/tailwindcss` - the folder containing all theme configuration files for TailwindCSS.
- `resources/styles/oscillator/tailwindcss/colors.js` - Project colors and a custom color palette generator.
- `resources/styles/oscillator/tailwindcss/screens.js` - Responsive breakpoints.
- `resources/styles/oscillator/tailwindcss/spacing.js` - Box model values. The function `generateRemSpacing` creates values from 0–20 and then multiples of three from 21–300 (e.g. 21, 24, 27, et al). Once active (in a future version), these values will replace the default spacing values provided by TailwindCSS by making the classes 1:1 with the pixel value. The class `.mb-6` will equal `0.375rem/6px` rather than `1.5rem/24px`.
- `resources/styles/oscillator/tailwindcss/typography.js` - Font families, sizes, and weights.

### Site scripts (JavaScript [ES6])

- `resources/scripts/nks.js`
- `resources/scripts/oscillator`
- `resources/scripts/utilities`

### Site styles (CSS3, PostCSS, )

- `resources/styles/nks.css`

- `resources/styles/oscillator/**`

### Site views (HTML5, PHP8, Blade)

- `resources/views`.
