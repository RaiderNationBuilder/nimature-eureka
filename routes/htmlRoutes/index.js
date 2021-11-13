const path = require('path');
const router = require('express').Router();
// const animalRoutes = require('../apiRoutes/animalRoutes');

// router.use(require('../apiRoutes/zookeeperRoutes'));
// router.use(animalRoutes);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;