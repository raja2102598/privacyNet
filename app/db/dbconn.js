var mysql = require("mysql")

var dbcon = require("../../config/dbconfig")

var conn = mysql.createConnection({
  host: dbcon.HOST,
  user: dbcon.USERNAME,
  password: dbcon.PASSWORD,
  database: dbcon.DATABASE,
})

conn.connect((err, dbconn) => {
  if (err) {
    console.log(err)
  } else if (dbconn) {
    console.log("Database Connected Sucessfully")
  }
})

module.exports = conn
