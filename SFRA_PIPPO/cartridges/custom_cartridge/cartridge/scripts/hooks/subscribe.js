// ci arriva contactDetails che contiene i seguenti campi
// [myForm.contactFirstName, myForm.contactLastName, myForm.contactEmail, myForm.contactTopic, myForm.contactComment];
// mail a cui inviarla ecommerce@pippo.online
var Email = require('dw.net.Mail')


function subscribe(contactDetails) {
    
    var content =
        contactDetails[contactFirstName] + ' ' + contactDetails[contactLastName] + '' + '\n'
        + contactDetails[contactEmail] + ' ' + contactDetails[contactTopic] + '\n'
        + contactDetails[contactComment];
    
    var mail = new Email();

    mail.addTo("ecommerce@pippo.online");
    mail.setFrom("noreplyp@pippo.online");
    mail.setSubject("[CONTACT REQUEST]" + " " + contactDetails[contactEmail]);
    mail.setContent(content);

    try {
        mail.send();
    } catch (err) {
        throw new Error("Error sending email: " + err.message)
    }

    return
    
}

module.exports = {
  subscribe
};