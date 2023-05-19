const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(express.json());
app.use(cors())
app.use(volleyball)

app.use('/api', require('./api'));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


app.use((err, req, res, next) => {
  console.error(err);
})

module.exports = app;

