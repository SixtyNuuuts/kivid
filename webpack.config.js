const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')
    .addEntry('navbar', './assets/vue/navbar.js')
    .addEntry('settings-page', './assets/vue/settings-page.js')
    .addEntry('help-support-page', './assets/vue/help-support-page.js')
    .addEntry('login', './assets/vue/fullpage/login.js')
    .addEntry('register', './assets/vue/fullpage/register.js')
    .addEntry('reset-pass', './assets/vue/fullpage/resetpassword/reset-pass.js')
    .addEntry('reset-pass-request', './assets/vue/fullpage/resetpassword/reset-pass-request.js')
    .addEntry('create-pass', './assets/vue/fullpage/createpass/create-pass.js')

    // Doctor
    .addEntry('doctor-dashboard-page', './assets/vue/doctor/dashboard-page.js')
    .addEntry('doctor-worksheet-page', './assets/vue/doctor/worksheet-page.js')
    // Patient
    .addEntry('patient-dashboard-page', './assets/vue/patient/dashboard-page.js')
    .addEntry('patient-read-worksheet-page', './assets/vue/patient/read-worksheet-page.js')
    // Public
    .addEntry('public-read-worksheet-page', './assets/vue/public/read-worksheet-page.js')

    //FFMKR
    .addEntry('ffmkr-admin-dashboard-page', './assets/vue/ffmkr/admin/dashboard-page.js')

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    // .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // enables PostCSS support
    .enablePostCssLoader()

    // enables Vue
    .enableVueLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    ;

module.exports = Encore.getWebpackConfig();
