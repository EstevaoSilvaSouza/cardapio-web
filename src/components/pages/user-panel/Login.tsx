import { Box, Button, Flex } from "@chakra-ui/react";
import { BoxMain, InputPerson } from "../../style/LoginPage";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContexnt";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [payload,setPayload] = useState({});
    const {Login} = useContext(AuthContext);
    const nav = useNavigate();

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name,value} = e.target;
        setPayload(e => ({...e,[name]:value}))
        console.log(payload);
    }

    const loginUser = () => {
        const loggin = Login(payload);
        if(loggin){
            nav('/painel/home')
        }
    }

    return (
        <Box w={'100vw'} bg={'#6fcf974e '} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDirection={'column'} w={'450px'} h={'550px'} alignItems={'center'} justifyContent={'center'} bg={'#fff'} boxShadow={'0 5px 15px rgba(0, 0, 0, 0.1)'} borderRadius={'25px'} padding={'20px'} animation={'fadeIn 1.5s'}>
                <Box my={4}>
                    <h1 style={{ fontSize: '28px', color: '#6FCF97' }}>Login</h1>
                </Box>
                <BoxMain>
                    <InputPerson  name="Email" onChange={handleInputChange} type="email" placeholder="Email"/>
                </BoxMain>
                <BoxMain>
                    <InputPerson name="Senha" onChange={handleInputChange} type="password" placeholder="Senha"/>
                </BoxMain>
                <Box marginTop={6}>
                    <Button onClick={loginUser} w={160} bg={"#6FCF97"} >Acessar</Button>
                </Box>
                <Box marginTop={6}>
                    <a href="/" style={{ fontSize:'13px',color:"#063bbf"}}>Esqueceu a senha?</a>
                </Box>
            </Flex>
        </Box>
    )
}

export default Login;
