import { ORDER_STATUS } from './Enums/OrderStatus';
export interface Order{
    id: number,
    status: ORDER_STATUS,
    userId: number,
    orderTotal: number 
}