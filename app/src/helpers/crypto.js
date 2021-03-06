var CryptoJS = require("crypto-js")

function decrypt(value) {
  var bytes = CryptoJS.AES.decrypt(value, process.env.SECRET_KEY)
  var originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}
function encrypt(value) {
  return CryptoJS.AES.encrypt(value, process.env.SECRET_KEY).toString()
}

module.exports = {
  encrypt,
  decrypt,
}
