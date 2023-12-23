import { Box, Button, Center, Flex, Input, InputGroup, InputLeftAddon, Spacer, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from 'react-router-dom';
import CarouselIndex from "../cardstore/carousel";
import { useState } from "react";
import styled from "styled-components";

interface ItensMenu {
  Name?:string;
  PageRoute?:string;
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding: 8px;
  border-radius: 8px;
  display: block;
  text-align: center;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }
`;


const SearchPage = ({func,statFunc}:{func:any,statFunc:any}) => (
  <Stack w={'50%'} margin={'0 auto'} paddingBottom={'20px'}>
    <InputGroup>
      <InputLeftAddon   children={'cardapio/loja/'}/>
      <Input bg={'#F2F2F2'} marginRight={3} onChange={statFunc} placeholder="busque sua loja" textAlign={'center'} fontWeight={'500'}/>
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
    {Name:'Crie sua Conta/Login', PageRoute:'/painel/login'},
  ]

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(e.target.value);
  }

  const handleSearch = () => {
    nav(`/cardapio/loja/${search}`)
  }
  
  //logica aqui
  return (
   <Box   w={'100%'} h={'100vh'} bg={'#ffffff'}  >
     
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
<StyledLink to={String(e.PageRoute)}>
  {e.Name}
</StyledLink>
</Center>

<Spacer />

<Spacer />
          </>
        ))}
      </Flex>
      </Center>
     </Box>
      
     <Box w={'90%'} h={'500px'} margin={'0 auto'} >
      <CarouselIndex key={'ok'} data={["https://static.ifood-static.com.br/image/upload/t_banner/webapp/landing/groceries-background-mobile.png","https://static.ifood-static.com.br/image/upload/t_banner/webapp/landing/groceries-background-mobile.png"]}/>
     </Box>

     <div style={{height:'30px'}}></div>
     
     <Box  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} m={5}>
      <h1 style={{fontSize:'45px', fontWeight:'bold'}}>
      Faça mercado no Cardapiando
      </h1>

      <p style={{fontSize:'15px', fontWeight:'300'}}>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
     </Box>
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