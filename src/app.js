require('./db/mongodb')
require('./models')

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
require('./routes')(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000)

module.exports = {
    app
}