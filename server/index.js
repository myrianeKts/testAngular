const http = require('http');
require('./database/connect');
const { Contact } = require('./database/model');
const config = require('./config');
const { parse } = require('querystring');

// create a server listening on 3000
http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/contact') {
        let body = [];
        req.on('error', (err) => {
        console.error(err);
        }).on('data', (chunk) => {
        body.push(chunk);
        }).on('end', () => {
        body = parse(Buffer.concat(body).toString());
        // write the response and send it to the client
        res.writeHead(200, {'Content-Type': 'text/html'});
            
        if (!(Object.keys(body).length)) {
            res.write('No data');
        } else {
            if(body.shouldAddToNewsletter) {
                body.shouldAddToNewsletter = JSON.parse(body.shouldAddToNewsletter);
                console.log(JSON.stringify(body));
                const contact = new Contact(body);
                contact.save((err, con) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(con.name + " saved to contact collection.");
                });
            }
            res.write('Ok');
        }
        res.end();

        });
    } else {
        res.statusCode = 404;
        res.end();
    }
    
}).listen(config.app.port);