import { Product } from "../products/product";

export class Requestline {
    id:number=0;
    requestId:number=0;
    productId:number=0;
    quantity:number=0;
    subtotal:number=0;
    product!: Product;
    request!: Request;
}