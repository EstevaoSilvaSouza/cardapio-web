import { Box, Button, CircularProgress, Flex, Input, Tab, TabList, Tabs, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContexnt";
import { useNavigate } from "react-router-dom";
import { EnterOutlined, WarningOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import { BaseApi } from "../../../context/BaseApi";

interface Ilogin {
  Username?: string;
  Password?: string;
  Email?: string;
  FullName?: string;
}

const Login = () => {
  const [payload, setPayload] = useState<Ilogin | null>({ Username: undefined, Password: undefined, Email: undefined, FullName: undefined });
  const [load, setLoad] = useState<boolean | null>(false);
  const [captc, setCaptch] = useState<string | null>(null);
  const [isPage, setIsPage] = useState<string>('Login');
  const { Login, Auth } = useContext(AuthContext);
  const nav = useNavigate();
  const toast = useToast();

  const btnSubmitRef = useRef<HTMLButtonElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const toastLogin = (title: string, message: string, returnCode: number, status: "info" | "warning" | "success" | "error" | "loading" | undefined) => {
    toast({
      title: title,
      description: ` ${message} ${returnCode === 5 ? '' : `StatusReturn: ${returnCode}`}`,
      status: status,
      duration: 3000,
      position: 'top-right',
      isClosable: true,
    })
  }

  useEffect(() => {
    inputRef.current.focus();
    if (Auth) {
      toastLogin('Boas Vindas', 'Seja bem vindo de volta :)', 30, 'success')
      nav('/painel/home')
    }
  }, [])

  const submitNewUser = async () => {
    if (payload?.Username === undefined || payload.Password === undefined) {
      toastLogin('Atenção', 'Usuário/Senha em branco!', 0, 'info')
      setCaptch(null);
    }
    else {
      setLoad(true);
      const dataa = { ...payload, ['Type']: 'Normal', ['Status']: true, ['IsActive']: true }
      const { data } = await BaseApi.post('user/create-user', dataa)
      toastLogin('Sucesso', 'Conta registrada com sucesso, crie sua store :)', 30, 'success')
      if (data) {
        nav(`/dev?token=${123}`)
      }
    }
  }

  const loginUser = async () => {
    btnSubmitRef.current.disabled = true;
    if (payload?.Username === undefined || payload.Password === undefined) {
      toastLogin('Atenção', 'Usuário/Senha em branco!', 0, 'info')
      setCaptch(null);
    }
    else {
      setLoad(true);
      const loggin = await Login(payload);

      if (loggin?.token && loggin?.returnCode === 5) {
        toastLogin(loggin.message, loggin.message, loggin.returnCode, 'success')
        setLoad(false);
        nav('/painel/home');
      }
      else {
        toastLogin(loggin!.message, loggin!.message, loggin!.returnCode, 'error')
        setLoad(false);
        setCaptch(null);
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
        w="400px"
        alignItems="center"
        justifyContent="center"
        bg="#FFFFFF"
        boxShadow="0 10px 20px rgba(0, 0, 0, 0.2)"
        borderRadius="8px"
        padding="30px"
        position="relative"
        mt="50px"
      >
        <Tabs isFitted variant="enclosed" mt={4}>
          <TabList>
            <Tab onClick={() => setIsPage('Login')}>Acessar</Tab>
            <Tab onClick={() => setIsPage('Cadastro')}>Registro</Tab>
          </TabList>
        </Tabs>

        <Box my={4}>
          <h1 style={{ fontSize: '28px', color: '#EB2937' }}>{isPage}</h1>
        </Box>

        {isPage === 'Login'
          ?
          <>
            <Input
              name="Username"
              type="text"
              onChange={handleInputChange}
              placeholder="Usuário"
              ref={inputRef}
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
              ref={btnSubmitRef}
            >
              <EnterOutlined style={{ marginRight: '10px' }} /> Acessar
            </Button>

            <ReCAPTCHA
              style={{ marginTop: '10px' }}
              sitekey="6LdNQzspAAAAAGs5HkCvHKI7f5gE5lUA9J7tRIsy"
              onChange={(e) => setCaptch(e)}
            />

            <Box mt={4}>
              <a href="/" style={{ fontSize: '13px', color: "#EB2937" }}>
                <WarningOutlined />  Esqueceu a senha?
              </a>
            </Box>

            {load && (
              <>
                <CircularProgress isIndeterminate color='green.300' style={{ marginTop: '10px' }} />
                <a style={{ fontSize: '13px', colorScheme: "green.300" }}>
                  Carregando, aguarde!!
                </a>
              </>
            )}
          </>
          :
          <>
            <Input
              name="Name"
              type="text"
              onChange={handleInputChange}
              placeholder="Nome"
              variant="filled"
              mb={4}
              focusBorderColor="#EB2937"
              required={true}
            />

            <Input
              name="FullName"
              type="text"
              onChange={handleInputChange}
              placeholder="Sobrenome"
              variant="filled"
              mb={6}
              focusBorderColor="#EB2937"
            />

            <Input
              name="Username"
              type="text"
              onChange={handleInputChange}
              placeholder="Usuário"
              variant="filled"
              mb={6}
              focusBorderColor="#EB2937"
            />

            <Input
              name="Email"
              type="email"
              onChange={handleInputChange}
              placeholder="Email"
              variant="filled"
              mb={6}
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
              onClick={submitNewUser}
              w="100%"
              bg="#EB2937"
              color="#fff"
              _hover={{ bg: "#BF1D2E" }}
              mt={4}
              hidden={!captc}
              ref={btnSubmitRef}
            >
              <EnterOutlined style={{ marginRight: '10px' }} /> Cadastrar
            </Button>

            <ReCAPTCHA
              style={{ marginTop: '10px' }}
              sitekey="6LdNQzspAAAAAGs5HkCvHKI7f5gE5lUA9J7tRIsy"
              onChange={(e) => setCaptch(e)}
            />

            {load && (
              <>
                <CircularProgress isIndeterminate color='green.300' style={{ marginTop: '10px' }} />
                <a style={{ fontSize: '13px', colorScheme: "green.300" }}>
                  Carregando, aguarde!!
                </a>
              </>
            )}
          </>
        }
      </Flex>
    </Box>
  );
};

export default Login;