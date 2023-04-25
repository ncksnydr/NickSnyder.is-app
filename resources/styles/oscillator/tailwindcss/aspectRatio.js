/**
 *  TailwindCSS → Theme → Aspect Ratio
 *  @see https://tailwindcss.com/docs/aspect-ratio
 */

import { aspectRatioBuilder } from '../../../scripts/utilities/tailwindBuildHelpers';

const aspectRatiosNamed = {
	'a4-landscape': '7 / 5',
	'a4-portrait': '5 / 7',
	'ad-button1-landscape': '4 / 3',
	'ad-button1-portrait': '3 / 4',
	'ad-button2-landscape': '2 / 1',
	'ad-button2-portrait': '1 / 2',
	'ad-full-banner-landscape': '78 / 10',
	'ad-full-banner-portrait': '10 / 78',
	'ad-half-banner-landscape': '39 / 10',
	'ad-half-banner-portrait': '10 / 39',
	'ad-half-page-landscape': '2 / 1',
	'ad-half-page-portrait': '1 / 2',
	'ad-leaderboard-landscape': '728 / 90',
	'ad-leaderboard-portrait': '90 / 728',
	'ad-micro-button-landscape': '88 / 31',
	'ad-micro-button-portrait': '31 / 88',
	'ad-pop-under-landscape': '47 / 20',
	'ad-pop-under-portrait': '20 / 47',
	'ad-rectangle-landscape': '6 / 5',
	'ad-rectangle-portrait': '5 / 6',
	'ad-skyscraper-landscape': '5 / 1',
	'ad-skyscraper-portrait': '1 / 5',
	'ad-vertical-banner-landscape': '2 / 1',
	'ad-vertical-banner-portrait': '1 / 2',
	'ad-vertical-rectangle-landscape': '5 / 3',
	'ad-vertical-rectangle-portrait': '3 / 5',
	'ad-wide-skyscraper-landscape': '15 / 4',
	'ad-wide-skyscraper-portrait': '4 / 15',
	'billboard-landscape': '4 / 1',
	'billboard-portrait': '1 / 4',
	'card-landscape': '7 / 5',
	'card-portrait': '5 / 7',
	'card-tobacco-landscape': '42 / 23',
	'card-tobacco-portrait': '23 / 42',
	'film-landscape': '11 / 8',
	'film-portrait': '8 / 11',
	'golden-landscape': '809 / 500',
	'golden-portrait': '500 / 809',
	'hd-landscape': '16 / 9',
	'hd-portrait': '9 / 16',
	'imax-landscape': '143 / 100',
	'imax-portrait': '100 / 143',
	'letter-landscape': '10 / 13',
	'letter-portrait': '13 / 10',
	'monitor-landscape': '16 / 10',
	'monitor-portrait': '10 / 16',
	'monitor-ultrawide-landscape': '32 / 9',
	'monitor-ultrawide-portrait': '9 / 32',
	'monitor-wide-landscape': '21 / 9',
	'monitor-wide-portrait': '9 / 21',
	'panavision-landscape': '11 / 5',
	'panavision-portrait': '5 / 11',
	'photo-landscape': '3 / 2',
	'photo-portrait': '2 / 3',
	'silver-landscape': '1207 / 500',
	'silver-portrait': '500 / 1207',
	'smartphone-landscape': '13 / 6',
	'smartphone-portrait': '6 / 13',
	'square': '1 / 1',
	'tabloid-landscape': '3 / 2',
	'tabloid-portrait': '2 / 3',
	'tv-hd-landscape': '16 / 9',
	'tv-hd-portrait': '9 / 16',
	'tv-tube-landscape': '4 / 3',
	'tv-tube-portrait': '3 / 4',
	'ultrawide-landscape': '32 / 9',
	'ultrawide-portrait': '9 / 32',
	'widescreen-landscape': '12 / 5',
	'widescreen-portrait': '5 / 12'
};

export default {
	...aspectRatiosNamed,
	...aspectRatioBuilder(aspectRatiosNamed)
};