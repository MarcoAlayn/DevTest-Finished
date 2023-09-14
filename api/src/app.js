const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pokemonRoutes = require('./routes/pokemon.routes');
const userRoutes = require('./routes/user.routes');
const LoginRoutes = require('./routes/login.routes');
const passport = require('passport');
require('./middlewares/google.js');
const session = require('express-session');
const { sessionSecret } = require('./config/sessionSecret');
const cors = require('cors');
const server = express();


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

server.use(cors(corsOptions));

server.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
  }),
);

require('./db.js');

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));


server.use(passport.initialize());
server.use(passport.session());

server.use(
  '/auth',
  passport.authenticate('auth-google', {
    successRedirect: '/v1/user',
    failureRedirect: '/',
  }),
  LoginRoutes,
);

server.use('/v1', pokemonRoutes);
server.use('/v1', userRoutes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
