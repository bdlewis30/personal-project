var trails = [];

function findTrail(id){
    return trails.findIndex((trail) => {
        return trail.id == id;
    })
}

module.exports = {
    read: (req, res) => {
        res.send(trails);
    },
    create: (req, res) => {
        trails = [];
        req.body.forEach(t => {
            let trail = {
                name: t.name,
                city: t.city,
                state: t.state,
                description: t.description,
                map: `https://www.google.com/maps/@${t.lat},${t.lon},15z`,
                latitude: t.lat,
                longitude: t.lon,
                id: t.unique_id
            }
            trails.push(trail);
        })
        res.json(trails);
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