const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

path = require('path')
fs = require('fs');
url = require('url');

app.use(express.json())
app.use(cors())

app.get('/load', (req, res) => {
  try {
    const data = fs.readFileSync('data/data.txt', 'utf8').split(/\n/);
    res.json(data);
  } catch(err) {
    res.status(500).send('Could not load data!');
  }
});

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
  


app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})