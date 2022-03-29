const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {

    fs.readFile('/etc/hosts', 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        count = parseInt(data);
    });

    res.render('index.html',{count: count});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})