var fs = require('fs');

var actuadorsFilePath = 'db/actuadors.json';
//ler status do atuador
var loadFileActuadors = function() {
    var fileData = fs.readFileSync(actuadorsFilePath, 'utf8');
    var actuadors = JSON.parse(fileData);

    return actuadors; //actuador
}

var loadFileActuatorStatus = function() {
    var fileData = fs.readFileSync(actuartorsFilePath, 'utf8');
    var actuator = JSON.parse(fileData);

    return actuator;
}


var saveFileActuador = function(actuadors) {
        var data = JSON.stringify(actuadors);
        fs.writeFileSync(actuadorsFilePath, data, 'utf-8');
    }
    //capurar status actuadors //fnd
var saveFileNewStatus = function(newStatus) {
    fs.writeFileSync(actuartorsFilePath, newStatus, 'utf8');
}

var getActuadors = function() {
    var actuadors = loadFileActuadors();
    return actuadors;
}

const saveActuador = function(newActuador) {
    var actuadors = loadFileActuadors();
    actuadors.push(newActuador);
    saveFileActuador(actuadors);
}

// ler o estado do led on ou off // fnd
var getEstadoLed = function(id) {
    var actuators = getActuators();
    var actuators = switches.find((actuators) => actuators.id == id);
    return actuators;
}



module.exports = {
    getActuadors: getActuadors,
    saveActuador: saveActuador,

    //saveFileActuadors: saveFileActuadors,
    //fnd
    getEstadoLed: getEstadoLed,
    saveFileNewStatus: saveFileNewStatus,
    loadFileActuatorStatus: loadFileActuatorStatus

}