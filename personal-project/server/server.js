require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive') 
    , trailCtrl = require('./controller/trailController')
    , session = require('express-session')
    , userConstoller = require('./controller/userController')

// CREATE EXPRESS
const app = express();

// EXPRESS
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitilized: true
}));

// app.use(express.static(`${__dirname}/build`));

// HIKING ENDPOINTS
app.get('/api/trails/', trailCtrl.read);
app.post('/api/trails/', trailCtrl.create);
app.put('/api/trails/:id', trailCtrl.update);
app.delete('/api/trails/:id', trailCtrl.delete);

// USER ENDPOINTS
app.get('/api/users/', userConstoller.read);
app.post('/api/users/', userConstoller.create);
app.put('/api/users/:id', userConstoller.update);
app.delete('/api/users/:id', userConstoller.delete);

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file_trail().then(response => {
        console.log(response)
    })
    app.listen(process.env.port, () => {
        console.log(`I'm listening on port ${process.env.PORT}`)
    })
})