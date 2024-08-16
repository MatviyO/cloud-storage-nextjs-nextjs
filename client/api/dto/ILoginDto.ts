interface ILoginDTO {
    email: string
    password: string
}

interface ILoginResponseDTO {
    token: string
}


export type {ILoginDTO, ILoginResponseDTO}