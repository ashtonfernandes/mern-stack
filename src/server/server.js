const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');

// location of public directory
const PUBLIC_DIR = process.cwd() + '/dist';

// initialize express into a variable called app
const app = express();

// middleware for body-parser
app.use(bodyParser.json());

// MongoDB configuration
const db = require('../../config/keys').mongodbURI;

// connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error', err))

// User items in the Routes folder for anything that has an enpoint /api/routes
app.use('/api/items', items);

const port = process.env.PORT || 3000;

// check if production
if (process.env.NODE_ENV === 'production') { 
    app.enable('trust proxy'); 
    app.use((req, res, next) => { 
    if (req.secure) next();
    else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
}

app.use(express.static(PUBLIC_DIR));

app.listen(port, () => console.log(`App listening on port ${port}`));