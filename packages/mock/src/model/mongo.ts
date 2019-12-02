const config = require('../config/mongo')
const MongoClient = config.MongoClient
const url = config.url
const dbName = config.dbName

class Db {
    client = null
    constructor() {
        this.client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true })
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect((err, client) => {
                if (err) {
                    reject(err)
                } else {
                    console.log('connected successful to mongo server')
                    const db = client.db(dbName)
                    resolve(db)
                }
            })
        })
    }
    async insert(tableName, option) {
        const db: any = await this.connect()
        return new Promise((resolve, reject) => {
            db.collection(tableName).insertOne(option, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
    async find(tableName, option) {
        const db: any = await this.connect()
        return new Promise((resolve, reject) => {
            db.collection(tableName).find(option).toArray((err, result) => {
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