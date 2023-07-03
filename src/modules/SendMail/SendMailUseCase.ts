import { IMailProvider } from 'shared/container/providers/MailProvider/IMailProvider';
import { inject, injectable } from 'tsyringe';
import { resolve } from 'path';

interface IRequest {
    name: string;
    email: string;
}

@injectable()
class SendMailUseCase {
    constructor(
        @inject('MailProvider')
        private mailProvider: IMailProvider,
    ) {}

    async execute({ email, name }: IRequest): Promise<void> {
        const templatePath = resolve(
            __dirname,
            '..',
            '..',
            'views',
            'email',
            'send.hbs',
        );

        const variables = {
            name,
            link: `https://youtube.com`,
        };

        await this.mailProvider.sendMail(
            email,
            'Test email',
            variables,
            templatePath,
        );
    }
}

export { SendMailUseCase };
