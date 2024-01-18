import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage/storage'
export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()
    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }
    return (
        <Flex backgroundColor='#5b66a6' color='#FFFFFF' padding='5px 25px 25px 25px'>
            <Box>
                <Heading as='h2' size='3xl' noOfLines={1} textAlign='center'>
                    Dio Bank
                </Heading>
                <Heading as='h4' size='md' noOfLines={1} textAlign='center'>
                    o caminho mais fácil nem sempre é o melhor.
                </Heading>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>Sair</Button>
                    </>
                )
            }
        </Flex>
    )
}