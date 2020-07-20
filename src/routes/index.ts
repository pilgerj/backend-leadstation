import {Router} from 'express';

import markingsRouter from './markings.routes';

const routes = Router();

routes.use('/markings', markingsRouter);

export default routes;