import Browser from "../src/browser";
import {By, Capabilities, Key} from "selenium-webdriver";
import report from "automation.report";

async function test() {
    report.deleteReportFolder();
    report.startTest("sample ui test","test to validate ui library");
    let chrome =  new Browser(Capabilities.chrome());
    await chrome.driver.get('https://www.npmjs.com/package/automation.ui');
    await report.addTestStep("launched https://www.npmjs.com/package/automation.ui",null,chrome.driver);
    await chrome.driver.findElement(By.name('q')).sendKeys('automation.ui',Key.RETURN);
    await report.addTestStep("entered automation.ui search text",null,chrome.driver);
    await chrome.driver.close();
    await report.endTest();
}

(async () => {
    await test();
})();
