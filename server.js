const fs = require('fs');
const path = require('path');
const express = require('express');
// const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes)
app.use(apiRoutes)


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});