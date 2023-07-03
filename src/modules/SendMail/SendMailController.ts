import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SendMailUseCase } from './SendMailUseCase';

class SendMailController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, name } = req.body;

        const sendMailUseCase = container.resolve(SendMailUseCase);

        await sendMailUseCase.execute({ email, name });

        return res.status(204).send();
    }
}

export { SendMailController };
