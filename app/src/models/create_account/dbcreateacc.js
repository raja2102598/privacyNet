var path = require("path")

var conn = require(path.join(__dirname, "../../../db/dbconn"))
var dblogin = require(path.join(__dirname, "../login/dblogin"))

const generateUniqueId = require("generate-unique-id")
var moment = require("moment")

function createNewAcc(input, callback) {
  var viewlog = dblogdata(input)
  viewlog.u_createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  console.log(viewlog)
  conn.query("SELECT COUNT(*) AS cnt FROM users WHERE u_email = ? ",viewlog.u_email,(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      if(result[0].cnt>0){
        responseMsg = {}
        responseMsg.status = "Failed"
        responseMsg.message = "Email Already Exist"
        callback(null,responseMsg)
      }
      else{
        conn.query("insert into users SET ?", viewlog, (err, results) => {
          if (err) {
                  console.log(err)
                } else if (results) {
                  dblogin.createLogin(
                    [viewlog.u_id, viewlog.u_email, input.password],
                    (err, results) => {
                      console.log(results + " " + err)
                    }
                  )
                  // "u_id", viewlog.u_id
                  // results.insert_id = viewlog.u_id
                  responseMsg = {}
                  responseMsg.status = "Success"
                  responseMsg.message = "Data Inserted"
                  responseMsg.user_id = viewlog.u_id
                  // res.send(responseMsg)
                  callback(null, responseMsg)
                }
               else {
                  conn.end()
                }
              
              })
      }
    }
  } )
 
}

function checkEmailExist(input,callback){
  
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

module.exports = {
  createNewAcc,
  updateUser,
}
