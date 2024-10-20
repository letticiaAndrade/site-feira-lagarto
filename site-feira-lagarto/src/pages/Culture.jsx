import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Carrosel, Footer, Nav } from "../components";

export function Culture() {
    return(
        <Flex w="100%" flexDirection="column" h="100%" bgGradient='linear(to-b, primary.100, primary.400)' alignItems="center">
        <Nav/>
        <Stack spacing={5} alignItems="center">

        <Heading fontSize={{base:20, sm:28, md:32, lg: 48}} fontWeight="bold">CALENDÁRIO CULTURAL</Heading>

        <Text fontSize={{base:16, sm:18, md:20, lg: 24}}>Existem inúmeros eventos ao longo do na cidade de Lagarto que aquece a economia local</Text>

        <Heading fontSize={{base:16, sm:20, md:24, lg: 28}} mb={14}>VAMOS CONHECER ALGUNS DELES</Heading>

        <Carrosel/>

        </Stack>

        <Footer/>
        </Flex>
    )
}