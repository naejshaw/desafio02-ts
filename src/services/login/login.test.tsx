import { login } from "./login"

// const mockSetLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('soma', () =>{

    const mockEmail = 'jeanjfra@gmail.com'

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('mockEmail')
        expect(response).toBeFalsy()
        // expect(mockNavigate).not.toHaveBeenCalled()
    })
})