import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContexnt";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [payload, setPayload] = useState({});
  const { Login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
    console.log(payload);
  };

  const loginUser = () => {
    const loggin = Login(payload);
    if (loggin) {
      nav('/painel/home');
    }
  };

  useEffect(() => {
    const httpGetRoute = () => {
      const { pathname } = window.location;
      const arrayIndx = pathname.split('/');
      if (arrayIndx.length >= 1) {
        console.log('caiu aqui');
        const removeIndex0 = arrayIndx.splice(1);
        console.log(removeIndex0);
      }
    };
    httpGetRoute();
  }, []);

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
          name="Email"
          type="email"
          placeholder="Email"
          variant="filled"
          mb={4}
          focusBorderColor="#EB2937"
        />

        <Input
          name="Senha"
          type="password"
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
        >
          Acessar
        </Button>

        <Box mt={4}>
          <a href="/" style={{ fontSize: '13px', color: "#EB2937" }}>
            Esqueceu a senha?
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;