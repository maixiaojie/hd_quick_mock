const config = require('../config/mongo')
const MongoClient = config.MongoClient
const url = config.url
const dbName = config.dbName

class Db {
    client = null
    db = null
    constructor() {
        this.client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true })
        this.connect()
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect((err, client) => {
                if (err) {
                    reject(err)
                } else {
                    console.log('connected successful to mongo server')
                    const db = client.db(dbName)
                    this.db = db
                    resolve(db)
                }
            })
        })
    }
    async insert(tableName, option) {
        return new Promise((resolve, reject) => {
            this.db.collection(tableName).insertOne(option, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
    async find(tableName, option) {
        return new Promise((resolve, reject) => {
            this.db.collection(tableName).find(option).toArray((err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

let db = new Db()

export default db