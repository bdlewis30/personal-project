
const q = require('q');

module.exports = {
    read: (req, res) => {
        let query = 'SELECT * FROM Trails'
        app.get('db').query(query, []).then((rows)=>{
            res.json(rows)
        });
    },
    create: (req, res) => {
        let promises = [];
        let query = "INSERT INTO Trails(TrailName, City, State, Map, Latitude, Longitude, UniqueID) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;"
        req.body.forEach(t => {
            let trail = [
                t.name,
                t.city,
                t.state,
                `https://www.google.com/maps/@${t.lat},${t.lon},15z`,
                t.lat,
                t.lon,
                t.unique_id
            ]
            promises.push(app.get('db').query(query, trail))
        })
        q.all(promises).done((results) => {
            res.status(200).end();
        })
    },
    update: (req, res) => {
        var i = findTrail([req.params.id]);
        trails[i].description = req.body.description;
        res.json(trails[i]);
    },
    delete: (req, rea) => {
        var i = findTrail(req.params.id);
        if(i >= 0) {
            trails.splice(i, 1);
        }
        res.status(200).end();
    }
}