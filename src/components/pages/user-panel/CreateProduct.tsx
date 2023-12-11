import { Box, FormControl, FormLabel, Input, Flex, Heading, Button } from "@chakra-ui/react";

const CreateProduct = () => {
    return (
        <Box w={'100%'} h={'100vh'}  bg={'#f0f0f0'}>
            <Box pt={100} pb={50} w={'100%'} h={'80px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Heading as='h3' size='xl' color='#2c3e50'>Cadastrar novo produto</Heading>
            </Box>

            <Box w={'95%'} h={'auto'} margin={'0 auto'} bg={'#ffffff'} borderRadius={'15px'} boxShadow={'0 4px 8px rgba(0, 0, 0, 0.1)'} p={8} my={4}>
                
                <FormControl display={'flex'} alignItems={'center'} gap={4} flexWrap={'wrap'}>
                    <Flex w={'50%'} alignItems={'center'} gap={2}>
                        <FormLabel htmlFor='nome' mb='0' color='#34495e'>Nome</FormLabel>
                        <Input  id='nome' type='text' bg={'#ffffff'} borderColor={'#e0e0e0'}/>
                    </Flex>
                    <Flex w={'20%'} alignItems={'center'} gap={2}>
                        <FormLabel htmlFor='tag' mb='0' color='#34495e'>Tag</FormLabel>
                        <Input id='tag' type='text' bg={'#ffffff'} borderColor={'#e0e0e0'}/>
                    </Flex>
                    <Flex w={'25%'} alignItems={'center'} gap={2}>
                        <FormLabel htmlFor='type' mb='0' color='#34495e'>Tipo</FormLabel>
                        <Input id='type' type='text' bg={'#ffffff'} borderColor={'#e0e0e0'}/>
                    </Flex>
                </FormControl>

                <FormControl mt={5} display={'flex'} alignItems={'center'} gap={4} flexWrap={'wrap'}>
                    <Flex w={'25%'} alignItems={'center'} gap={2}>
                        <FormLabel htmlFor='Quantity' mb='0' color='#34495e'>Quantidade</FormLabel>
                        <Input id='Quantity' type='text' bg={'#ffffff'} borderColor={'#e0e0e0'}/>
                    </Flex>
                    <Flex w={'50%'} alignItems={'center'} gap={2}>
                        <FormLabel htmlFor='Description' mb='0' color='#34495e'>Descrição</FormLabel>
                        <Input id='Description' type='text' bg={'#ffffff'} borderColor={'#e0e0e0'}/>
                    </Flex>
                    <Flex w={'20%'} alignItems={'center'} gap={2}>
                        <FormLabel htmlFor='Value' mb='0' color='#34495e'>Valor</FormLabel>
                        <Input id='Value' type='text' bg={'#ffffff'} borderColor={'#e0e0e0'}/>
                    </Flex>
                </FormControl>

              <FormControl pt={'60px'}>
                <Button colorScheme="whatsapp">Cadastrar</Button>
                <Button m={1} colorScheme="red">Voltar</Button>
              </FormControl>
            </Box>
        </Box>
    );
};

export default CreateProduct;