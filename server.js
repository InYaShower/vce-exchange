const express = require('express')
const app = express()
app.use(express.static('static'))
app.get('/', function (req, res) {
    res.sendFile("static/home.html", { root: __dirname })
})

app.listen(80)
