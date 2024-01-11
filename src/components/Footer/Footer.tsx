import { Box, Center, Text } from "@chakra-ui/layout"

export const Footer = () => {
    return (
        <Box backgroundColor='#5b66a6' color='#FFFFFF' padding='5px' bottom={0} position="absolute" width='100%'>
            <Center>
                <Text fontSize='xs'>Copyright © 2024 All Rights Reserved</Text>
            </Center>
        </Box>
    )
}