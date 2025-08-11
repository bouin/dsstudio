<?php

/**
 * Extension Manager/Repository config file for ext "site_package".
 */
$EM_CONF[$_EXTKEY] = [
    'constraints' => [
        'depends' => [
            'mask' => '' // Add the minimum version here or leave blank for any version.
        ]
    ],
    'title' => 'site package',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.5.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Studio\\SitePackage\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'version' => '1.0.0',
    'uploadfolder' => 0,
    'createDirs' => '',
    'author' => 'Daniel Hackiewicz',
    'author_email' => 'dani@studiothompfister.com',
    'author_company' => 'Studio Thom Pfister'
];
