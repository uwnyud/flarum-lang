<?php

namespace YourNamespace\LanguageSwitcher;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/extension.js')
        ->css(__DIR__.'/less/extension.less'),
    
    new Extend\Locales(__DIR__.'/locale'),
];