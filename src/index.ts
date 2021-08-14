import 'reflect-metadata';

import * as express from 'express';

import * as morgan from 'morgan';
import * as cors from 'cors';

import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', routes);



export default app;