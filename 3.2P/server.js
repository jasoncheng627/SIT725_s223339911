const express = require('express');
const path = require('node:path');
const { existsSync } = require('node:fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const earbudPhoto = 'images/earbud.jpg';

const items = [
  {
    title: 'Black earbud',
    image: existsSync(path.join(__dirname, 'public', earbudPhoto)) ? earbudPhoto : null,
    link: 'Found at Burwood Library',
    description: 'Ask at the library service desk to collect it.'
  }
];

app.get('/api/items', (request, response) => {
  response.json(items);
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
