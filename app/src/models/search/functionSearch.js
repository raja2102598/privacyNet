var path = require("path")

var dbconn = require(path.join(__dirname, "./dbSearch"))

function searchUserDB(req, res) {
  var user = req.body
  dbconn.searchUser(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      //   console.log(result)
      //   responseMsg = {}
      //   responseMsg.status = "Success"
      //   responseMsg.message = "Data Inserted"
      res.send(result)
    }
  })
}

module.exports = {
  searchUserDB,
}
