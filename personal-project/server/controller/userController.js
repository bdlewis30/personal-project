
module.exports = {
    read: (req, res) => {
        let query = 'SELECT * FROM Users'
        app.get('db').query(query, []).then((rows)=>{
            res.json(rows)
        });
    },
    create: (req, res) => {
        let query = 'INSERT INTO Users(Username) VALUES($1) RETURNING *;'
        app.get('db').query(query, [req.body.username]).then((rows) => {
            res.json(rows)
        });
    },
    update: (req, res) => {
        let query = 'UPDATE Users SET Username = $1 WHERE ID = $2;'
        app.get('db').query(query, [req.body.username, req.params.id]).then((rows) => {
            res.status(200).end();
        });
    },
    delete: (req, rea) => {
        let query = 'DELETE FROM Users WHERE ID = $1;'
        app.get('db').query(query, [req.params.id]).then((rows) => {
            res.status(200).end();
        });
    }
}