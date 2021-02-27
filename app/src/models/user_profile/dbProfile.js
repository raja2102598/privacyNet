var path = require("path")

var conn = require(path.join(__dirname, "../../../db/dbconn"))

var dblogin = require(path.join(__dirname, "../login/dblogin"))

function createNewUserProfile(input, callback) {
  viewlog = dblogdata(input)

  dblogin.getUserId([input.email], (err, res) => {
    viewlog.user_id = res[0].u_id
    viewlog.u_name = res[0].u_name
    conn.query("insert into user_profile SET ?", viewlog, (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        dblogin.saveAge(
          [viewlog.u_dob, viewlog.user_id, viewlog.u_gender, viewlog.u_city],
          (err, resul) => {
            console.log(resul)
          }
        )
        callback(null, results)
      } else {
        conn.end()
      }
    })
  })
}

function dblogdata(dblog) {
  uilog = {}
  uilog.u_gender = dblog.gender
  uilog.u_dob = dblog.dob
  uilog.u_city = dblog.city
  uilog.u_hobby = dblog.hobby
  uilog.u_bio = dblog.bio
  uilog.u_interests = dblog.interests
  uilog.u_email = dblog.email
  console.log(uilog)
  return uilog
}

// SELECT *, YEAR(CURDATE()) - YEAR(u_dob) AS age FROM user_profile

module.exports = {
  createNewUserProfile,
}
