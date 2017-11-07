//require fileSystem
const fs = require('fs');

//export single function
module.exports = function (dir, ext, callback) {
    //add . to extension
    ext = '.' + ext;

    //create file Read Stream
    fs.readdir(dir, (err,data) => {
        //calls callback with error if it exists
        if(err){callback(err,false)}

        else{
            //filters data to only allow for files that match extension
            data = data.filter(file => {
                if(file.substr(file.length - ext.length) === ext){
                    return file;
                }
            });

            //calls callback with no errors and the data object
            callback(false, data);
        }
    });
};