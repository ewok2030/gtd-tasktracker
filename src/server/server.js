let express = require('express'),
    compression = require('compression');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(compression());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {res.send("Hello World!")});

app.get('/tasks', (req, res) => {
    res.send([
        {
            "id": 1,
            "title": "Take out the trash",
            "status": "New",
            "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
        }, {
            "id": 2,
            "title": "Walk the dog",
            "status": "New",
            "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
        }, {
            "id": 3,
            "title": "Pay the bills",
            "status": "New",
            "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
        }, {
            "id": 4,
            "title": "Another task for work",
            "status": "Closed",
            "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
        }
    ])
})

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
