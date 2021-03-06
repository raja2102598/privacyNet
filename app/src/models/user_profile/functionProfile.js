var path = require("path")

var dbconn = require(path.join(__dirname, "./dbProfile"))

function createNewProfile(req, res) {
  var user = req.body
  dbconn.createNewUserProfile(user, (err, result) => {
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

function getProfile(req, res) {
  console.log(req.query)
  var user_id = req.query
  dbconn.getUserProfile(user_id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  createNewProfile,
  getProfile,
}
