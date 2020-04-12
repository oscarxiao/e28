let mix = require('laravel-mix');

// https://laravel-mix.com/docs/mixjs
// source: src/script.js
// output: js/master.js
mix.js('src/script.js', 'js/master.js');

// hot module reloading options
// https://laravel-mix.com/docs/hot-module-replacement
// used when you run `npm run hot`
mix.options({
    hmrOptions: {
        host: 'e28week8.loc',
        port: 8080
    }
})