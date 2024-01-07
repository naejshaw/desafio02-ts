import { login } from "./login"

describe('soma', () =>{
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo ao DIO Bank')
    })
})