const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
    res.send(`Holis ${req.query.nombre ? req.query.nombre : 'qué tal?'}`)
})
 
app.listen(3000);