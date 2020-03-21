import 'chromedriver';
import 'geckodriver';
import 'iedriver';
import { Builder, ThenableWebDriver, Capabilities } from 'selenium-webdriver';

export class Browser {
    public driver: ThenableWebDriver;
    public constructor(private capabilities: any|Capabilities) {
        if(typeof capabilities.hasOwnProperty('remoteURL')) {
            this.driver = new Builder().withCapabilities(capabilities).usingServer(capabilities.remoteURL).build();
        }
        else {
            this.driver = new Builder().withCapabilities(capabilities).build();
        }
    }
}
