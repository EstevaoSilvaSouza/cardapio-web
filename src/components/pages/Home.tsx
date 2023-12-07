import { Box, Button, Center, Container, Flex, Input, InputGroup, InputLeftAddon, Spacer, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from 'react-router-dom';
import CarouselIndex from "../cardstore/carousel";
import { useState } from "react";

interface ItensMenu {
  Name?:string;
  PageRoute?:string;
}

const SearchPage = ({func,statFunc}:{func:any,statFunc:any}) => (
  <Stack w={'80%'} margin={'0 auto'}>
    <InputGroup>
      <InputLeftAddon   children={'cardapio/loja/'}/>
      <Input onChange={statFunc} placeholder="busque sua loja" textAlign={'center'} fontWeight={'500'}/>
      <Button onClick={func} bg={'#6FCF97'} w={250} size={'md'} color={'white'}>
        Buscar
      </Button>
    </InputGroup>
  </Stack>
);

const Home = () => {
  const [search,SetSearch] = useState<string | null>(null);
  const nav = useNavigate();

  const MenuItens:ItensMenu[] = [
    {Name:'Inicio', PageRoute:'/'},
    {Name:'Rewards', PageRoute:'/'},
    {Name:'Nosso Cardapio', PageRoute:'/'},
    {Name:'Crie sua Conta/Login', PageRoute:'/'},
  ]

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(e.target.value);
  }

  const handleSearch = () => {
    nav(`/cardapio/loja/${search}`)
  }
  
  //logica aqui
  return (
   <Box   w={'100%'} h={'100vh'} bg={'#F2F2F2'} >
     
     <Box w={'100%'} bg={'#ffffff'} h={'auto'} justifyContent={'center'} alignItems={'center'} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)">
      <Center>
       <Flex rounded={4} w={'90%'} p={10} h={'100%'} bg={'#ffffff'} justifyContent={'center'} alignItems={'center'}>
        {MenuItens.map((e) => (
          <>
         <Center
  w="150px"
  fontWeight="600"
  borderRadius="8px"
  transition="all 0.3s"
  _hover={{
    color: '#ffffff',
    backgroundColor: '#2ecc71',
    transform: 'scale(1.05)',
  }}
>
  <Link
    to={'/'}
    textDecoration="none"
    color="#2c3e50"
    fontSize="16px"
    letterSpacing="0.5px"
    padding="8px"
    borderRadius="8px"
    display="block"
    textAlign="center"
    transition="color 0.3s"
    _hover={{ color: '#ffffff' }}
  >
    {e.Name}
  </Link>
</Center>

<Spacer />

<Spacer />
          </>
        ))}
      </Flex>
      </Center>
     </Box>
      
     <Box w={'90%'} h={'500px'} margin={'0 auto'}>
      <CarouselIndex data={["https://c1.wallpaperflare.com/preview/434/398/395/sign-windows-neon-urban.jpg","https://c0.wallpaperflare.com/preview/849/691/815/food-truck-illuminated-truck-vehicle.jpg", "https://c1.wallpaperflare.com/preview/751/331/688/automobile-automotive-bakery-car.jpg"]}/>
     </Box>

     <div style={{height:'30px'}}></div>
     
     <SearchPage func={handleSearch} statFunc={handleInput}/>

     <div style={{height:'30px'}}></div>
     
     <Box bg={'#6FCF97'} w={'90%'} h={'250px'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h3 style={{fontWeight:'bold', color: '#ffffff'}}>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</h3>
     </Box>

     <div style={{height:'30px'}}></div>

     <Box bg={'#6FCF97'} w={'90%'} h={'390px'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
       <Box w={'50%'} h={'390px'}>
         <img style={{ width:'100%',height:'390px'}} src="https://c4.wallpaperflare.com/wallpaper/843/404/899/night-long-exposure-street-street-light-wallpaper-preview.jpg"/>
       </Box>
       <Box w={'50%'} pl={10}>
        <h3 style={{fontWeight:'bold', color: '#ffffff'}}>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</h3>
       </Box>
     </Box>

     <div style={{height:'30px'}}></div>

     <Box bg={'#6FCF97'} w={'90%'} h={'390px'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
       <Box w={'50%'} pl={10}>
        <h3 style={{fontWeight:'bold', color: '#ffffff'}}>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</h3>
       </Box>

       <Box w={'50%'} h={'390px'}>
         <img style={{ width:'100%',height:'390px'}} src="https://c1.wallpaperflare.com/preview/751/331/688/automobile-automotive-bakery-car.jpg"/>
       </Box>
     </Box>

     <div style={{height:'30px'}}></div>
    </Box>
  );
}

export default Home;