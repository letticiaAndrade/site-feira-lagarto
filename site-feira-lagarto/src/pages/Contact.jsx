import { Flex, Heading, Text } from "@chakra-ui/react";
import { Footer, Nav } from "../components";

export function Contact () {
    return(
        <Flex w="full" flexDirection="column" h="full" bgGradient='linear(to-b, primary.100, primary.400)' alignItems="center">

        <Nav/>
        <Flex border="1px solid red" alignItems="center" flexDirection="column" w={{base: 300, sm: 500, md:800, lg:1000 }}>
        <Heading fontSize={{base:18, sm:24, md:28, lg: 32}} fontWeight="bold">Entre em contato</Heading>
        </Flex>

        
        <Footer/>
        </Flex>
    )
}