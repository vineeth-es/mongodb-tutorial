const { MongoClient } = require('mongodb');

const _url = 'mongodb://localhost:27017/product';
const client = new MongoClient(_url);
let _db;

const mongoConnect = callBack => {
    client.connect()
        .then(client => {
            console.log('DB Connected!');
            _db = client.db();
            callBack();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })            
}

const getDb = () => {
   if(_db) {
    return _db
   }
   throw 'No DB found!'
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
