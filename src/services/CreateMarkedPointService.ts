import {getRepository} from 'typeorm';

import MarkedPoint from '../models/MarkedPoint';

interface Request {
    latitude: string;
    longitude: string;
    description: string;
}

class CreateMarkedPointService {
    public async execute( { latitude, longitude, description }: Request): Promise<MarkedPoint> {
        const markedPointRepository = getRepository(MarkedPoint);

        let findMarkedPoint = await markedPointRepository.findOne({
            where: {
                latitude,
                longitude
            }
        });
        console.log(findMarkedPoint)

        if(findMarkedPoint instanceof MarkedPoint){
            throw new Error('Mark point already exists.');
        };

        const newMarkedPoint = markedPointRepository.create({
            latitude,
            longitude,
            description
        });

        await markedPointRepository.save(newMarkedPoint);

        return newMarkedPoint;
    };
};

export default CreateMarkedPointService;