var page = require('webpage').create();
page.open('https://free-ss.site', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});