const {Builder} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const firefoxdriver = require('geckodriver');
const iedriver = require('iedriver');

class UI {
    driver = null;
    constructor(capabilities) {
        if(capabilities.username)
        {
            this.driver = new Builder().usingServer(capabilities.url).withCapabilities(capabilities).build();
        }
        else {
            this.driver = new Builder().withCapabilities(capabilities).build();
        }
    }
}
module.exports = UI;


