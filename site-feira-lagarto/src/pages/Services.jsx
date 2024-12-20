import { Flex } from "@chakra-ui/react";
import { Nav } from "../components";

export function Service() {
    return (
        <Flex w="100%" flexDirection="column" h="100%" bgGradient='linear(to-b, primary.100, primary.400)' alignItems="center">
            <Nav />

        </Flex>
    )
}