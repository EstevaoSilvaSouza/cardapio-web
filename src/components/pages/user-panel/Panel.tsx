import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CardItemMenu, CardMenuName, LinkItem } from "../../style/Panel-user";
import { useState } from "react";



const BoxItens = () => (
    <>
        <h1>Um item aqui</h1>
    </>
)


const Panel  = ({children}:{children:React.ReactNode}) => {

    return (

        <Box display={'flex'} w={'100%'}  h={'94vh'} bg={'#FFFFFF'}>
           
            <Flex w={'20%'} h={'100vh'} bg={'#F2F2F2'} display={'flex'} flexDirection={'column'} style={{borderRight: '1px solid #CCCCCC' }}>
                
                <CardMenuName>
                    <p>Loja do - Jorginho Kibana</p>
                    <h1>Ativo</h1>
                 
                </CardMenuName>

                <Box mt={10} display={'flex'} flexDirection={'column'} >
                   
                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'home'}>Inicio</LinkItem>
                    </CardItemMenu>
                
                    <CardItemMenu as={Link} to={'create_product'}>
                    <LinkItem to={'create_product'}>Produtos</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}>Pedidos</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}>Avaliações</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}>Financeiro</LinkItem>
                    </CardItemMenu>
                    
                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}>Configuração</LinkItem>
                    </CardItemMenu>

                </Box>
              
               
            </Flex>


            <Box w={'90%'} bg={'#FFFFFF'}>
                    {children}
            </Box>

        </Box>
    )
}


export default Panel;