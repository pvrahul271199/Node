//make file through node
// execute in the form node filesys.js [filename] [filetype]
// example node filesys.js index js 
// creates a file in the current directory from where you are executing this file 
const fs = require('fs');

const fileName = process.argv[2];
const fileType = process.argv[3];
try{
    fs.writeFileSync(`${fileName}.${fileType}`);
}
catch(e){
    console("Something Went Wrong", e);
}
