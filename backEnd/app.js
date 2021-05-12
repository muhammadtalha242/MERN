const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/user-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes); // => /api/places...

app.use('/api/users', userRoutes)// => /api/users...

app.use((req, res, next) => {
    return next(new HttpError('Could not find a place for the provided user id.', 404));

});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(5000, () => {
    console.log("server listening at port 5000")
});