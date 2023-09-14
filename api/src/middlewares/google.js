const { User } = require('../db.js');
require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  'auth-google',
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/google',
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],

    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        // Buscar un usuario existente en la base de datos por su googleId
        const existingUser = await User.findOne({
          where: { googleId: profile.id },
        });

        if (existingUser) {
          // Si el usuario ya existe, actualiza sus datos (por ejemplo, imagen y correo electrónico)
          existingUser.image = profile.photos[0].value; // Actualiza la imagen con la de Google
          existingUser.email = profile.emails[0].value; // Actualiza el correo electrónico con el de Google

          await existingUser.save();

          return cb(null, existingUser);
        } else {
          // Si el usuario no existe, crea uno nuevo con los datos de Google
          const newUser = await User.create({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
            email: profile.emails[0].value,
            googleId: profile.id,
          });

          return cb(null, newUser);
        }
      } catch (error) {
        return cb(error, null);
      }
    },
  ),
);

// Configura serializeUser
passport.serializeUser((user, done) => {
  // Almacena solo el ID del usuario en la sesión
  done(null, user.id);
});

// Configura deserializeUser
passport.deserializeUser(async (id, done) => {
  try {
    // Busca al usuario por su ID y devuelve el usuario
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
