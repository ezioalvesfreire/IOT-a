var express = require('express');
var router = express.Router();
var actuadorsService = require('../services/actuadorsService');
var moviesService = require('../services/moviesService');
var sensorsService = require('../services/sensorsService');
//var sobreService = require('../services/sobreService');
//var trabalheconoscoService = require('../services/trabalheconoscoService'); // trabalheconosco
//var cardsService = require('../services/cardsService');

/* GET home page. */ // nesse caso home e Smarthome
router.get('/', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors(); //posts 
    var movies = moviesService.getProjects();
    res.render('index', { title: 'Home page', actuadors: actuadors, projects: movies });
});

/* GET cards page.  // são os sensores e atuadores que por fim deverão ser individualizados  */
router.get('/cardsActuador', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors(); //posts
    var movies = moviesService.getProjects();
    res.render('cardsActuador', { title: 'Meus cards', actuadors: actuadors, projects: movies });
});

/* GET cards page.  // são os sensores que por fim sendo individualizados  */
router.get('/cardsSensors', function(req, res, next) {
    var sensors = sensorsService.getSensors(); //posts
    var movies = moviesService.getProjects();
    res.render('cardsSensors', { title: 'Meus cards', sensors: sensors, projects: movies });
});

/* não sofreu qualquer inflência ao (comentar) cancelar o codigo abaixo! */
router.get('/actuador', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors(); //posts
    res.render('actuador', { title: 'Home page', actuadors: actuadors });
});

// mostra o dispositivo 1 a 1 conforme a Id selecionada  ( ler mais ou ON/OFF)
router.get('/actuadors/:actuadorId', function(req, res, next) {
    var actuadorId = req.params.actuadorId;
    var actuadors = actuadorsService.getActuadors(); //posts
    var actuador = actuadors.filter((actuador) => actuador.id == actuadorId)[0];
    res.render('actuador', { title: actuador.title, actuador: actuador });
});

/* não sofreu qualquer inflência ao (comentar)cancelar o codigo abaixo! */
//Mostra lista de projects no menu Projects
router.get('/cards', function(req, res, next) {
    var lprojects = cardsService.getProjects()
    res.render('cards', { title: 'Meus cards', lista_projects: lprojects });
});

/*funcão para o video blog */
//Mostra lista de movies no menu  
router.get('/movies', function(req, res, next) {
    var lprojects = moviesService.getProjects()
    res.render('movies', { title: 'Meus vídeos', lista_projects: lprojects });
});

// função do gb  Obs: acredito que equivale a nossa função que mostra dispositivo 1 a 1 logo acima
/*
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    //var tempData = tempSensorsService.getTempData();
    var actuadors = actuadorsService.getActuadors();
    var actuador = actuadors.filter((actuador) => actuador.id == id)[0]
    var index = actuadors.indexOf(actuador);

    if (actuador.status < 1) {
        actuador.status = 1;
    } else {
        actuador.status = 0;
    }

    actuadors.splice(index, 1, actuador);
    actuadorsService.saveFileActuadors(actuadors);

    // falta acertar o caminho de resposta logo abaixo !(res.render)
    console.log(actuador);
    res.render('index', { title: 'actuadors', actuadors, actuadors });
})

/// até aqui!*/

module.exports = router;