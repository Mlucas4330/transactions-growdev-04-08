import { express, Request, Response } from 'express';
import { User } from './models/users';
import { userRoutes } from './routes/user.routes';

const app = express();
const port = 3000;



export const listUsers : User[] = [
];

app.post('/users', userRoutes);

app.get('/users/:id', userRoutes);

app.update('/users/:id', userRoutes);

app.delete('/users/:id', userRoutes);

app.post('/:userId/transactions', userRoutes);

app.get('/:userId/transactions/:id', userRoutes);

app.get('/:userId/transactions', userRoutes);

app.delete('/:userId/transactions/:id', userRoutes);

app.listen(port, () => {});