export class Handover {
    constructor(public BookingId:number,
        public selectcars:Array<string>,
        public VehicleNo:string,
        public carstatus:string,
        public fuelstatus:string)
    {}
}
