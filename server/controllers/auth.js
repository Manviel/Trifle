module.exports.login = function (req, res) {
  res.status(200).json({
    login: 'It is work'
  })
}

module.exports.register = function(req, res) {
  res.status(200).json({
    register: 'Register'
  })
}