interface IRegisterDTO {
    email: string
    fullName: string
    password: string
}

interface IRegisterResponseDTO {
    token: string
}


export type {IRegisterDTO, IRegisterResponseDTO}