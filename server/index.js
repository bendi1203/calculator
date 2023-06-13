const express = require('express')
const app = express()
const port = 5000

path = require('path')
fs = require('fs');
url = require('url');

app.use(express.json())

app.post('/save', (req, res) => {
  const data = req.body.value;
  const filePath = path.join(__dirname, 'data', 'data.txt');

  if(typeof data === 'number') {
    fs.appendFile(filePath, JSON.stringify(data) + '\n', (err) => {
      if(err) {
        console.log(err);
        res.status(500).send('Cannot save the data!');
      } else {
        res.status(200).send('Data saved successfully!');
      }
    })
  } else {
    res.status(500).send('Only numbers can be saved!');
  }

  
})

app.get('/load', (req, res) => {
  res.send('load')
})


app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})