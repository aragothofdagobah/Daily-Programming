const http = require('http');
const bl = require('bl');

const urlOne = process.argv[2];
const urlTwo = process.argv[3];
const urlThree = process.argv[4];

function getData(url, callback) {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if(err){callback(err, false)}
            data = (data.toString());
            callback(false, data);
        }))
    });
}

const promiseOne = new Promise((resolve, reject) => {
    getData(urlOne, (err,data) => {
        if(err){reject(err)}
        else{
            resolve(data);
        }
    })
});

const promiseTwo = new Promise((resolve, reject) => {
    getData(urlTwo, (err,data) => {
        if(err){reject(err)}
        else{
            resolve(data);
        }
    })
});

const promiseThree = new Promise((resolve, reject) => {
    getData(urlThree, (err,data) => {
        if(err){reject(err)}
        else{
            resolve(data);
        }
    })
});

Promise.all([promiseOne,promiseTwo,promiseThree]).then(data => {
    data.forEach(line => {
        console.log(line);
    })
});