import { EnterOutlined } from "@ant-design/icons";
import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateStore = () => {

    const {search } = useLocation();
    const params = new URLSearchParams(search);
    const token = params.get('token');
    const nav = useNavigate();

    useEffect(() => {
        if(token === null){
            nav('/')
        }
        else {
            console.log(token);
        }
    },[token])
    return (
        <Container
            w='100%'
            h={'100vh'}
            bg={'#f7f7f7'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            boxShadow="md"
            borderRadius="md"
            p={8}
        >
            <Text fontSize='4xl' color='#EB2937' fontWeight='bold' mb={6}>
                Crie uma Nova Loja
            </Text>

            <Input
                name="storeName"
                type="text"
                placeholder="Nome da Loja"
                variant="filled"
                mb={4}
                focusBorderColor="#EB2937"
            />

            <Input
                name="storeLocation"
                type="text"
                placeholder="Localização da Loja"
                variant="filled"
                mb={4}
                focusBorderColor="#EB2937"
            />

            <Button
                w="100%"
                bg="#EB2937"
                color="#fff"
                _hover={{ bg: "#BF1D2E" }}
                mt={4}
                borderRadius='md'
            >
                <EnterOutlined style={{ marginRight: '10px' }} /> Criar Loja
            </Button>      
                  <Button
                w="100%"
                bg="#EB2937"
                color="#fff"
                _hover={{ bg: "#BF1D2E" }}
                mt={4}
                borderRadius='md'
            >
                <EnterOutlined style={{ marginRight: '10px' }} /> Skip
            </Button>
        </Container>
    );
};

export default CreateStore;