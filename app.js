const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use('/', routes.pokemon)
app.listen(3000, () => {console.log('running at port: 3000')});