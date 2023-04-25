<?php

declare(strict_types = 1);

$rulesJson = __DIR__."/.php-cs-fixer-rules.json";
$rules = '{"@PSR12": true}';

if (file_exists($rulesJson)) {
	$rules = json_decode(file_get_contents($rulesJson), true);
}

$finder = PhpCsFixer\Finder::create()
	->exclude('bootstrap/cache')
	->exclude('node_modules')
	->exclude('database')
	->exclude('storage')
	->exclude('vendor')
	->notName('*.xml')
	->notName('*.yml')
	->notName('*.lock')
	->notName('*.json')
	->in(__DIR__);

return (new PhpCsFixer\Config())
	->setCacheFile(__DIR__.'/.php-cs-fixer.cache')
	->setUsingCache(true)
	->setRules($rules)
	->setIndent("\t")
	->setLineEnding("\n")
	->setFinder($finder);
