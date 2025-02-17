const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

app.post('/api/data', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received data: ${name} ${email}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

