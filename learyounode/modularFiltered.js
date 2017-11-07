const filterLS = require('./module');
const dir = process.argv[2];
const ext = process.argv[3];

filterLS(dir, ext, (err,data) => {
    if(err){console.log(err)}
    else{
        data.forEach(file => {
            console.log(file);
        })
    }
});