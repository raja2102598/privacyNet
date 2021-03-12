var path = require("path")

var conn = require(path.join(__dirname, "../../../db/dbconn"))

var crypto = require(path.join(__dirname, "../../helpers/crypto"))

function searchUserName(input, callback) {
  console.log(input)
  conn.query(
    "select * from user_profile where u_name like ?",
    "%" + input.name + "%",
    (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        if (results.length > 0) {
          callback(null, results)
        } else {
          responseMsg = {}
          responseMsg.status = "Failed"
          responseMsg.message = "No user Found"
          callback(null, responseMsg)
          console.log(results)
        }
      } else {
        conn.end()
      }
    }
  )
}

function uilogdata(dblog) {
  uilog = {}
  uilog.name = dblog.u_name
  uilog.gender = dblog.u_gender
  uilog.dob = dblog.u_dob
  uilog.city = dblog.u_city
  uilog.hobby = dblog.u_hobby
  uilog.bio = dblog.u_bio
  uilog.interests = dblog.u_interests
  uilog.email = dblog.u_email
  uilog.user_pic_url = dblog.user_pic_url
  console.log(uilog)
  return uilog
}

// SELECT *, YEAR(CURDATE()) - YEAR(u_dob) AS age FROM user_profile

module.exports = {
  searchUserName,
}
