var path = require("path")
const { isNull } = require("util")

var conn = require(path.join(__dirname, "../../../db/dbconn"))

var moment = require("moment")

function getPosts(input, callback) {
  var user_id = input.user_id
  console.log("In db", input)
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
    conn.query(
      "SELECT photos.user_id,photos.ph_id,photos.photo_url,photos.caption,photos.upload_time,user_profile.u_name,user_profile.user_pic_url FROM photos INNER JOIN user_profile WHERE user_profile.user_id=photos.user_id",
      (err, results) => {
        if (err) {
          console.log(err)
        } else if (results) {
          console.log(results)
          callback(null, results)
        } else {
          conn.end()
        }
      }
    )
  }
}

function sendPosts(input, callback) {
  input.params.upload_time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  conn.query("insert into photos set ?", input.params, (err, results) => {
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
