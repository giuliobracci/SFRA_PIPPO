'use strict';

var CustomObjectMgr = require('dw/object/CustomObjectMgr');

function subscribe(email) { 

    var customerEmail
    var result
    var newNewsletterForm

    customerEmail = email.toLowerCase();
    result = CustomObjectMgr.queryCustomObjects('Newsletter_Forms', "custom.email = {0}", customerEmail)

    if (result.hasNext()) {
        throw new Error('Email already subscribed')
    }

    try {
        newNewsletterForm = CustomObjectMgr.createCustomObject('Newsletter_Forms', customerEmail);
    } catch (err) { 
        throw new Error(err.message)
    }

    return  
}

module.exports = {
  subscribe
};
