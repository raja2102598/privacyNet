var path = require("path")

var conn = require(path.join(__dirname, "../../../db/dbconn"))

var dblogin = require(path.join(__dirname, "../login/dblogin"))
var crypto = require(path.join(__dirname, "../../helpers/crypto"))

function createNewUserProfile(input, callback) {
  console.log(input)

  viewlog = dblogdata(input.savePerson)
  conn.query(
    "SELECT COUNT(*) AS cnt FROM user_profile WHERE user_id = ? ",
    viewlog.user_id,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        if (result[0].cnt > 0) {
          conn.query(
            
            "update user_profile SET ? where user_id=?",
       
                [viewlog,viewlog.user_id],
     
                  (err, results) => {
                if (err) {
                  console.log(err)
                } else if (results) {
                  dblogin.saveAge(
                    [
                      viewlog.u_dob,
                      viewlog.user_id,
                      viewlog.u_gender,
                      viewlog.u_city,
                    ],
                    (err, resul) => {
                      console.log(resul)
                    }
                  )
                  callback(null, results)
                } else {
                  conn.end()
                }
              }
          
          )
        } else {
          conn.query(
            "insert into user_profile SET ?",
            viewlog,
            (err, results) => {
              if (err) {
                console.log(err)
              } else if (results) {
                dblogin.saveAge(
                  [
                    viewlog.u_dob,
                    viewlog.user_id,
                    viewlog.u_gender,
                    viewlog.u_city,
                  ],
                  (err, resul) => {
                    console.log(resul)
                  }
                )
                callback(null, results)
              } else {
                conn.end()
              }
            }
          )
        }
      }
    }
  )
}

function getUserProfile(input, callback) {
  conn.query(
    "select * from user_profile where user_id=?",
    input.user,
    (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        if (results.length > 0) {
          results = uilogdata(results[0])
          results.status = "Success"
          // console.log(results)
          callback(null, results)
        } else {
          responseMsg = {}
          responseMsg.status = "Failed"
          responseMsg.message = "No user Found"
          callback(null, responseMsg)
          // console.log(results)
        }
      } else {
        conn.end()
      }
    }
  )
}

function dblogdata(dblog) {
  uilog = {}
  uilog.u_name = dblog.name
  uilog.u_email = dblog.email
  uilog.u_gender = crypto.encrypt(dblog.gender)
  uilog.u_dob = dblog.dob
  uilog.u_city = crypto.encrypt(dblog.city)
  uilog.u_hobby = crypto.encrypt(dblog.hobby)
  uilog.u_bio = crypto.encrypt(dblog.bio)
  uilog.u_interests = crypto.encrypt(dblog.interests)
  uilog.u_email = dblog.email
  uilog.user_id = dblog.user_id
  console.log(uilog)
  return uilog
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
  console.log(uilog)
  return uilog
}

// SELECT *, YEAR(CURDATE()) - YEAR(u_dob) AS age FROM user_profile

module.exports = {
  createNewUserProfile,
  getUserProfile,
}
