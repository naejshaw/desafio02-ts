import { Box, Text } from "@chakra-ui/layout"

interface ICardInfo{
    mainContent: string
    content: string
    title: string
}
export const CardInfo = ({mainContent, content, title}: ICardInfo) => {
    return(
        <Box backgroundColor='white' minHeight={120} padding={8} borderRadius={25}>
            <Text fontSize='2xl' fontWeight='bold'>{title}</Text>
            <Text fontSize='xl'>{mainContent}</Text>
            <Text fontSize='xl'>{content}</Text>
        </Box>
    )
}