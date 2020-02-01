const mongoose = require('mongoose')
const user = mongoose.model('user')

async function login() {
    return true;
}

module.exports = {
    login
}