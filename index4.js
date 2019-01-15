const puppeteer = require('puppeteer');
const url = require("url");
const querystring = require("querystring");
const request = require('request');

// puppeteer中文API https://zhaoqize.github.io/puppeteer-api-zh_CN/#/
(async () => {
    const browser = await (puppeteer.launch({
        headless: true
    }));
    const page = await browser.newPage();
    await page.goto('https://www.ssrtool.com/tool/free_ssr');
    //await page.waitFor(5000);

    const subscriptionUrl = await page.evaluate(() => {
        return $('.mdui-textfield-input').val();
    });

    let query = url.parse(subscriptionUrl).query;
    let params = querystring.parse(query);

    let getUrl = `https://www.ssrtool.com/tool/api/free_ssr?key=${params.key}&token=${new Date().getTime()}&page=1&limit=90`;
    console.log(getUrl);

    let jsonData = request.pipe(fs.createWriteStream('temp.json'));
    console.log(jsonData);

    browser.close();
})();