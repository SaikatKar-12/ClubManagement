const express = require('express')
const path = require('path');
const app = express()
const port = 7000
const staticPath = path.join(__dirname, 'public');

//app.use('/', express.static(__dirname + '/home'));
app.use(express.static(staticPath));
app.get('/home', (req, res) => {
  res.sendFile(path.join(staticPath, 'home', 'home.html'));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})