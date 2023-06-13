const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "tnplab1"
})

con.connect((err) => {
    if (err) {
        console.log(err.sqlMessage)
    }
    console.log("Database is connected")
})

module.exports = { con }