var express = require("express")

var body_parser = require("body-parser")

var app = express()

var login = require("./app/src/models/login/functionlogin")
var createAcc = require("./app/src/models/create_account/functioncreateacc")
var profile = require("./app/src/models/user_profile/functionProfile")

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))

app.post("/createAcc", createAcc.createNewAccount)

app.post("/login", login.logMeIn)

app.put("/updateLogin", login.updateUserNameDetails)

app.post("/addProfile", profile.createNewProfile)

app.put("/updateUser", createAcc.updateUserDetails)

app.listen(5000, () => {
  console.log("Server Started")
})
