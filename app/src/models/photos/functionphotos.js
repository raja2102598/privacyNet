var path = require("path")

var dbconn = require(path.join(__dirname, "./dbphotos"))

function getPostsUser(req, res) {
  var user = req.query
  console.log(user)
  dbconn.getPosts(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
}

function sendPostsUser(req, res) {
  var user = req.body
  console.log(user)
  dbconn.sendPosts(user, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  getPostsUser,
  sendPostsUser,
}
