import { Router } from 'express';
import ColetaController from './controllers/ColetaController';

const coletaController = new ColetaController();
const routes = Router();

routes.get('/coleta', coletaController.getDatas);
routes.post('/coleta', coletaController.create);

export default routes;
