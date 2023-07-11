interface IMailerService {
    sendMail(): void;
}

interface ILoggerService {
    log(message: string): void;
}

class MailerService implements IMailerService {
    sendMail(): void {
        console.log('sendMail');
    }
}

class LoggerService implements ILoggerService {
    log(message: string): void {
        console.log(message);
    }
}

class UserService {
    private mailerService: IMailerService;
    private loggerService: ILoggerService;

    constructor(mailerService: IMailerService, loggerService: ILoggerService) {
        this.mailerService = mailerService;
        this.loggerService = loggerService;
    }

    register(name: string): void {
        this.mailerService.sendMail();
        this.loggerService.log(`${name} registered!`);
    }
}

class IocContainer {
    private static services = new Map();

    static register(name: string, service: any): void {
        this.services.set(name, service);
    }

    static resolve<T>(name: string): T {
        if(!this.services.has(name)) {
            throw new Error(`Key ${name} was not registered!`);
        }
        return this.services.get(name);
    }
}

const EContainerKeys = {
    mailerService: 'mailerService',
    loggerService: 'loggerService',
}

IocContainer.register(EContainerKeys.mailerService, new MailerService());
IocContainer.register(EContainerKeys.loggerService, new LoggerService());

const userService = new UserService(
    IocContainer.resolve<IMailerService>(EContainerKeys.mailerService),
    IocContainer.resolve<ILoggerService>(EContainerKeys.loggerService),
);

userService.register('John Doe');