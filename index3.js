const phantom = require('phantom');//导入模块

const instance = phantom.create(function () {
    const page = instance.createPage();
    page.open('https://free-ss.site/');
    // 页面指向的是哪个一个url
    page.on("onResourceRequested", function (requestData) {
        console.info('Requesting', requestData.url)
    });
});


// page.evaluate(function () {
//     return $("table").map(function () {
//         return {
//             id: this.id,
//             height: $(this).height(),
//             data: $(this).DataTable().data().toArray(),
//             length: $(this).DataTable().data().length
//         }
//     }).toArray();
// });
//instance.exit();
// await page.on("onResourceReceived", function (response) {
//     console.log(JSON.stringify(response));
// });

