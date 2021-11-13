const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname + "./../../db/db.json"), "utf8", function (err, data) {
        console.log('__dirman', __dirname)
        //fs.readFile( "./../../db/db.json", "utf8", function(err, data){
        console.log(err, data)
        res.json(JSON.parse(data))
    });
});

router.post('/api/notes', (req, res) => {
    console.log('req.body', req.body)
    fs.readFile(path.join(__dirname + "./../../db/db.json"), "utf8", function (err, data) {
        console.log('__dirman', __dirname)        
        console.log(err, data)
        var parsed = JSON.parse(data)
        req.body.id = parsed.length + 1
        parsed.push(req.body)
        fs.writeFile(path.join(__dirname + "./../../db/db.json"), JSON.stringify(parsed), function (err, data) {
            res.json(parsed)
        })
    });
});

router.delete('/api/notes/:id', (req, res) => {
    console.log('req.oarams', req.params)
})


// have a delte route
    // read the db json file again fs.Readfile
        // have empty array var newNotes = []
        // do a for loop and inside for loop have an if statment checking the ids!
        //var filtered = data.filter((note) =>  note.id != req.params.id)

module.exports = router;