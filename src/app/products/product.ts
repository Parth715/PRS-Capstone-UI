import { Vendor } from "../vendors/vendor";

export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    vendorId: number = 0;
    vendor!: Vendor

}
