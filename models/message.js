let connection = require('../config/db')

class Message {
    static create (content, cb) {
        connection.query('INSERT INTO message SET message = ?, created_at = ? ', [content, new Date()], (err, result) => {
            if (err) throw err
            cb(result)
        })

    }
    static all (cb) {
        connection.query('SELECT * FROM message', (err, rows) => {
            if (err) throw err
            cb(rows)
        })
    }
}

module.exports = Message