const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes')

const rsvpRoutes = require('./routes/rsvpRoutes')
const eventRoutes = require('./routes/eventRoutes')

dotenv.config();
connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Hello world, this is the backend");
});
app.use('/api/user', authRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/rsvp', rsvpRoutes);
app.use('/api/event', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
