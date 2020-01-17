import App from './app';
import { RiotController } from './controllers';
const app = new App(
    [
        new RiotController()
    ],
    3000,
);

app.listen();
