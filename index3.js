const webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('http://www.baidu.com');

driver.takeScreenshot();