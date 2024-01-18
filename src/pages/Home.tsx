import { Box, Center, Input, Spinner } from "@chakra-ui/react"
import { Card } from "../components/Card/Card"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { Botao } from "../components/Botao/Botao"
import { login } from "../services/login/login"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext/AppContext"
import { changeLocalStorage } from "../services/storage/storage"

interface UserData{
    email: string
    password: string
    name: string
  }
  

const Home = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const [email, setEmail] = useState<string>('')
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
      const loggedIn = await login(email)

      if(!loggedIn){
        return alert('Email inválido!')
      } 

      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      navigate('/conta/1')
      
    }
    

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
      }

      getData()
    }, [])

    console.log(userData)
    return(
        <Box>
            {
                userData === null || userData === undefined ? 
                <Center><Spinner size='xl' color='white' /></Center> :
                <Card>
                  <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
                    <Center>
                      <h1>Faça Login</h1>
                    </Center>
                    <Input placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Input placeholder='password' />
                    <Center>
                      <Botao title='Entrar' onClick={() => validateUser(email)} />
                    </Center>
                  </Box>
                </Card>
            }
        </Box>
    )
}

export default Home