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

module.exports = {
  createNewProfile,
}
