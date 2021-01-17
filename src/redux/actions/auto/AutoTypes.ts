export const AUTO_CREATE = "AUTO_CREATE";

export type AutoType = {
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