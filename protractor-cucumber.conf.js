'use strict';

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://rhibbvd2.mid.aib.pri/',
    // baseUrl: 'http://test.aib.backbasecloud.com/',

    specs: [

        'features/Login/*.feature',
        'features/Accounts/*.feature',
        'features/Payments/*.feature'

    ],

    cucumberOpts: {
        require: [
            './Pages/support/env.js',
            './Pages/support/hooks.js',
            'features/step_definitions/*.js'
        ],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    },

    capabilities: {
        'browserName': 'chrome'
    },

    resultJsonOutputFile: 'target/reports/report.json',
    output: 'target/reports/cucumber_report.html',
    //     var reporter = require('cucumber-html-reporter');
 
    //     var options = {
    //     theme: 'bootstrap',
    //     jsonFile: 'target/report/cucumber_report.json',
    //     output: 'target/report/cucumber_report.html',
    //     reportSuiteAsScenarios: true,
    //     launchReport: true,
    //     metadata: {
    //         "App Version":"x.x.x",
    //         "Test Environment": "Mac",
    //         "Browser": "Chrome  x.x.x.",
    //         "Platform": "Mac",
    //         "Parallel": "Scenarios",
    //         "Executed": "Remote"
    //     }
    // };
 
    // reporter.generate(options);

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(20 * 1000);
        browser.driver.manage().window().setSize(1900, 1800);

    }
};
