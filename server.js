const express = require('express');
const path = require('path');
const fs = require('fs');
const e = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    
    var count;
    
    fs.readFile('count.txt', 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }

        count = parseInt(data);
        count++;
        count = count.toString();

        fs.writeFile('count.txt', count, err => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });

    res.render('index.html', {count: count});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})