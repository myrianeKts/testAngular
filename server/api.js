const { sendSMS, getToken } = require('sms-api'); // fake node module
const { getSortedContacts } = require('./database/model');
const config = require('./config');
const CHUNK_SIZE = 10;

async function sendSms() {
    try {
        const contacts = await getSortedContacts(); // Not necessarily a sortedContact but just a findAll
        const dataProm = [];
        const chunkArray = [];
        const token = await getToken(config.smsApi.clientId);
        // prepare message to send
        for (const contact of contacts) {
            // I suppose sendSMS return a promise. Why sendSMS take an array of integer knowing that we have one phone by contact??
            dataProm.push(sendSMS([parseInt(contact.phone)], `Hi ${contact.name}`, token));
        }
        // split in CHUNK_SIZE
        for (const index = 0; index < dataProm.length; index += CHUNK_SIZE) {
            myChunk = dataProm.slice(index, index + CHUNK_SIZE);
            chunkArray.push(myChunk);
        }
        // send chunk
        for (const chunk of chunkArray) {
            await Promise.all(chunk);
        }
        console.log(`${chunkArray.length} sms have been sent successfully!`);
        
    } catch (error) {
        console.error(error);
    }
}

exports.sendSms = sendSms;
