require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive') 
    , trailCtrl = require('./controller/trailController')
    , fishingCtrl = require('./controller/fishingController')
    , campingCtrl = require('./controller/campingController')


// Create Server
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


//HIKING ENDPOINTS
app.get('/api/', trailCtrl.read);
app.post('/api/', trailCtrl.create);
app.put('/api/', trailCtrl.update);
app.delete('/api/', trailCtrl.delete);

//CAMPING ENDPOINTS
app.get('/api/', campingCtrl.read);
app.post('/api/', campingCtrl.create);
app.put('/api/', campingCtrl.update);
app.delete('/api/', campingCtrl.delete);

//FISHING ENDPOINTS
app.get('/api/', fishingCtrl.read);
app.post('/api', fishingCtrl.create);
app.put('/api/', fishingCtrl.update);
app.delete('/api/', fishingCtrl.delete);


const port = 4000;

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`)
})