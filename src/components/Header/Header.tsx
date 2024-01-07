import { Box, Heading } from '@chakra-ui/layout'
export const Header = () => {
    return (
        <Box>
            <Heading as='h2' size='3xl' noOfLines={1} textAlign='center' backgroundColor='#5b44a6' color='#FFFFFF'>
                Dio Bank
            </Heading>
            <Heading as='h4' size='md' noOfLines={1} textAlign='center' backgroundColor='#5b44a6' color='#FFFFFF'>
                o caminho mais fácil nem sempre é o melhor.
            </Heading>
        </Box>
    )
}