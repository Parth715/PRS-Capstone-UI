import { User } from "../users/user";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: any = null;
    deliveryMode: string = "";
    status: string = "NEW";
    total: number = 0;
    userId: number = 0;
    user!: User;
    constructor(){
    }
}
