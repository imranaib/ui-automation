'use strict';

const cucumber = require('cucumber');
const fs = require('fs');
const report = require('cucumber-html-reporter');
const targetDirName = 'target';
const reportsDirName = 'reports';
const cucumberHtmlReportDirName = 'cucumber-html';
const outputDir = `${targetDirName}/${reportsDirName}/${cucumberHtmlReportDirName}`;

module.exports = function () {
    this.After(function (scenario, callback) {
        scenario.isFailed()
            ? browser.takeScreenshot()
                .then(function (base64png) {
                    const decodedImage = Buffer.from(base64png, 'base64');
                    scenario.attach(decodedImage, 'image/png', callback);
                })
            : callback();
    });

    const createHtmlReport = function (sourceJson) {
        report.create({
            source: sourceJson, // source json
            dest: outputDir, // target directory (will create if not exists)
            screenshots: outputDir
        }).then(() => fs.unlink(sourceJson));
    };

    const JsonFormatter = cucumber.Listener.JsonFormatter();
    JsonFormatter.log = function (string) {
        if (!fs.existsSync(targetDirName)) {
            fs.mkdirSync(targetDirName);
        }
        if (!fs.existsSync(`${targetDirName}/${reportsDirName}`)) {
            fs.mkdirSync(`${targetDirName}/${reportsDirName}`);
        }
        if (!fs.existsSync(`${targetDirName}/${reportsDirName}/${cucumberHtmlReportDirName}`)) {
            fs.mkdirSync(`${targetDirName}/${reportsDirName}/${cucumberHtmlReportDirName}`);
        }

        const targetJson = `${outputDir}/cucumber_report.json`;
        try {
            fs.writeFileSync(targetJson, string);
            createHtmlReport(targetJson);
        } catch (error) {
            console.log('Failed to save cucumber test results to json file.');
            console.log(error);
        }
    };

    this.registerListener(JsonFormatter);

    by.testHook = hookText => by.css(`[test-hook="${hookText}"]`);
};


