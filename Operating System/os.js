//Know about Your System
//Execute in th form node os.js

const os = require('os');
const system = os.cpus();
const toBeParse = os.networkInterfaces();


console.log(`Host Name - ${os.hostname()}`)
console.log(`Operating System - ${os.version()} v${os.release()}`)
console.log(`System Architecture - ${os.arch()}`);
console.log(`System Model - ${system[0].model}`)
console.log(`System Clock Speed - ${system[0].speed}MHz`)

try{
    console.log(`MAC Address - ${toBeParse["Wi-Fi"][0]["mac"]} `);
}
catch{
    console.log("MAC Address - No Network Connection")
}

console.log(`Pc Runtime (in Hrs) ${os.uptime()/3600}`)


