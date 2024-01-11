import { Box } from '@chakra-ui/layout'
import {Footer} from '../Footer/Footer'
import {Header} from '../Header/Header'
export const Layout = ({children}: any) => {
    return (
        <Box minHeight='100vh' backgroundColor='#5b44a6'>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}