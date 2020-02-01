const { login } = require('../repositories/users-repository')

async function loginUser(req, res, next) {
    res.send(await login())
}

module.exports = {
    loginUser
}