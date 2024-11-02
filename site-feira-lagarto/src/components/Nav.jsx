import { useLocation } from 'react-router-dom';
import { CaretRight, List } from "@phosphor-icons/react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import Logo from '../assets/logo_site_sem_fundo.png';

export function Nav() {

  const location = useLocation();
  const currentPath = location.pathname;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Flex
        borderBottomWidth={2}
        px={{ base: 4, md: 20 }}
        borderBottomColor="dark.100"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" color="primary.400" fontWeight="bold" fontSize="xl">
          <Image src={Logo} objectFit="contain" w={90} h={90} />
        </Link>

        <Flex display={{ base: "none", lg: "flex" }} alignItems="center">
          <Breadcrumb spacing="8px" separator={<CaretRight color="primary.400" />}>
            <BreadcrumbItem isCurrentPage={currentPath === "/"}>
              <BreadcrumbLink href="/" color="primary.400">Início</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink color="primary.400">
                <Menu>
                  <MenuButton>
                    Lojistas
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href="/lojistas/conveniencia">Conveniência</MenuItem>
                    <MenuItem as={Link} href="/lojistas/supermercados">Supermercados</MenuItem>
                    <MenuItem as={Link} href="/lojistas/modaEvestuario">Moda e Vestuário</MenuItem>
                    <MenuItem as={Link} href="/lojistas/moveisEdecoracao">Móveis e Decoração</MenuItem>
                    <MenuItem as={Link} href="/lojistas/oficinasMecanicas">Oficinas e Mecânicas</MenuItem>
                  </MenuList>
                </Menu>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage={currentPath === "/culture"}>
              <BreadcrumbLink color="primary.400" href="/culture">Cultura</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage={currentPath === "/services"}>
              <BreadcrumbLink color="primary.400" href="/services">Serviços</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage={currentPath === "/contact"}>
              <BreadcrumbLink href="/contact" color="primary.400">Contato</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

        <IconButton
          display={{ base: "flex", lg: "none" }}
          icon={<List size={24} />}
          onClick={onOpen}
          variant="ghost"
          aria-label="Abrir menu"
        />

        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={8}>
              <Flex flexDirection="column">
                <Link href="/" color="primary.400" mb={4} onClick={onClose}>Início</Link>
                <Menu>
                  <MenuButton as={Link} color="primary.400" mb={4}>
                    Lojistas
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href="/lojistas/conveniencia" onClick={onClose}>Conveniência</MenuItem>
                    <MenuItem as={Link} href="/lojistas/supermercados" onClick={onClose}>Supermercados</MenuItem>
                    <MenuItem as={Link} href="/lojistas/modaEvestuario" onClick={onClose}>Moda e Vestuário</MenuItem>
                    <MenuItem as={Link} href="/lojistas/moveisEdecoracao" onClick={onClose}>Móveis e Decoração</MenuItem>
                    <MenuItem as={Link} href="/lojistas/oficinasMecanicas" onClick={onClose}>Oficinas e Mecânicas</MenuItem>
                  </MenuList>
                </Menu>
                <Link href="/culture" color="primary.400" mb={4} onClick={onClose}>Cultura</Link>
                <Link href="/services" color="primary.400" mb={4} onClick={onClose}>Serviços</Link>
                <Link href="/contact" color="primary.400" mb={4} onClick={onClose}>Contato</Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
