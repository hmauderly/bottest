'use strict';


const bodyParser = require('body-parser');
const express = require('express');



var app = express();

app.set('port', process.env.PORT || 5555);
app.use(bodyParser.json());



app.get('/webhook', function(req, res) {
        res.status(200).send('OK');
});


app.listen(app.get('port'), function() {
    console.log('Bot is running on port ', app.get('port'));
});
