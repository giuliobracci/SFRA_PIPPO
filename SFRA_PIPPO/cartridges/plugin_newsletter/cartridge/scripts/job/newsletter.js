var CustomObjectMgr = require('dw.object.customObjectMgr');
var service = require('~/cartridge/scripts/service/subscribe');

function execute() {
    
    var newNewsletterFormObj
    var email;
    var response;

    newNewsletterFormObj = CustomObjectMgr.queryCustomObjects('Newsletter_Forms', "custom.email = *", null);
    
    while (newNewsletterFormObj.hasNext()) {

        email = newNewsletterFormObj.next();
        response = service.call(email);
        
        if (response.success !== false || response.status !== 200) {

            return new Error("There was an error subscribing to Newsletters");
        }
        
        try {
            CustomObjectMgr.remove(email);
        } catch (err) {
            throw new Error('Could not remove email from Newsletter form');
        }    
    }
    newNewsletterFormObj.close();
    return PIPELET_NEXT;
}


module.exports = execute;