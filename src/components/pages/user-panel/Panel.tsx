import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CardItemMenu, CardMenuName, LinkItem } from "../../style/Panel-user";

const Panel  = ({children}:{children:React.ReactNode}) => {

    return (

        <Box display={'flex'} w={'100%'}  h={'94vh'} bg={'#FFFFFF'}>
           
            <Flex  position={'fixed'}  w={'20%'} h={'100vh'} bg={'#F2F2F2'} display={'flex'} flexDirection={'column'} style={{borderRight: '1px solid #CCCCCC' }}>
                
                <CardMenuName>
                    <p>Loja do - Jorginho Kibana</p>
                    <h1>Ativo</h1>
                 
                </CardMenuName>

                <Box   mt={10} display={'flex'} flexDirection={'column'} >
                   
                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'home'}>Inicio</LinkItem>
                    </CardItemMenu>
                
                    <CardItemMenu as={Link} to={'create_product'}>
                    <LinkItem to={'create_product'}>Produtos</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'list_product'}>
                    <LinkItem to={'list_product'}>Lista Produtos - BETA</LinkItem>
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


            <Box ml={'20%'} w={'90%'} bg={'#FFFFFF'}>
                    {children}
            </Box>

        </Box>
    )
}


export default Panel;