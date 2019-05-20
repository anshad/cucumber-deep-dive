let reporter = require('cucumber-html-reporter');
 
let options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber.json',
    output: 'report/cucumber.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);