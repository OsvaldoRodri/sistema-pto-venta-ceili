import express from 'express';
import config from './config.js';
import loginRoutes from './routes/login-routes.js';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();
const app = express();

/*Middlewares */
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));

/*Routes */
app.use(loginRoutes);


/*Listener */
app.listen(config.PORT);
console.log(`Server running on port ${config.PORT}`);