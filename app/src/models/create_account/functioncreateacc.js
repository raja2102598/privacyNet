const { response } = require("express")
var dbconn = require("./dbcreateacc")

//firstname,lastname,email,password,uid(automatic)
function createNewAccount(req, res) {
  var user = req.body
  dbconn.createNewAcc(user, (err, result) => {
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
