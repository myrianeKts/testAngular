const assert = require('assert');
const { data: contacts } = require('./data');

for (const contact of contacts) {
    describe('MEAN contact form', () => {
        it('name should be a string', () => {
            assert.equal(typeof contact.name, 'string');
        });
        it('email should be a string', () => {
            assert.equal(typeof contact.email, 'string');
        });
        it('phone should be a string', () => {
            assert.equal(typeof contact.phone, 'string');
        });
        it('shouldAddToNewsletter should be a boolean', () => {
            assert.equal(typeof contact.shouldAddToNewsletter, 'boolean');
        });
    });
}

