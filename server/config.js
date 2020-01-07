const env = process.env.NODE_ENV || 'dev';

const dev = {
 app: {
   port: 3000
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'mean'
 },
 smsApi: {
   clientId: 345
 }
};
// not very secured to put the 2 config on the same file. use dotenv and split in 2 files
const prod = {
 app: {
   port: 3000
 },
 db: {
   host: 'localhost',
   port: 27018,
   name: 'mean'
 },
 smsApi: {
   clientId: 345
 }
};

const config = {
    dev,
    prod
};

module.exports = config[env];
