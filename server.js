const express = require('express');
const cors = require('cors');

const app = express();
const port = 3003;

// Enable CORS for all routes
app.use(cors());

app.get('/biryani', (req, res) => {
  res.json([
    { name: 'Samosa', price: '10' },
    { name: 'Momos', price: '12' },
    // More items...
  ]);
});

// If you want to handle the root path as well and avoid "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Welcome to the Snacks Service');
});

app.listen(port, () => {
  console.log(`Biryani service running on port ${port}`);
});
