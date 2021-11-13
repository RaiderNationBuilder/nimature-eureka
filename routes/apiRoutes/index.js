const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const {v4:uuidv4} = require("uuid")

router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname + "./../../db/db.json"), "utf8", function (err, data) {
        res.json(JSON.parse(data))
    });
});

router.post('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname + "./../../db/db.json"), "utf8", function (err, data) {
        var parsed = JSON.parse(data)
        req.body.id = uuidv4()
        parsed.push(req.body)
        fs.writeFile(path.join(__dirname + "./../../db/db.json"), JSON.stringify(parsed), function (err, data) {
            res.json(parsed)
        })
    });
});

router.delete('/api/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname + "./../../db/db.json"), "utf8", function (err, data) {        
        var filtered = JSON.parse(data).filter((note) => note.id != req.params.id)
        console.log(JSON.stringify({filtered}, null, 2))
        fs.writeFile(path.join(__dirname + "./../../db/db.json"), JSON.stringify(filtered), function (err, data) {
            res.json(filtered)
        })
    })
})


// have a delte route
// read the db json file again fs.Readfile
// have empty array var newNotes = []
// do a for loop and inside for loop have an if statment checking the ids!
//var filtered = data.filter((note) =>  note.id != req.params.id)

module.exports = router;