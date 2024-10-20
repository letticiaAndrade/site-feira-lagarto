import { useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { Flex, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

import Image1 from "../assets/Carrosel1.jpeg";
import Image2 from "../assets/Carrosel2.jpg";
import Image3 from "../assets/Carrosel3.jpg";

export function Carrosel() {
    const cards = [
        {
            id: 1,
            content: Image1,
            title: "Abril - Lagarto Folia",
            subtitle: "Este evento traz toda a energia e animação do carnaval, reunindo foliões de diversas regiões para celebrar a música e a cultura em um ambiente de festa e alegria."
        },
        {
            id: 2,
            content: Image2,
            title: "Maio - Silibrina",
            subtitle: "O Silibrina é uma tradicional festa junina de Lagarto, celebrada com quadrilhas, forró e comidas típicas. Com trajes tradicionais e decoração festiva, o evento reúne a comunidade para manter viva a cultura nordestina."
        },
        {
            id: 3,
            content: Image3,
            title: "Junho - Festa da Mandioca",
            subtitle: "Com exposições, competições gastronômicas e apresentações culturais, a festa promove o uso da mandioca em diversas receitas e produtos, destacando seu papel central na culinária local."
        },
        {
            id: 4,
            content: Image3,
            title: "Julho - Festa de São João",
            subtitle: "Uma celebração popular que inclui danças, comidas típicas e fogueiras, reunindo amigos e familiares para festejar."
        },
        {
            id: 5,
            content: Image3,
            title: "Agosto - Festa da Colheita",
            subtitle: "Comemorações em honra à colheita, repleta de comidas típicas, danças e alegria."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % cards.length 
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + cards.length) % cards.length 
        );
    };

    const displayedCards = [
        cards[currentIndex],
        cards[(currentIndex + 1) % cards.length],
        cards[(currentIndex + 2) % cards.length],
    ];

    return (
        <Flex w="full" justifyContent="center" alignItems="center" flexDirection="column">
            <Flex w="full" justifyContent="space-between" alignItems="center" px={10}>
            <ArrowCircleLeft cursor="pointer" size={32} weight="thin" onClick={prevSlide}/>

                <HStack spacing={4} justifyContent="center">
                    {displayedCards.map((card) => (
                        <Flex flexDirection="column" alignItems="center" key={card.id}>
                            <Image src={card.content} boxSize={256} />
                            <Stack mt={4} alignItems="center">
                                <Heading fontSize="lg">{card.title}</Heading>
                                <Text maxW={300} textAlign="center">{card.subtitle}</Text>
                            </Stack>
                        </Flex>
                    ))}
                </HStack>

                <ArrowCircleRight cursor="pointer" size={32} weight="thin" onClick={nextSlide}/>
            </Flex>
        </Flex>
    );
}
