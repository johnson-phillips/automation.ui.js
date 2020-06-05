import Browser from "../src/browser";
import {By, Capabilities, Key} from "selenium-webdriver";

async function test() {
    let chrome =  new Browser(Capabilities.chrome());
    await chrome.driver.get('https://www.npmjs.com/package/qe.automation.ui');
    await chrome.driver.findElement(By.name('q')).sendKeys('qe.automation.ui',Key.RETURN);
    await chrome.driver.close();
}

(async () => {
    await test();
})();
