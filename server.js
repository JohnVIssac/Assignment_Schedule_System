const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();
//User details: john - john123

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/authm', require('./routes/api/authm'));
app.use('/api/authh', require('./routes/api/authh'));
app.use('/api/authp', require('./routes/api/authp'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/usersm', require('./routes/api/usersm'));
app.use('/api/usersh', require('./routes/api/usersh'));
app.use('/api/usersp', require('./routes/api/usersp'));
app.use('/api/team', require('./routes/api/team'));
app.use('/api/assign', require('./routes/api/assign'));
app.use('/api/schedule', require('./routes/api/schedule'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
