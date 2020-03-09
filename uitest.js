const { By, Key,Capabilities} = require('selenium-webdriver');
let UI = require('./ui');


(async () => {
    let browser = new UI(Capabilities.chrome());
    await browser.driver.get('http://www.google.com/');
    await browser.driver.findElement(By.name('q')).sendKeys('webdriver',Key.RETURN);
    await browser.driver.close();
})();



