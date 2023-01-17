import express, {Application} from 'express'
import cors from 'cors'

import { LOCAL_PUBLIC_FOLDER_PATH, USER_PATH } from '../constants/routes.constant';
import userRouter from '../routes/user.routes';

export default class Server {

    private app: Application;
    private port: string;
    private apiPaths: {user: string} = {
        user: USER_PATH
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middleware();
        this.routes();
    }

    public middleware(): void {
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static(LOCAL_PUBLIC_FOLDER_PATH))        
    }

    public routes(): void {
        this.app.use(this.apiPaths.user, userRouter)
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log('Server is running in port: ', this.port);
        })
    }
}