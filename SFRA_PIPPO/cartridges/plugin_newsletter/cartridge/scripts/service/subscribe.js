'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');
var Site = require('dw/system/Site');

/**
 * @property {string} mail
 * Subscribe email to emailblink
 * @returns {dw.svc.HTTPService} HTTP service object
 */
function subscribe(email) {
    return LocalServiceRegistry.createService('Emailblink', {
        /**
         * @param {dw.svc.HTTPService} svc
         * @returns {string} request body
         */
        createRequest: function (svc, address) {
            var curSite = Site.getCurrent();
            var client_id = curSite.getCustomPreferenceValue('client_id');
            var client_secret = curSite.getCustomPreferenceValue('client_secret');
            var serviceUrl = curSite.getCustomPreferenceValue('url');

            svc.setRequestMethod('POST');
            svc.addHeader('Content-Type', 'application/json');
            svc.addHeader('client_id', client_id); 
            svc.addHeader('client_secret', client_secret);
            svc.URL = serviceUrl;

            if (empty(client_id) || empty(client_secret)) {
                throw new Error('Must configure the credentials for Emailblink, can not leave blank fields.');
            }
            var requestBody = {
                "email": email
            };
            return JSON.stringify(requestBody);
        },
        /**
         *
         * @param {dw.svc.HTTPService} svc
         * @param {dw.net.HTTPClient} client
         */
        parseResponse: function (svc, client) {
            var result = parseResponse(svc, client);
            return result;
        }
    });
}

module.exports = subscribe();