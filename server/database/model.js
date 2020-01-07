const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    shouldAddToNewsletter: Boolean
});
const Contact = mongoose.model('Contact', ContactSchema, 'contact');

function getSortedContacts () {
    return new Promise((resolve, reject) => {
        Contact.find({}, null, { sort: { email: 1 } }, (err, sortedContacts) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            console.log(`sortedContacts ${sortedContacts}`);
            return resolve(sortedContacts);
        });
    });
}
getSortedContacts();

exports.getSortedContacts = getSortedContacts;
exports.Contact = Contact;
