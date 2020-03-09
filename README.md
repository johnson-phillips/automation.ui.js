library to initialize selenium webdriver and basic browser actions to extend for page objects

```
const { By, Key,Capabilities} = require('selenium-webdriver');
let UI = require('qe.automation.ui');
let browser = new UI(Capabilities.chrome());
```
For CBT
```
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
let browser = new UI(cbtCaps);
```
