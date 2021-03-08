var path = require("path")
const generateUniqueId = require("generate-unique-id")
var moment = require("moment")
// var CryptoJS = require("crypto-js")
var crypto=require(path.join(__dirname,"../../helpers/crypto"))

var conn = require(path.join(__dirname, "../../../db/dbconn"))
var dblogin = require(path.join(__dirname, "../login/dblogin"))

 

function createNewAcc(input, callback) {
  // console.log(viewlog)
  // var ciphertext = CryptoJS.AES.encrypt(
  //   "my message",
  //   "secret key 123"
  // ).toString()

  // Decrypt
  // var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123")
  // var originalText = bytes.toString(CryptoJS.enc.Utf8)

  //  console.log(originalText) // 'my message'
  
  var viewlog = dblogdata(input)
  viewlog.u_createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  
  conn.query(
    "SELECT COUNT(*) AS cnt FROM users WHERE u_email = ? ",
    viewlog.u_email,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
          if (result[0].cnt > 0) {
            
            responseMsg = {}
            responseMsg.status = "Failed"
            responseMsg.message = "Email Already Exist"
            callback(null, responseMsg)
          
          } else {  
              conn.query("insert into users SET ?", viewlog, (err, results) => {
              if (err) {
                
                console.log(err)
              } else if (results) {
                  input.password = crypto.encrypt(input.password)

                  var saveDatas = saveData(viewlog)
                  conn.query(
                    "insert into user_profile SET ?",
                    saveDatas,
                    (errr, resultss) => {
                      if (errr) {
                        console.log(errr)
                      } else if (resultss) {
                        console.log(resultss)
                      }
                    }
                  )
                  // Decrypt
                  // var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123")
                  // var originalText = bytes.toString(CryptoJS.enc.Utf8)

                  dblogin.createLogin(
                    [viewlog.u_id, viewlog.u_email, input.password],
                    (err, results) => {
                      console.log(results + " " + err)
                    }
                    )
                    responseMsg = {}
                    responseMsg.status = "Success"
                    responseMsg.message = "Data Inserted"
                    responseMsg.user_id = viewlog.u_id
                    callback(null, responseMsg)
              } else {
                  conn.end()
            }
          })
        }
      }
    }
  )
}

function updateUser(input, callback) {
  dblogin.getUserId([input.email], (err, res) => {
    user_id = res[0].u_id
    const { email, ...sepObj } = input
    conn.query(
      "update users SET ? WHERE u_id=?",
      [sepObj, user_id],
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
  })
}

function dblogdata(dblog) {
  var uilog = {}
  uilog.u_id = generateUniqueId({
    length: 10,
  })
  uilog.u_fname = dblog.firstName
  uilog.u_lname = dblog.lastName
  uilog.u_name = dblog.firstName + " " + dblog.lastName
  uilog.u_email = dblog.email
  uilog.u_status = "true"
  return uilog
}

function saveData(inp) {
  var data = {}
  data.user_id = inp.u_id
  data.u_name = inp.u_name
  data.u_email = inp.u_email
  return data
}

module.exports = {
  createNewAcc,
  updateUser,
}
