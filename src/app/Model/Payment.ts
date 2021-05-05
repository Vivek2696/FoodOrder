export interface Payment{
    cardType: string;
    cardVendor: string;
    cardNumber: string;
    securityCode: string;
    expirationDate: Date;
}