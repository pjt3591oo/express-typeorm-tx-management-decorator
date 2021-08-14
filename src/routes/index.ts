import * as express from 'express';
import service from '../service';

const route = express.Router();

route.get('/tx/green', service.txGreenDecorator);
route.get('/tx/red', service.txRedDecorator);
route.get('/red', service.redDecorator);

export default route;