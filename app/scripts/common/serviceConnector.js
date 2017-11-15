export default {
    ajaxConfig: {
        contentType: 'application/json',
        crossDomain: true
    },

    post: function (input, url) {
        this.ajaxConfig.data = JSON.stringify(input);
        return this.serviceRequest('POST', url);
    },

    get: function (url) {
        this.ajaxConfig.data = '';
        return this.serviceRequest('GET', url);
    },

    serviceRequest: function (httpMethod, httpURL) {
        this.ajaxConfig.url = httpURL;
        this.ajaxConfig.type = httpMethod;
        return $.ajax(this.ajaxConfig);
    }
}
