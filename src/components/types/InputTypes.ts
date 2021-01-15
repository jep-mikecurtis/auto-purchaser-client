export type InputType = {
    label: string,
    name: string,
    cb?: any,
    minNum?: number,
    maxNum?: number
}

type InputClassType = {
    formGroup: string,
    label: string,
    input: string
}

export const InputClasses: InputClassType = {
    formGroup: 'form-group flex flex-col space-y-2 flex-1',
    label: '',
    input: 'rounded shadow py-1 px-2 text-gray-800 bg-gray-100 text-sm',
}