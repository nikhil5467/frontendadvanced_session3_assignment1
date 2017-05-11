/* ============================================================= */

var acadgildGlobalConfig = {
    apiUrl: 'www.acadgild.com/api',
    data: 'some value',
    methodType: 'POST'
};

// in Javascript
// now use in functions
function makeAjaxRequest(config){
    var url = config.url;
    var method = config.methodType;
    var data = config.data;
    $.ajax(url, method, data );
}

//But is ES6 using destructuring,
// and in one of our function
function makeAjaxRequest(config){
    var { url, methodType, data2 } = config;
    $.ajax(url, methodType, data2 );
}