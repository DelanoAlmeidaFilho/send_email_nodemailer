import { Router, Request, Response } from 'express';
import { SendMailController } from 'modules/SendMail/SendMailController';

const routes = Router();

const sendMailController = new SendMailController();

routes.post('/', sendMailController.handle);

export { routes };
