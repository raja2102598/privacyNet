const { response } = require("express")
var path = require("path")


var dbconn = require(path.join(__dirname, "./dbcreateacc"))

//firstname,lastname,email,password,uid(automatic)
function createNewAccount(req, res) {
  var user = req.body
  dbconn.createNewAcc(user, (err, result) => {
      if (err) {
        // console.log(err.code)
        console.log(err)
      } else {
        // console.log(result)
        // responseMsg = {}
        // responseMsg.status = "Success"
        // responseMsg.message = "Data Inserted"
        // responseMsg.user_id = result.insert_id
        res.send(result)
      }
  })
}

//any user table fields
function updateUserDetails(req, res) {
  var user = req.body
  dbconn.updateUser(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      responseMsg = {}
      responseMsg.status = "Success"
      responseMsg.message = "Data Inserted"
      res.send(responseMsg)
    }
  })
}

module.exports = {
  createNewAccount,
  updateUserDetails,
}
