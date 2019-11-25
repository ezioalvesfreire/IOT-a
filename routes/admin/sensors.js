var express = require('express');
var router = express.Router();
var sensorsService = require('../../services/sensorsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next) {
    var sensors = sensorsService.getSensors();
    /*
        var data = {
            sensors: sensors
        };
    */ //data  por {sensors} 
    res.render('admin/dispositivs/sensor', { sensors }); // caminho para ejs  originalmente index/// possivel sensor
});

router.get('/createSensor', function(req, res, next) {

    res.render('admin/dispositivs/createSensor');
});

router.post('/createSensor', upload.single('image'), function(req, res, next) {
    var sensors = sensorsService.getSensors();

    var newId = sensors.length + 1;

    var newSensor = {};
    newSensor.id = newId;
    newSensor.title = req.body.title;
    newSensor.image = req.file.filename;
    newSensor.description = req.body.description;
    newSensor.body = req.body.postBody;

    sensorsService.saveSensor(newSensor);

    res.redirect('/admin/sensors');
});

module.exports = router;