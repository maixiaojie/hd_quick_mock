var mongo = require('mongodb');


const url = 'mongodb://172.96.199.92:27017'
const dbName = 'mock'

const app = {
    MongoClient: mongo.MongoClient,
    url,
    dbName
}
export = app