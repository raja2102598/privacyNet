var path = require("path")

var conn = require(path.join(__dirname, "../../../db/dbconn"))



function createLogin(input, callback) {
  var viewlog = dblogdata(input)

  // viewlog.mail_id = cryptr.encrypt(viewlog.mail_id)
  // viewlog.password = cryptr.encrypt(viewlog.password)
  // const decryptedString = cryptr.decrypt(encryptedString)
  // console.log(encryptedString)
  // console.log(decryptedString)

  // console.log(input)
  conn.query("insert into login SET ?", viewlog, (err, results) => {
    if (err) {
      
      console.log(err)
    
    } else if (results) {
      
      callback(null, results)
    
    } else {
      
      conn.end()
    
    }
  })
}

function dblogdata(dblog) {
  
  var uilog = {}
  uilog.login_id = dblog[0]
  uilog.mail_id = dblog[1]
  uilog.password = dblog[2]
  
  return uilog
}

function Login(input, callback) {
  
  var mail_id = input.email
  console.log(mail_id)
  conn.query("select * from login where mail_id=?", mail_id, (err, results) => {
    if (err) {
      console.log(err)
    } else if (results) {
      // getUserId(["raja@gmail.com"], (err, res) => {
      console.log(results)
      // })
      callback(null, results)
    } else {
      conn.end()
    }
  })
}

function getUserId(input, callback) {
  
  var mail_id = input[0]
  // console.log(mail_id)
  conn.query(
    "select u_id,u_name from users where u_email=?",
    mail_id,
    (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        callback(null, results)
      } else {
        conn.end()
      }
    }
  )
}



function saveAge(input, callback) {
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10)

  var dob = input[0]
  var age = getAge(input[0])
  console.log(age, dob)
  var u_id = input[1]
  var gender = input[2]
  var city = input[3]
  conn.query(
    "update users SET u_dob=?,u_age=?,u_gender=?,u_city=? WHERE u_id=?",
    [dob, age, gender, city, u_id],
    (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        callback(null, results)
      } else {
        conn.end()
      }
    }
  )
}

function updateUsername(input, callback) {
  var u_id = input.user_id
  var name = input.username
  console.log(input)
  conn.query(
    "update login SET username=? WHERE login_id=?",
    [name, u_id],
    (err, results) => {
      if (err) {
        console.log(err)
      } else if (results) {
        callback(null, results)
      } else {
        conn.end()
      }
    }
  )
}

module.exports = {
  createLogin,
  Login,
  getUserId,
  saveAge,
  updateUsername,
}
