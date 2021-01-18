export const AUTO_CREATE = "AUTO_CREATE";
export const AUTO_GET = "AUTO_GET";

export type AutoType = {
    id?: number
    email: string
    name: string,
    purchase_price: string,
    auto_make: string,
    auto_model: string,
    yearly_income: string,
    credit_score: number,
    message?: string
}

export type GetAutoData = {
    email: string
}

// Auto State Type From Store
export type AutoStateType = {
    auto: AutoType[]
}