var path = require("path")

var dbconn = require(path.join(__dirname, "./dblogin"))

function logMeIn(req, res) {
  var user = req.body
  dbconn.Login(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      if (result[0].password === user.password) {
        res.send("hello")
      } else {
        res.send("bye")
      }
    }
  })
}

function updateUserNameDetails(req, res) {
  dbconn.getUserId([req.body.email], (err, resul) => {
    var user = req.body
    user.user_id = resul[0].u_id
    dbconn.updateUsername(user, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
        res.send("hello")
      }
    })
  })
}

module.exports = {
  logMeIn,
  updateUserNameDetails,
}
