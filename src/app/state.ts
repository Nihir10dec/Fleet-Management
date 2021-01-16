import { IState } from './Istate';
export class State implements IState{
    
    constructor(
    public stateId: number,
    public stateName: string,
    public Cities: any[],
    public Bookings: any[]){

    }
}
