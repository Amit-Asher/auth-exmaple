const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieSession = require('cookie-session');
const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ signed: false }));

app.post('/generate', (req, res) => {
    try {
        const token = jwt.sign(
            { email: req.body.email, expiresIn: new Date((new Date().getTime() + 5 * 60000)) }, // payload contains identifier + uniqe field (e.g expiration time)
            process.env.JWT_PK, // secret key from .env
            { expiresIn: '300s' } // 5 minutes
        );

        if (req.session) {
            req.session.JwtHttpOnly = token; // req.session.<you can choose here the name of the http-only entry>
        }

        res.send(token);
    } catch(err) {
        res.status(500).send({ 'error': 'please provide email in request body' });
    }
});

app.get('/validate', (req, res) => {
    try {
        const token = req.session?.JwtHttpOnly; // with http-only
        // const { token } = req.headers; // no http-only
        jwt.verify(token, process.env.JWT_PK, (err, decoded) => {
            if (err) {
                res.send('unauthorized');
            } else {
                res.send('authorized');
            }
        });
    } catch(err) {
        res.status(500).send({ 'error': 'unable to process the request' });
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));