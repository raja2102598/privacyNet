var CryptoJS = require("crypto-js")

function decrypt(value) {
  var bytes = CryptoJS.AES.decrypt(value, "finalyearproject2021")
  var originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}
function encrypt(value) {
  return CryptoJS.AES.encrypt(value, "finalyearproject2021").toString()
}

module.exports = {
  encrypt,
  decrypt,
}
