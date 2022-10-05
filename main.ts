import { express, Request, Response } from 'express';
import { User } from './models/users';
import { userRoutes } from './routes/user.routes';

const app = express();
const port = 3000;



export const listUsers : User[] = [
];

app.use('/users', userRoutes);


app.listen(port, () => {});