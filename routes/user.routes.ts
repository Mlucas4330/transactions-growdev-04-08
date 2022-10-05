import {Router, Request, Response} from 'express';
import { listUsers } from '../main';
import { Transactions } from '../models/transactions';
import { User } from '../models/users';

const userRoutes = Router();

userRoutes.post('/', (req : Request,res : Response) => {
    const { name, cpf, email, age} = req.body;

    if(!name){
        res.status(400).json({
            ok: false,
            message: "Preencha um nome."
        })
    }
    if(!cpf){
        res.status(400).json({
            ok: false,
            message: "Preencha um cpf."
        })
    }
    if(!email){
        res.status(400).json({
            ok: false,
            message: "Preencha um email."
        })
    }
    if(!age){
        res.status(400).json({
            ok: false,
            message: "Preencha um age."
        })
    }

    try {
        const user = new User(name, cpf, email, age);
        listUsers.push(user);

        return res.status(201).send({
            ok: true,
            data: listUsers,
        });
    }catch(error: any){
        res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }


})

userRoutes.get('/:id', (req : Request, res : Response) => {
    const {id} = req.query;

    listUsers.filter(user => {
        if(user.id === id){
            return res.status(200).json({
                ok: true,
                message: "Usuário encontrado."
            });
        }
        return res.status(400).json({
            ok: false,
            message: "Usuário não encontrado."
        });

    })
})

userRoutes.update('/:id', (req : Request, res: Response) => {
    const {id} = req.query;

    const {name, cpf, email, age} = req.body;

    const user = listUsers.find(user => user.id === id);

    user?.name(name);
    user?.cpf(cpf);
    user?.email(email)
    user?.age(age);
})

userRoutes.delete('/:id', (req: Request, res: Response) => {
    const {id} = req.query;

    listUsers.splice(id, 1);
});

userRoutes.post('/:userId/transactions', (req : Request, res: Response) => {
    const { id } = req.query;

    const {tittle, value, type} = req.body;

    const transaction = new Transactions(tittle, value, type);

    const user = listUsers.find(user => user.id === id);

    user?.transactions(transaction);
});

userRoutes.get('/:userId/transactions/:id', (req : Request, res: Response) => {
    const {userId, id} = req.query;

    const user = listUsers.find(user => user.id === userId);

    const transactions = user?.getTransactions;

    const transaction = transactions?.find(trans => trans.id === id);

    return transaction
});

userRoutes.get('/:userId/transactions', (req : Request, res: Response) => {
    const {id} = req.query;

    const user = listUsers.find(user => user.id === id);

    user?.getTransactions
});

userRoutes.delete('/:userId/transactions/:id', (req: Request, res: Response) => {
    const {userId, id} = req.query;

    const user = listUsers.find(user => user.id === id);

    user?.getTransactions.splice(id, 1);
});

export { userRoutes };