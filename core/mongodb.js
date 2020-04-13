/**
 * Mongoose module.
 * @file модуль базы данных
 * @module core/mongoose
 * @author  biaochenxuying <https://github.com/biaochenxuying>
 */

const consola = require('consola')
const CONFIG = require('../app.config.js')
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// remove DeprecationWarning
mongoose.set('useFindAndModify', false)


// mongoose Promise
mongoose.Promise = global.Promise

// mongoose
exports.mongoose = mongoose

// connect
exports.connect = () => {
    // console.log('CONFIG.MONGODB.uri :', CONFIG.MONGODB.uri)

	// Подключаемся к базе данных
	mongoose.connect(CONFIG.MONGODB.uri, {
		useCreateIndex: true,
		useNewUrlParser: true,
		promiseLibrary: global.Promise
	})

	// ошибка соединения
	mongoose.connection.on('error', error => {
		consola.warn('Ошибка подключения к базе данных!', error)
	})

	// соединение установлено
	mongoose.connection.once('open', () => {
		consola.ready('Соединение с базой данных успешно!')
	})

	// Инициализировать приращение идентификатора
	autoIncrement.initialize(mongoose.connection)
	
	// возвращаемся к экземпляру
	return mongoose
}
