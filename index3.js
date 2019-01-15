const webdriver = require('selenium-webdriver');
require("chromedriver");

let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://free-ss.site/');

driver.sleep(15000);//毫秒

driver.executeScript(`
    $('table').map(function () {
        return {
            id:this.id,
            height:$(this).height(),
            data:$(this).DataTable().data()
        }
    })
`).then(function(obj){
    //obj即为返回值
    console.log(obj);
});