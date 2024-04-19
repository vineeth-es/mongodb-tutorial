// const { MongoClient } = require("mongodb");
const db = require('./db');

// const url = "mongodb://localhost:27017/test";

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };

    // const client = new MongoClient(url);

    try {
        // await client.connect();
        // const db = client.db();
        // const result = db.collection('product').insertOne(newProduct);


        db.getDb().collection('product').insertOne(newProduct);
        
    } catch (error) {
     return res.json({message: 'Could not store data!'})   
    };

    // client.close();

    res.json(newProduct);
};

const getProduct = async (req, res, next) => {
    
    // const client = new MongoClient(url);

    let products;
    try {
        // await client.connect();
        // const db = client.db();

        products = await db.getDb().collection('product').find({}).toArray();
        
    } catch (error) {
        return res.json({message: 'Could not get data!'})   
    };
    
    // client.close();

    res.json(products);
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;