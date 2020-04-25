const express = require('express'); //express importa o modulo express

const IncidentsController = require('./controllers/IncidentsController');
const ReferencesController = require('./controllers/ReferencesController');
const LocationsController = require('./controllers/LocationsController');
const OrdinalReferencesController = require('./controllers/OrdinalReferencesController');

const connection = require('./database/connection');//Importa a conexão com o banco de dados
const routes = express.Router(); //desacoplando o módulo de rotas do express em uma nova constante

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);//Rota para postar o que esta dentro do IncidentsCOntroller
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/ordinalReferences', OrdinalReferencesController.index);
routes.post('/ordinalReferences', OrdinalReferencesController.create);
routes.delete('/ordinalReferences/:id', OrdinalReferencesController.delete);

routes.get('/references', ReferencesController.index);
routes.post('/references', ReferencesController.create);
routes.delete('/references/:id', ReferencesController.delete);
routes.get('/references/:id', ReferencesController.show);

routes.get('/locations', LocationsController.index);
routes.post('/locations', LocationsController.create);
routes.delete('/locations/:id', LocationsController.delete);



module.exports = routes; //Forma na qual se exporta alguma constante