var path = require("path")
var md5 = require("md5")
const { default: axios } = require("axios")
var Promise = require("promise")
var CryptoJS = require("../../helpers/crypto")

var dbconn = require(path.join(__dirname, "./dbSearch"))

function searchUserByName(req, res) {
  var user = req.query
  console.log(user)
  dbconn.searchUserName(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
}


function searchUserByAge(req, res) {
  var user = req.query

  dbconn.searchUserName(user, (err, result) => {
    console.log(user)
    if (user.age == "Less than 18") {
      user.age = "18"
    } else if (user.age == "Above 18 Less than 29") {
      user.age = "29"
    } else if (user.age == "Above 30 less than 39") {
      user.age = "39"
    } else if (user.age == "Above 40 less than 49") {
      user.age = "49"
    } else if (user.age == "Above 50") {
      user.age = "50"
    }
    if (err) {
      console.log(err)
    } else {
      console.log(user.age)
      let promises = []
      // let promisesCity = []
      for (i = 0; i < result.length; i++) {
        promises.push(
          axios.post("http://127.0.0.1:4000/api/v1/searchAge", {
            userid: result[i].user_id,
            age: md5(user.age),
            age1: md5(String(result[i].u_age)),
          })
        )
      }
      let resp = []
      a = 0
      Promise.all(promises).then(function (results) {
        for (i = 0; i <= result.length; i++) {
          a++
          console.log(results[i].data)
          if (results[i].data.message == "True") {
            for (var j = 0; j < result.length; j++) {
              if (results[i].data.userid == result[j].user_id) {
                resp.push(result[i])
              }
            }
          }
          console.log(resp)
          if (result.length == a) {
            res.send(resp)
          }
        }
      })
    }
  })
}

function searchUserByCity(req, res) {
  var user = req.query

  dbconn.searchUserName(user, (err, result) => {
    console.log(user)
    if (err) {
      console.log(err)
    } else {
      console.log(user.city)
      let promises = []
      // let promisesCity = []
      for (i = 0; i < result.length; i++) {
        promises.push(
          axios.post("http://127.0.0.1:4000/api/v1/searchCity", {
            userid: result[i].user_id,
            city: md5(user.city),
            city1: md5(String(CryptoJS.decrypt(result[i].u_city))),
          })
        )
      }
      let resp = []
      a = 0
      Promise.all(promises).then(function (results) {
        for (i = 0; i <= result.length; i++) {
          a++
          console.log(results[i].data)
          if (results[i].data.message == "True") {
            for (var j = 0; j < result.length; j++) {
              if (results[i].data.userid == result[j].user_id) {
                resp.push(result[i])
              }
            }
          }
          console.log(resp)
          if (result.length == a) {
            res.send(resp)
          }
        }
      })
    }
  })
}


module.exports = {
  searchUserByName,
  searchUserByAge,
  searchUserByCity,
}
