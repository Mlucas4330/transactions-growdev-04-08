export class Transactions {
    private _id : number;
    private _tittle : string;
    private _value : number;
    private _type : string;

    constructor(t: string, v: number, ty: string){
        this._id = 0;
        this._tittle = t;
        this._value = v;
        this._type = ty;
    }

    public get id(){
        return this._id;
    }
}