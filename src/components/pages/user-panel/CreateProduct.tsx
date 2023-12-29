import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Heading,
    Button,
    VStack,
    useToast,
    InputRightElement,
    InputGroup,
    Image
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import BreadCrumb from "../../layout/breadcrumb"; 
import { BaseApi } from "../../../context/BaseApi";
  import { useNavigate } from "react-router-dom";


  const CreateProduct = () => {
    const [httpRoute, setHttpRoute] = useState<string[] | null>([]);
    const [payload,setPayload] = useState({});
    const nav = useNavigate();
    const toast = useToast();
    const toastLoagin = (title:string,message:string,returncode:number,status: "info" | "warning" | "success" | "error" | "loading" | undefined) => {
      toast({
        title: title,
        description: ` ${message} ${returncode === 5 ? '' : `StatusReturn: ${returncode }`}`,
        status: status,
        duration: 3000,
        position:'top-right',
        isClosable: true,
      })
    }
    useEffect(() => {
      const httpGetRoute = () => {
        const { pathname } = window.location;
        const arrayIndx = pathname.split('/');
        if (arrayIndx.length >= 1) {
          const removeIndex0 = arrayIndx.splice(1);
          setHttpRoute(removeIndex0);
        }
      };
      httpGetRoute();
    }, []);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setPayload((prev) => ({...prev,[e.target.name]:e.target.value}));
      console.log(payload)
    }

    const submitPayload = async () => {
      const {data} = await BaseApi.post('store/currentstore/newProduct',payload,{withCredentials:true});
      if(data){
        toastLoagin('Sucesso na criação','Produto cadastrado com sucesso!',30 ,'success')
        nav('painel/list_product');
      }
    }


return (
  <Box w="100%" h="100vh" bg="#F2F2F2" fontFamily="Arial, sans-serif">
    <Box
      py={6}
      textAlign="center"
      bg="#EB2937"
      color="white"
      borderBottomRadius="15px"
    >
      <Heading as="h3" size="xl">
        Cadastrar novo produto
      </Heading>
    </Box>
    <BreadCrumb items={httpRoute} />
    <Box
      w="90%"
      mx="auto"
      bg="white"
      borderRadius="15px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      p={8}
      mt={8}
    >
      <VStack align="stretch" spacing={6}>
        <FormControl>
          <FormLabel htmlFor="nome" mb="1" color="#34495e">
            Nome
          </FormLabel>
          <Input
            id="nome"
            name="Name"
            onChange={handleInputChange}
            type="text"
            bg="white"
            border="1px solid #ccc"
            _hover={{ borderColor: "#aaa", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
          />
        </FormControl>

        <Flex justify="space-between">
          <FormControl flex="1" mr={2}>
            <FormLabel htmlFor="tag" mb="1" color="#34495e">
              Tag
            </FormLabel>
            <Input
              id="tag"
              type="text"
              name="Tag"
              onChange={handleInputChange}
              bg="white"
              border="1px solid #ccc"
              _hover={{ borderColor: "#aaa", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
            />
          </FormControl>

          <FormControl flex="2" ml={2}>
            <FormLabel htmlFor="type" mb="1" color="#34495e">
              Tipo
            </FormLabel>
            <Input
              id="type"
              type="text"
              name="Type"
              onChange={handleInputChange}
              bg="white"
              border="1px solid #ccc"
              _hover={{ borderColor: "#aaa", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
            />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel htmlFor="Quantity" mb="1" color="#34495e">
            Quantidade
          </FormLabel>
          <Input
            id="Quantity"
            type="number"
            name="Quantity"
            onChange={handleInputChange}
            bg="white"
            border="1px solid #ccc"
            _hover={{ borderColor: "#aaa", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Description" mb="1" color="#34495e">
            Descrição
          </FormLabel>
          <Input
            id="Description"
            type="text"
            name="Description"
            onChange={handleInputChange}
            bg="white"
            border="1px solid #ccc"
            _hover={{ borderColor: "#aaa", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Value" mb="1" color="#34495e">
            Valor
          </FormLabel>
          <Input
            id="Value"
            type="number"
            name="Value"
            onChange={handleInputChange}
            bg="white"
            border="1px solid #ccc"
            _hover={{ borderColor: "#aaa", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="photo" mb="1" color="#34495e">
            Foto
          </FormLabel>
          <InputGroup>
            <Input type="file" id="photo" accept="image/*" display="none" />
            <label htmlFor="photo">
              <Box
                as="span"
                cursor="pointer"
                borderRadius="md"
                borderWidth="1px"
                borderColor="#EB2937"
                p={2}
                display="flex"
                alignItems="center"
                _hover={{ borderColor: "#EB2937" }}
              >
                Selecionar Foto
              </Box>
            </label>
            <InputRightElement width="6rem">
              <Box
                w="100%"
                h="100%"
                borderRadius="md"
                borderWidth="2px"
                borderColor="#EB2937"
                overflow="hidden"
              >
                <Image
                  src="#"
                  alt="Preview"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Flex justify="space-between">
          <Button onClick={submitPayload} colorScheme="red" w="48%" bg="#EB2937" color="white" transition="background-color 0.3s, color 0.3s">
            Cadastrar
          </Button>
          <Button onClick={() => nav('painel/list_product')} colorScheme="whatsapp" w="48%" bg="#25D366" color="white" transition="background-color 0.3s, color 0.3s">
            Voltar
          </Button>
        </Flex>
      </VStack>
    </Box>
  </Box>
)
}
  export default CreateProduct;
