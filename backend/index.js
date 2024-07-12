const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')
const ContactRouter = require('./Routes/ContactRouter')

require('dotenv').config();
require('./db')

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from backend AI Content Generator")
})

//Routes
app.use('/auth', AuthRouter);
app.use('/contact', ContactRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})
