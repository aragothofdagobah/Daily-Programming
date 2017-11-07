//requiring fs to read file
const fs = require('fs');

//assigning dir and file extension variables to arguments
const dir = process.argv[2];
const ext  = '.' + process.argv[3];


fs.readdir(dir, (err,data) => {
    //logs error if it exists
    if(err){callback(err)}

    else{
        //filters data to only allow for files that match extension
        data = data.filter(file => {
            if(file.substr(file.length - ext.length) === ext){
                return file;
            }
        });

        //log output
        data.forEach(file => {
            console.log(file);
        })
    }
});
