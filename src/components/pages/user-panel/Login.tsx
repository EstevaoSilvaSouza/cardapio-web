import { Box, Button, CircularProgress, Flex, Input, useToast } from "@chakra-ui/react";
import {  useContext,  useEffect,  useRef, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContexnt";
import { useNavigate } from "react-router-dom";
import { EnterOutlined, WarningOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";


interface Ilogin {
  Username?:string;
  Password?:string;
}

const Login = () => {
  const [payload, setPayload] = useState<Ilogin | null >({Username:undefined,Password:undefined});
  const [load,setLoad] = useState<boolean | null> (false);
  const [captc, setcaptch] = useState<string | null>(null);
  const { Login, Auth } = useContext(AuthContext);
  const nav = useNavigate();
  const toast = useToast();

  const btnSubmtRef = useRef<HTMLButtonElement>(null!);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

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
    if(Auth){
      toastLoagin('Boas Vindas','Seja bem vindo de volta :)',30 ,'success')
      nav('/painel/home')
    }
  })
  

  const loginUser = async () => {
    btnSubmtRef.current.disabled = true;
    if(payload?.Username === undefined || payload.Password === undefined ){
      toastLoagin('Atenção','Usuario/Senha em branco!',0 ,'info')
      setcaptch(null);
      //btnSubmtRef.current.hidden = false;
    }
    else {
      setLoad(true);
      const loggin = await Login(payload);
    
      if (loggin?.token && loggin?.returnCode === 5) {
        console.log(loggin);
        toastLoagin(loggin.message,loggin.message,loggin.returnCode ,'success')
        setLoad(false);
        nav('/painel/home');
      }
      else{
        toastLoagin(loggin!.message,loggin!.message,loggin!.returnCode ,'error')
        setLoad(false);
        setcaptch(null);
      }
    }    
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#F2F2F2"
    >
      <Flex
        flexDirection="column"
        w="450px"
        alignItems="center"
        justifyContent="center"
        bg="#FFFFFF"
        boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
        borderRadius="8px"
        padding="30px"
        position="relative"
      >
        {/* Adicione a borda apenas na parte superior */}
        <Box
          w="100%"
          h="8px"
          bg="#EB2937"
          position="absolute"
          top="0"
          left="0"
          borderRadius="8px 8px 0 0"
        />

        <Box my={4}>
          <h1 style={{ fontSize: '28px', color: '#EB2937' }}>Login</h1>
        </Box>

        <Input
          name="Username"
          type="text"
          onChange={handleInputChange}
          placeholder="Usuario"
          variant="filled"
          mb={4}
          focusBorderColor="#EB2937"
        />

        <Input
          name="Password"
          type="password"
          onChange={handleInputChange}
          placeholder="Senha"
          variant="filled"
          mb={6}
          focusBorderColor="#EB2937"
        />

        <Button
          onClick={loginUser}
          w="100%"
          bg="#EB2937"
          color="#fff"
          _hover={{ bg: "#BF1D2E" }}
          mt={4}
          hidden={!captc}
          ref={btnSubmtRef}
        >
         <EnterOutlined style={{marginRight:'10px'}} /> Acessar
        </Button>

        <ReCAPTCHA
          style={{marginTop:'10px'}}
          sitekey="6LdNQzspAAAAAGs5HkCvHKI7f5gE5lUA9J7tRIsy"
          onChange={(e) => setcaptch(e)}
        />,
        <Box mt={4}>
          <a href="/" style={{ fontSize: '13px', color: "#EB2937" }}>
          <WarningOutlined />  Esqueceu a senha?
          </a>
        </Box>

        {load && (
          <>
            <CircularProgress isIndeterminate color='green.300' style={{marginTop:'10px'}} />
            <a style={{ fontSize: '13px', colorScheme:"green.300"}}>
              Carregando aguarde!!
              </a>
          </>
        )}
        
      </Flex>
    </Box>
  );
};

export default Login;