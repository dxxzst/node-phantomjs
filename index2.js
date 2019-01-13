const phantom = require('phantom');//导入模块
//async解决回调问题,es7的内容
(async function() {
    let url = encodeURI(`https://www.baidu.com/s?wd=测试`);
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.open(url);

    let result = await page.evaluate(function() {
        return $('.result.c-container').map(function() {
            return ({
                title: $(this).find('.t').text() || '',
                link: $(this).find('.c-showurl').text() || '',
                info: $(this).find('.c-abstract').text() || '',
                pic: $(this).find('.general_image_pic img').attr('src') || ''
            });
        }).toArray();
    });

    console.log(result);
    //退出该phantom实例
    await instance.exit();
}());