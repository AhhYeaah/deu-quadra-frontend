export type LoginOutput = {
    accessToken: string,
    refreshToken: string,
}

export type GetCourtsOutput = {
    nome: string,
    preco: number,
    descricao: string,
    idQuadra:number,
    imagemUrl: string,
    Empresa: {
        nome: string,
        idEmpresa: number,
        rua: string,
        bairro: string,
        numero: string,
        lat: number,
        lon: number
    }
  }