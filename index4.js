const puppeteer = require('puppeteer');
const url = require("url");
const querystring = require("querystring");
const axios = require('axios');

// puppeteer中文API https://zhaoqize.github.io/puppeteer-api-zh_CN/#/
(async () => {
    const browser = await (puppeteer.launch({
        headless: true
    }));
    const page = await browser.newPage();
    await page.goto('https://www.ssrtool.com/tool/free_ssr');
    //await page.waitFor(5000);

    // let res = await page.on('response', response => {
    //     let message = JSON.stringify(response.text());
    //     return Promise.resolve(message);
    // });
    // console.log(res);

    const subscriptionUrl = await page.evaluate(() => {
        return $('.mdui-textfield-input').val();
    });

    let query = url.parse(subscriptionUrl).query;
    let params = querystring.parse(query);

    const getUrl = `https://www.ssrtool.com/tool/api/free_ssr?key=${params.key}&token=${new Date().getTime()}&page=1&limit=90`;
    console.log(getUrl);

    const dataList = await page.evaluate(() => {
        return layui.table.cache.data;
    });
    console.log(dataList);

    // axios.get(getUrl).then(function (response) {
    //     console.log(response);
    // }).catch(function (error) {
    //     console.log(error);
    // });

    browser.close();
})();