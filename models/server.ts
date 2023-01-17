import express, {Application} from 'express'

export default class Server {

    private app: Application;

    public port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log('Server is running in port: ', this.port);
        })
    }
}