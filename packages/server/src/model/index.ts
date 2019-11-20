import config from '../config/db';
const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const Op = Sequelize.Op
interface DB {
	Sequelize?: any,
	sequelize?: any,
	Op?: any,
	[index: string]: any
}
let db: DB = {order: null};
const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',
	operatorAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	timezone: '+08:00' //东八时区
})

// fs.readdirSync(__dirname).filter((file) => {
// 	return (file.indexOf('.') !== 0) && (file != 'index.js');
// }).forEach((file) => {
// 	var model: any = sequelize.import(path.join(__dirname, file));
// 	console.log(model)
// 	db[model.name] = { ins: model}
// })
db.order = sequelize.import(path.join(__dirname, 'order.js'))
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

export default db;