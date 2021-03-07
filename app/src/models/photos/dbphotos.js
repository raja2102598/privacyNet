var path = require("path")
const { isNull } = require("util")

var conn = require(path.join(__dirname, "../../../db/dbconn"))

function getPosts(input, callback) {
  var user_id = input.userid
  if (user_id) {
    conn.query(
      "select * from photos where user_id=?",
      user_id,
      (err, results) => {
        if (err) {
          console.log(err)
        } else if (results) {
          //   console.log(results)
          callback(null, results)
        } else {
          conn.end()
        }
      }
    )
  } else {
    conn.query("select * from photos", (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        console.log(results)
        callback(null, results)
      } else {
        conn.end()
      }
    })
  }
}

function sendPosts(input, callback) {
  conn.query("insert into photos set ?", input, (err, results) => {
    if (err) {
      console.log(err)
    } else if (results) {
      console.log(results)
      callback(null, results)
    } else {
      conn.end()
    }
  })
}

module.exports = {
  getPosts,
  sendPosts,
}
