const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Node + Nginx + Express</h1>');
});

app.listen(7340, () => {
  console.log('Server running on port 7340');
});