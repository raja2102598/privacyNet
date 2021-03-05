var express = require("express")

var bodyParser = require("body-parser")
const cors = require("cors")


var path = require("path")
const app = express()

var login = require(path.join(
  __dirname,
  "./app/src/models/login/functionlogin"
))
var createAcc = require(path.join(
  __dirname,
  "./app/src/models/create_account/functioncreateacc"
))
var profile = require(path.join(
  __dirname,
  "./app/src/models/user_profile/functionProfile"
))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get("/", (req, res) => {
  res.send("hello")
})

app.post("/createAcc", createAcc.createNewAccount)

app.post("/login", login.logMeIn)

app.put("/updateLogin", login.updateUserNameDetails)

app.post("/addProfile", profile.createNewProfile)

app.put("/updateUser", createAcc.updateUserDetails)

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started")
})
