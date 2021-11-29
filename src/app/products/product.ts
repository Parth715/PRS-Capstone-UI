import { Vendor } from "../vendors/vendor";

export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    vendorId: number = 0;
    vendor: Vendor
    constructor(id:number, partNbr:string, name:string, price:number, unit:string, vendorId:number, vendor: Vendor){
        this.id = id,
        this.partNbr = partNbr,
        this.name = name,
        this.price = price,
        this.unit = unit,
        this.vendorId = vendorId
        this.vendor = vendor
    }

}
