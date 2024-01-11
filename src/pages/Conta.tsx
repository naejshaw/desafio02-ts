import { Center, SimpleGrid } from "@chakra-ui/layout"
import { CardInfo } from "../components/CardInfo/CardInfo"
import { api } from "../api"
import { Spinner } from "@chakra-ui/react"
import { useState, useEffect, useContext } from "react"
import { format } from "date-fns"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext/AppContext"

interface UserData{
    email: string
    password: string
    name: string
    balance: number
    id: string
  }

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const actualData = new Date()
    const {id} = useParams()
    const navigate = useNavigate()
    const {isLoggedIn} = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
      }

      getData()
    }, [])

    

    if(userData && id !== userData.id){
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={3} spacing={4} paddingTop={16}>
                {
                    userData === undefined || userData === null ? 
                    (
                        <Center>
                            <Spinner size='xl' color="white" />
                        </Center>
                    ) :
                    (<><CardInfo title="Informações de acesso" mainContent={`Bem vindo ${userData?.name}`} content={`Acesso em: ${format(actualData, "dd/MM/yyyy HH:mm")}`} />
                    <CardInfo title="Informações de usuário" mainContent={`Email: ${userData?.email}`} content="" />
                    <CardInfo title="Informações de conta" mainContent={`Saldo Disponível: R$${userData?.balance}`} content="" /></>)
                }
                
            </SimpleGrid>
        </Center>
    )
}

export default Conta
