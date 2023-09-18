import express, { Application } from "express";
import cors, { CorsOptions } from "cors";


export default class Server {
    constructor(app: Application) {
        this.config(app);
    }

    private config(app: Application): void {
        const corsOptions: CorsOptions = {
            // TODO: configure for correct port?
            origin: "http://localhost:9000",
            allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, Hx-Trigger, Hx-Current-Url, Hx-Request, Hx-Target",
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }
}
