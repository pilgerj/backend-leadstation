import {Router} from 'express';
import {getRepository} from 'typeorm';

import MarkedPoint from '../models/MarkedPoint';
import CreateMarkedPointService from '../services/CreateMarkedPointService';

const markingsRouter = Router();

markingsRouter.get('/', async (request, response) => {
    const markedPointRepository = getRepository(MarkedPoint);

    const markedPoints = await markedPointRepository.find();
    
    return response.json(markedPoints);
});

markingsRouter.post('/', async (request, response) => {
    const requestData = request.body;

    const createMarkedPointService = new CreateMarkedPointService();

    const newMarkedPoint = await createMarkedPointService.execute(requestData);

    return response.status(200).json(newMarkedPoint);
});

//markingsRouter.delete('/:id')
//construindo o delete point.

export default markingsRouter;

