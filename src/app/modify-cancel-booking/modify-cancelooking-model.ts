export class ModifyCancelookingModel {
    constructor(
    public bookingId: number,
    public bookingdateAndTime : String,
    public customerFirstName: String,
    public customerLastName: String, 
    public customerMobileNo: number,
    public usermailId: String,
    public customerDLNo : String,
    public dropdateAndTime: String,
    public Hub_hubId : number,
    public City_cityID : number,
    public State_stateID : number,
    public CarCategories_categoryId : number,
    public Customer_customerId : number,
    public status:string,
    public Amount : number){}
}
