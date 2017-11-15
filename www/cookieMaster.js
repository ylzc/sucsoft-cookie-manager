var cookieMaster = {

    getCookieValue: function(url, cookieName, successCallback, errorCallback) {

        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'getCookieValue',
                    [url, cookieName]
        );
    },
    setCookieValue: function (url, cookieName, cookieValue, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'setCookieValue',
                    [url, cookieName, cookieValue]
        );
    },
    clear: function(successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'clearCookies',
                    []
        );
    },
    getCookiesList: function(url, successCallback, errorCallback) {
         cordova.exec(successCallback,
                     errorCallback,
                     'CookieMaster', 'getCookiesList',
                     [url]
         );
     },
    setCookiesList: function (url, cookieString, successCallback, errorCallback) {
         cordova.exec(successCallback,
                     errorCallback,
                     'CookieMaster', 'setCookiesList',
                     [url, cookieString]
         );
     }
};
module.exports = cookieMaster;


