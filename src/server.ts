import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    return response.json({message: 'Teste'});
});

app.listen(3333, () => {
    console.log(' $$$$$ LeadStation Server started on port 3333 $$$$$');
});

