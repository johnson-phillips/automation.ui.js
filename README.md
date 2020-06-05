library to initialize selenium webdriver and basic browser actions to extend for page objects

usage for typescript:
```
import {Browser} from "automation.ui";
import {By, Capabilities, Key} from "selenium-webdriver";

let browser = new Browser(Capabilities.chrome(),null);
browser.launchURL('https://www.npmjs.com/package/qe.automation.ui');

//for crossbrowsertesting cloud service
var cbtCaps = {
    name : 'Basic Test Example',
    build :  '1.0',
    version : '70', 
    platform : 'Windows 10', 
    screen_resolution : '1366x768',
    record_video : 'true',
    record_network : 'false',
    browserName : 'Chrome',
    username : username,
    password : authkey
};
let browser = new Browser(cbtCaps,remoteURL);
```

usage nodejs
```
const browser = require("automation.ui").default;
const capabilities = require("selenium-webdriver").Capabilities;
let chrome = new Browser(capabilities.chrome());
chrome.driver.get('https://www.npmjs.com/search?q=automation-ui');


```
