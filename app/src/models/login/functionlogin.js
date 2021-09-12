var path = require("path")

var axios = require("axios")
var dbconn = require(path.join(__dirname, "./dblogin"))
var CryptoJS = require(path.join(__dirname, "../../helpers/crypto"))
var md5 = require("md5")


function logMeIn(req, res) {
  var user = req.body
  console.log(user)
  dbconn.Login(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(result)
      // Decrypt
      // var bytes = CryptoJS.AES.decrypt(
      //   result[0].password,
      //   process.env.SECRET_KEY
      // )
      // result[0].password = bytes.toString(CryptoJS.enc.Utf8)
      // // console.log(result[0].password)
      result[0].password = CryptoJS.decrypt(result[0].password)

      //Homomorphic Server Connection
      axios
        .post("http://127.0.0.1:4000/api/v1/login", {
          email: user.email,
          password: md5(user.password),
          password1: md5(result[0].password),
        })
        .then(function (response) {
          // console.log(response.data)
          if (response.data.status == 0) {
            responseMsg = {}
            responseMsg.status = "Success"
            responseMsg.message = "Logged In"
            responseMsg.user_id = result[0].login_id
            res.send(responseMsg)
          } else {
            responseMsg = {}
            responseMsg.status = "Failed"
            responseMsg.message = "Email or Password Not Found"
            res.send(responseMsg)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
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
