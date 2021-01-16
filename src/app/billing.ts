export class Billing {
    constructor(public billingId:number,
        public CarCategories_categoryId:number,
        public Car_carId:number,
        public Booking_bookingId:number,
        public Customer_customerId:number,
        public billingName:string,
        public fuelStatus:string,
        public startDate:string,
        public endDate:string,
        public userMailid:string,
        public customerMobNo:string,
        private Hub_hubid:number,
        private firstName:string,
        private lastName:string){}
}