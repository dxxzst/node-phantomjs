const browser = require('browser-x');
const url = 'https://free-ss.site';

browser({url: url, loadCssFile: true, silent: false}, function (errors, window) {
    if (errors) {
        throw errors;
    }
    var element = window.document.querySelectorAll('table');
    console.log(element);
});