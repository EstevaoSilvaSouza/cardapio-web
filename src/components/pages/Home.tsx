import { Box, Center, Container, Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselIndex from "../cardstore/carousel";

interface ItensMenu {
  Name?:string;
  PageRoute?:string;
}

const Home = () => {

  const MenuItens:ItensMenu[] = [
    {Name:'Inicio', PageRoute:'/'},
    {Name:'Rewards', PageRoute:'/'},
    {Name:'Nosso Cardapio', PageRoute:'/'},
    {Name:'Impacto Social', PageRoute:'/'},
  ]
  
  //logica aqui
  return (
   <Box w={'100%'} h={'100vh'} bg={'#FFFFFF'} >
     
     <Box w={'100%'} bg={'white'} h={'auto'} justifyContent={'center'} alignItems={'center'} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.228)">
      <Center>
       <Flex rounded={4} w={'90%'} p={10} h={'100%'} bg={'white'} justifyContent={'center'} alignItems={'center'}>
        {MenuItens.map((e) => (
          <>
           <Center w={'150px'} fontWeight={'400'}>
             <Link to={'/'}>{e.Name}</Link>
           </Center>
           <Spacer />
          </>
        ))}
    </Flex>
      </Center>
      </Box>
      
      <Box w={'90%'} h={'500px'} margin={'0 auto'}>
      <CarouselIndex data={[{k:'_@'},{k:'@@#_'}]}/>
      </Box>
     
      <div style={{height:'30px'}}></div>
     
      <Box bg={'#D4E9E2'} w={'90%'} h={'250px'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <h3 style={{fontWeight:'bold'}}>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</h3>
      </Box>

      <div style={{height:'30px'}}></div>

      <Box bg={'#D4E9E2'} w={'90%'} h={'390px'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box w={'50%'} h={'390px'}>
          <img style={{ width:'100%',height:'390px'}} src="https://www.starbucks.com.br/public/img/home/15170_SBUX_REW_BANNERS3MAIO_01.png"/>
        </Box>
        <Box w={'50%'} pl={10}>
        <h3 style={{fontWeight:'bold'}}>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</h3>
        </Box>
      </Box>

      <div style={{height:'30px'}}></div>

      <Box bg={'#D4E9E2'} w={'90%'} h={'390px'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box w={'50%'} pl={10}>
        <h3 style={{fontWeight:'bold'}}>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</h3>
        </Box>

        <Box w={'50%'} h={'390px'}>
          <img style={{ width:'100%',height:'390px'}} src="https://www.starbucks.com.br/public/img/home/15170_SBUX_REW_BANNERS3MAIO-02.png"/>
        </Box>
      </Box>

      <div style={{height:'30px'}}></div>
     </Box>
  )
}

export default Home