import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CardItemMenu, CardMenuName, LinkItem } from "../../style/Panel-user";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth/AuthContexnt";
import { HomeOutlined, MoneyCollectOutlined, SettingOutlined, ShopOutlined, ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";


const Panel  = ({children}:{children:React.ReactNode}) => {

    const {Data} = useContext(AuthContext);
    
    return (

        <Box display={'flex'} w={'100%'}  h={'94vh'} bg={'#FFFFFF'}>
           
            <Flex  position={'fixed'}  w={'20%'} h={'100vh'} bg={'#F2F2F2'} display={'flex'} flexDirection={'column'} style={{borderRight: '1px solid #CCCCCC' }}>
                
                <CardMenuName>
                    <p>Loja do - {Data?.data}</p>
                    <h1>Ativo</h1>
                 
                </CardMenuName>

                <Box   mt={10} display={'flex'} flexDirection={'column'} >
                   
                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'home'}><HomeOutlined style={{marginRight:'10px'}}/> Inicio</LinkItem>
                    </CardItemMenu>
                
                    <CardItemMenu as={Link} to={'list_product'}>
                    <LinkItem to={'list_product'}><ShopOutlined style={{marginRight:'10px'}}/> Produtos</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}><ShoppingCartOutlined style={{marginRight:'10px'}}/> Pedidos</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}><StarOutlined style={{marginRight:'10px'}}/> Avaliações</LinkItem>
                    </CardItemMenu>

                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}><MoneyCollectOutlined style={{marginRight:'10px'}}/>Financeiro</LinkItem>
                    </CardItemMenu>
                    
                    <CardItemMenu as={Link} to={'home'}>
                    <LinkItem to={'/'}><SettingOutlined style={{marginRight:'10px'}}/> Configuração</LinkItem>
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