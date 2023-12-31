import {
    Box,
    Input,
    Button,
    Heading,
    Card,
    CardBody,
    Image,
    Divider,
    Stack,
    Text,
    CardFooter,
    ButtonGroup,
    Skeleton,
    useDisclosure,
  } from "@chakra-ui/react";
  import {  useEffect, useState } from "react";
  import BreadCrumb from "../../layout/breadcrumb";
import { Link } from "react-router-dom";
import { SecurityScanOutlined, SisternodeOutlined } from "@ant-design/icons";
import { BaseApi } from "../../../context/BaseApi";
import ModalCustom from "../../layout/Modal";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";

interface Product {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Tag: string;
  Type: string;
  Value: number;
  Id_Store: number;
  Images: any[]; // You might want to replace 'any[]' with a more specific type for images
}

interface Store {
  Id: number;
  Name: string;
  Type: string;
  Description: string;
  ImageUrl: string | null;
  IdUser: number;
  Products: Product[];
}

interface ApiResponse {
  message: string;
  returnCode: number;
  Store: Store;
}
interface modalSettings {
  Name?:string;
  Element?:JSX.Element | JSX.Element[]
}

  const CardItem = ({obj,onOpen,setSettingsModel}:{obj:Product,onOpen:any,setSettingsModel:any}) => (
    <>
      <Card
        maxW="sm"
        m={2}
        borderRadius="lg"
        boxShadow="xl"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.02)" }}
      >
        <Image
          src={obj?.Images[0]?.Url}
          alt="Sofá duplo verde com pernas de madeira"
          borderTopRadius="lg"
        />
        <CardBody>
          <Stack spacing={2}>
            <Heading size="md">{obj.Name}</Heading>
            <Text color="gray.600" fontSize="sm">
              ${obj.Value}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing={2}>
            <Button
              variant="solid"
              colorScheme="red"
              borderRadius="md"
              _hover={{ bg: "#EB2937" }}
              onClick={() => {onOpen(); setSettingsModel((prev:modalSettings) => ({...prev,Name:'Editar Produto', Element:<EditProduct id={obj.Id} key={'g'}/>}))}}
            >
              Editar
            </Button>
            <Button
              variant="ghost"
              colorScheme="red"
              borderRadius="md"
              _hover={{ bg: "#EB2937" }}
            >
              Excluir
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
  
  const ListProduct = () => {
    const [httpRoute, setHttpRoute] = useState<string[] | null>([]);
    const [dataRepo,setDataRepo] = useState<ApiResponse | null>(null);
    const [isLoad,setLoad] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalSettings,setSettingsModel] = useState<modalSettings | null>({Name:undefined, Element:undefined});
    const getItensProduct = async () => {
      const {data} = await BaseApi.post('store/currentuser/store',{Name:"homolog"},{withCredentials:true});
      if(data){
        setDataRepo(data);
        setLoad(true);
      }
    }
    

    useEffect(() => {
      getItensProduct();
    },[])

    useEffect(() => {
      const httpGetRoute = () => {
        const { pathname } = window.location;
        const arrayIndx = pathname.split("/");
        if (arrayIndx.length >= 1) {
          const removeIndex0 = arrayIndx.splice(1);
          setHttpRoute(removeIndex0);
        }
      };
      httpGetRoute();
    }, []);

    return (
      <>
        <Box
          w="100%"
          h="100vh"
          bg="#F2F2F2"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          overflowY="auto" 
        >
          <Box
            pt={6}
            pb={4}
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h3" size="lg" color="#2E2E2E">
              Lista de Produtos
            </Heading>
          </Box>

          
  
          <BreadCrumb items={httpRoute} />
         <Box mb={5} mt={5}>
          <Button colorScheme="yellow" ml={4} as={Link} onClick={() => {onOpen(); setSettingsModel((prev) => ({...prev,Name:'Cadastro Novo Produto', Element:<CreateProduct key={'c'}/>}))}}>
          <SisternodeOutlined  style={{marginRight:'10px'}}/> Novo Produto
            </Button>
            <Button colorScheme="purple" ml={4}>
            <SecurityScanOutlined style={{marginRight:'10px'}}/> Log
            </Button>
         </Box>
        
          <ModalCustom titleModal={modalSettings!.Name} size="xl" isOpen={isOpen} onClose={onClose} onOpen={onOpen} element={modalSettings!.Element} />
          <Box mb={6} w="100%" display="flex" justifyContent="center" alignItems="center">
          <Input
            placeholder="Buscar"
            w="70%"
            borderColor="#EB2937"
          />
          <Button colorScheme="red" ml={4}>
            Buscar
          </Button>
        </Box>


        <Skeleton w={'100%'} height={'100%'} isLoaded={isLoad}>
          <Box
              w="95%"
              h={'100%'}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              {dataRepo?.Store.Products.map((e) => (
              <CardItem obj={e} onOpen={onOpen} setSettingsModel={setSettingsModel}/>
              ))}             
            </Box>
       </Skeleton>

       
        </Box>
      </>
    );
  };
  
  export default ListProduct;