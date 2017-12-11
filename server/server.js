const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Node Tests v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        { name: 'Nadeem Ansari', age: 25},
        { name: 'Sardar Mohammed', age: 25},
        { name: 'Raihan Ahmed', age: 25}
    ]);
});

app.listen(3000);

module.exports.app = app;