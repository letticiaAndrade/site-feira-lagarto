import { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Footer, Nav } from "../components";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";

import Image1 from "../assets/imageContact.jpg";

export function Contact() {

    const form = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        sendForm('service_e26s9fa', 'template_nqufphh', form.current, { 
            publicKey: "wVxWhHkhFWpawfTaB"
        })
        .then(() => {
            alert("Mensagem enviada com sucesso!");
        }, (error) => {
            alert("Ocorreu um erro, tente novamente.");
            console.log(error.text);
        });
    };

    const year = new Date().getFullYear();

    return (
        <Flex
            w="100%"
            flexDirection="column"
            h="100%"
            bgGradient="linear(to-b, primary.100, primary.400)"
            alignItems="center"
            p={4}
        >
            <Nav />
            <Flex
                justify="center"
                alignItems="center"
                flexDirection={{ base: "column", lg: "row" }}
                w="full"
                maxW="1200px"
                px={{ base: 4, md: 8 }}
            >
                <Flex flexDirection="column" w="full" maxW={{ lg: "600px" }} p={4}>
                    <Heading
                        fontSize={{ base: 24, sm: 32, md: 40, lg: 48 }}
                        fontWeight="bold"
                        textAlign={{ base: "center", lg: "left" }}
                        mb={4}
                    >
                        Entre em contato
                    </Heading>
                    <Box>
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={errors.name} mb={4}>
                                <FormLabel htmlFor="name">Nome</FormLabel>
                                <Input
                                    borderColor="dark.400"
                                    variant="outline"
                                    id="name"
                                    placeholder="Seu Nome"
                                    {...register("name", { required: "Nome é obrigatório" })}
                                />
                                {errors.name && <Text color="red.500">{errors.name.message}</Text>}
                            </FormControl>

                            <FormControl isInvalid={errors.email} mb={4}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    variant="outline"
                                    borderColor="dark.400"
                                    id="email"
                                    type="email"
                                    placeholder="Seu Email"
                                    {...register("email", {
                                        required: "Email é obrigatório",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Email inválido"
                                        }
                                    })}
                                />
                                {errors.email && <Text color="red.500">{errors.email.message}</Text>}
                            </FormControl>

                            <FormControl isInvalid={errors.message} mb={4}>
                                <FormLabel htmlFor="message">Mensagem</FormLabel>
                                <Textarea
                                    borderColor="dark.400"
                                    variant="outline"
                                    id="message"
                                    placeholder="Escreva a sua mensagem..."
                                    {...register("message", { required: "Mensagem é obrigatória" })}
                                />
                                {errors.message && <Text color="red.500">{errors.message.message}</Text>}
                            </FormControl>

                            <FormControl isInvalid={errors.acceptTerms} mb={4}>
                                <Checkbox
                                    borderColor="dark.400"
                                    id="acceptTerms"
                                    {...register("acceptTerms", { required: "Você deve aceitar os termos para enviar os dados" })}
                                >
                                    Eu aceito em enviar meus dados
                                </Checkbox>
                                {errors.acceptTerms && <Text color="red.500">{errors.acceptTerms.message}</Text>}
                            </FormControl>

                            <Button type="submit" colorScheme="dark" w="full" mt={4}>
                                Enviar
                            </Button>
                        </form>
                    </Box>
                </Flex>

                <Image
                    src={Image1}
                    w={{ base: "90%", sm: "70%", md: "50%", lg: "45%" }}
                    h="auto"
                    mt={{ base: 6, lg: 0 }}
                    borderRadius="lg"
                />
            </Flex>

            <Footer />
            <Text mt={4} fontSize="sm">© {year} Instituto Federal de Sergipe. All rights reserved.</Text>
        </Flex>
    );
}
