import { useRef } from "react";
import {sendForm} from "@emailjs/browser"
import { useForm } from "react-hook-form";
import { Footer, Nav } from "../components";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";

import Image1 from "../assets/imageContact.jpg";

export function Contact () {

    const form = useRef();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        // Enviar dados através do EmailJS
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


    return(
        <Flex w="100%" flexDirection="column" h="100%" bgGradient='linear(to-b, primary.100, primary.400)' alignItems="center">

            <Nav/>
            <Flex justify="space-between"
                alignItems="center"
                flexDirection={{base:"column", sm: "column", md: "column", lg: "row"}} 
                w={{base: 300, sm: 500, md:800, lg:1730 }}>

                <Flex flexDirection="column" w='full'>
                    <Heading fontSize={{base:20, sm:28, md:32, lg: 48}} fontWeight="bold">Entre em contato</Heading>
                    <Box mr={20}>

                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={errors.name} mb={4}>
                                <FormLabel htmlFor="name">Nome</FormLabel>
                                <Input
                                    borderColor="dark.400"
                                    variant='outline' 
                                    id="name"
                                    placeholder="Seu Nome"
                                    {...register("name", { required: "Nome é obrigatório" })}
                                />
                                {errors.name && <Text color="red.500">{errors.name.message}</Text>}
                            </FormControl>

                            <FormControl isInvalid={errors.email} mb={4}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    variant='outline'
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
                                    variant='outline'
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

                            <Button type="submit" colorScheme="dark">Enviar</Button>
                        </form>
                    </Box>
                </Flex>

                <Image src={Image1} w={616} h={734} my={14}/>
            </Flex>

            <Footer/>

        <Text>© {year} Instituto Federal de Sergipe. All rights reserved.</Text>

        </Flex>
    )
}
