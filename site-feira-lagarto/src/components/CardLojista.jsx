/* eslint-disable react/prop-types */
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function CardLojistas({ image, title, description, number }) {

    const cardWidth = useBreakpointValue({ base: "100%", md: "631px" });
    const cardHeight = useBreakpointValue({ base: "auto", md: "372px" });

    return (
        <Flex
            flexDirection="column"
            borderWidth={1}
            borderColor="dark.400"
            m={4}
            h={cardHeight}
            w={cardWidth}
            p={6}
        >
            <Stack flexDirection="column" alignItems="center">
                <Image src={image} boxSize={32} rounded="full" />
                <Heading fontSize={{ base: "lg", md: "xl" }}>{title}</Heading>
                <Text mb={3} textAlign="center" fontSize={{ base: "sm", md: "md" }}>
                    {description}
                </Text>
            </Stack>
            <Button 
                variant="outline" 
                borderColor="dark.400" 
                onClick={() => window.open(`https://wa.me/5575998510396`, '_blank')}
                mt={4}
            >
                Entrar em contato
            </Button>
        </Flex>
    );
}
