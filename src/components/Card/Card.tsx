import { Box } from '@chakra-ui/react';
  
export const Card = ({children}: any) => {

    return(
      <div>
        <Box minHeight='100vh' backgroundColor='#5b44a6' padding='25px'>
          {children}
        </Box>
      </div>
    )
  }