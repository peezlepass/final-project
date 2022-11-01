require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const { PORT, SECRET } = process.env;
const sessionConfig = {
    name: 'GameSession',
    store: new FileStore(),
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10,
        httpOnly: true,
    },
};

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(session(sessionConfig));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))