require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_HOST.replace("<username>", process.env.DB_USER)
                               .replace("<password>", process.env.DB_PASS);

let _db;

function initDb() {
    if (_db) throw new Error("Db is already initialized!");

    const dbClient = new MongoClient(uri, { useNewUrlParser: true });
    dbClient.connect( (err) => {
        if (err) {
            console.log(err);
        };
        _db = dbClient.db("ubc-shouts");
        console.log("db is initialized");
    })
}

function getDb() {
    if (!_db) throw new Error("Db is not initialized!");
    return _db;
}

function getMessagesCollection() {
    if (!_db) throw new Error("Db is not initialized!");
    return _db.collection("messages");
}

module.exports = {
    initDb,
    getDb,
    getMessagesCollection
}