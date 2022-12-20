
var CustomObjectMgr = require('dw/object/CustomObjectMgr');

function subscribe(email) { 

    var email
    var result
    var newNewsletterForm

    email = email.toLowerCase();
    result = CustomObjectMgr.queryCustomObjects('Newsletter_Forms', "custom.email = {0}", email)

    if (result.hasNext()) {
        throw new Error('Email already subscribed')
    }

    try {
        newNewsletterForm = CustomObjectMgr.createCustomObject('Newsletter_Forms', email);
    } catch (err) { 
        throw new Error(err.message)
    }

    return  
}

module.exports = {
  subscribe
};
