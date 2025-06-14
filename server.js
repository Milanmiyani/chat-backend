const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// ...existing code...
app.get('/', (req, res) => {
  res.send('Backend API is running');
});
// ...existing code...

// mongoose.connect(process.env.MONGO_URI);
//.then(() => console.log("MongoDB Connected"))
//.catch(err => console.log(err));

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB connection error:", err));

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
