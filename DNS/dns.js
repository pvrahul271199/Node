// Convert domain to DNS
// execute as node dns.js [domainname]
// Example node dns.js google.com

const dns = require('dns');
const site = process.argv[2];

dns.lookup(`${site}`, (err, address, family) => {   
    console.log(`Address: ${address} family: IPv${family}`);
});

