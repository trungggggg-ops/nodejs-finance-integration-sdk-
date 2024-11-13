export enum QRTypeReva {
    RAW = "RAW", 
    QR_RAW = "QR_RAW"
}

interface BodyCreateRevaOrderInterface
{
    fullname: string ,
    benefiary_account_name:string,
    product_code:string | null,
    distributor_order_number:string ,
    phone: string,
    email: string | null,
    address: string | null,
    final_amount: number,
    comment: string,
    bank_detail: boolean | null,
    qr_type : QRTypeReva | null ,
    end_date : string | null,
}

export default BodyCreateRevaOrderInterface;