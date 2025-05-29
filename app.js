const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/2.0/index.xml', (req, res) => {
  console.log(`Received request with type=${req.query.type} locale=${req.query.locale}`);
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'page.html'));
});

app.listen(80, '0.0.0.0', () => {
  console.log('Server listening on http://0.0.0.0:80');
});