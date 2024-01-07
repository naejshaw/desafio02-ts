import {  
    Input,
    Box,
    Center,
  } from '@chakra-ui/react';
  import { Botao } from '../Botao/Botao';
import { login } from '../../services/login/login';
  
  export const Card = () => {
    return(
      <div>
        <Box minHeight='100vh' backgroundColor='#5b44a6' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça Login</h1>
          </Center>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Center>
            <Botao title='Entrar' event={login} />
          </Center>
        </Box>
      </Box>
      </div>
    )
  }