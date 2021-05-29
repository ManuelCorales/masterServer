const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
    res.send(`Holis ${req.query.nombre ? req.query.nombre : 'qué tal?'}`)
})

var text={"hello.txt":"Hello World!","bye.txt":"Goodbye Cruel World!"};
app.get('/.wellknown/acme-challenge',function(req,res){
   res.set({"Content-Disposition":"attachment; filename=\"req.params.name\""});
   res.send(text[req.params.name]);
});

// app.get('/.wellknown/acmechallenge', function (req, res) {
//     res.send(`Holis ${req.query.nombre ? req.query.nombre : 'qué tal?'}`)
// })

app.listen(3000);