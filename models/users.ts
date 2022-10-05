import { Transactions } from "./transactions";

export class User {
    private _id : number;
    private _name : string;
    private _cpf : string;
    private _email : string;
    private _age : number;
    private _transactions : Transactions[];

    constructor(n: string, c: string, e: string, a: number){
        this._id = 0;
        this._name = n;
        this._cpf = c;
        this._email = e;
        this._age = a;
        this._transactions = [];
    }

    public get id(){
        return this._id;
    }

    public set name(name){
        this._name = name;
    }

    public set cpf(cpf){
        this._cpf = cpf;
    }

    public set email(email){
        this._email = email;
    }

    public set age(age){
        this._age = age;
    }

    public get getTransactions(){
        return this._transactions;
    }

    public set transactions(transaction){
        this._transactions.push(transaction);
    }
}