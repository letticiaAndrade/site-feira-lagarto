import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function CardLojistas({image, title, description, number}) {
    
    return(
        <>
        <Flex flexDirection="column" borderWidth={1} borderColor="dark.400" m={4} h={372} w={631} p={12}>
            <Stack flexDirection="column" alignItems="center">

            <Image src={image} boxSize={32} rounded="full"/>
            <Heading>{title}</Heading>
            <Text mb={3} textAlign="center">{description}</Text>
            </Stack>
            <Button variant="outline" borderColor="dark.400" onClick={()=> window.open(`https://wa.me/5575998510396`, '_blank')}>Entrar em contato</Button>
        </Flex>
        </>
    )
}