const phantom = require('phantom');//导入模块

(async function () {
    // await解决回调问题，创建一个phantom实例
    const instance = await phantom.create();
    // 通过phantom实例创建一个page对象，page对象可以理解成一个对页面发起请求和处理结果这一集合的对象
    const page = await instance.createPage();
    page.property('viewportSize', {width: 1920, height: 1080});

    // 页面指向的是哪个一个url
    // await page.on("onResourceRequested", function (requestData) {
    //     console.info('Requesting', requestData.url)
    // });

    // await page.on("onResourceReceived", function (response) {
    //     console.log(JSON.stringify(response));
    // });

    // 得到打开该页面的状态码
    const status = await page.open('https://free-ss.site/');
    console.log(status);

    // 输出该页面的内容
    // const content = await page.property('content');
    // console.log(content);

    let result = await page.evaluate(function () {
        return $("table").map(function () {
            return {
                id: this.id,
                height: $(this).height(),
                data: $(this).DataTable().data().toArray(),
                length: $(this).DataTable().data().length,
                isTrue: navigator.webdriver || window.webdriver || window.self !== top
            }
        }).toArray();
    });
    console.log(result);

    // await setTimeout(function () {
    //     let result = page.evaluate(function () {

    //         return $("table").map(function () {
    //             return {
    //                 id: this.id,
    //                 height: $(this).height(),
    //                 data: $(this).DataTable().data().toArray(),
    //                 length: $(this).DataTable().data().length
    //             }
    //         }).toArray();
    //     });
    //
    //     console.log(result);
    // }, 5000);

    // 退出该phantom实例
    await instance.exit();
}());