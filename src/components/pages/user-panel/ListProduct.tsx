import {
    Box,
    Input,
    Button,
    Heading,
    Card,
    CardBody,
    Image,
    Divider,
    Stack,
    Text,
    CardFooter,
    ButtonGroup,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import BreadCrumb from "../../layout/breadcrumb";
  
  const CardItem = () => (
    <>
      <Card
        maxW="sm"
        m={2}
        borderRadius="lg"
        boxShadow="xl"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.02)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Sofá duplo verde com pernas de madeira"
          borderTopRadius="lg"
        />
        <CardBody>
          <Stack spacing={2}>
            <Heading size="md">Sofá para Sala de Estar</Heading>
            <Text color="gray.600" fontSize="sm">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing={2}>
            <Button
              variant="solid"
              colorScheme="red"
              borderRadius="md"
              _hover={{ bg: "#EB2937" }}
            >
              Comprar Agora
            </Button>
            <Button
              variant="ghost"
              colorScheme="red"
              borderRadius="md"
              _hover={{ bg: "#EB2937" }}
            >
              Adicionar ao Carrinho
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
  
  const ListProduct = () => {
    const [httpRoute, setHttpRoute] = useState<string[] | null>([]);
  
    useEffect(() => {
      const httpGetRoute = () => {
        const { pathname } = window.location;
        const arrayIndx = pathname.split("/");
        if (arrayIndx.length >= 1) {
          const removeIndex0 = arrayIndx.splice(1);
          setHttpRoute(removeIndex0);
        }
      };
      httpGetRoute();
    }, []);
  
    return (
      <>
        <Box
          w="100%"
          h="100%"
          bg="#F2F2F2"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
        >
          <Box
            pt={6}
            pb={4}
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h3" size="lg" color="#2E2E2E">
              Lista de Produtos
            </Heading>
          </Box>
  
          <BreadCrumb items={httpRoute} />
          <Box mb={6} w="100%" display="flex" justifyContent="center" alignItems="center">
          <Input
            placeholder="Buscar"
            w="70%"
            borderColor="#EB2937"
          />
          <Button colorScheme="red" ml={4}>
            Buscar
          </Button>
        </Box>
  
          <Box
            w="95%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <CardItem />
            <CardItem />
            {/* Adicione mais CardItems conforme necessário */}
          </Box>
        </Box>
      </>
    );
  };
  
  export default ListProduct;