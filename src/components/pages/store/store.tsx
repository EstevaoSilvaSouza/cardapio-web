import { useParams, useNavigate } from "react-router-dom";
import CardStore from "../../cardstore/cardstore";
import {
  BtnCart,
  Btns,
  DivBtns,
  DivDivider,
  MainDivStore,
  SubDivStore,
} from "../../style/storestyled";
import { useEffect, useState, useContext } from "react";
import { Send } from "../../../context/api/SendApi";
import { AxiosResponse } from "axios";
import { StoreContext } from "../../../context/Store/StoreContext";
import { Box, Heading } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

export interface IProduct {
  Id: any;
  Name: string;
  Type: string;
  Value: number;
  Quantity: number;
  Description: string;
  Tag: string;
  Id_ProduRef?:number;
}
export interface IStore {
  Data: {
    Id: number;
    Name: string;
    Type: string;
    Description: string;
    ImageUrl: string;
    Products: IProduct[];
  };
  Categoria?: string[];
}

const Store = () => {
  const { NameStore } = useParams();
  const [data, setData] = useState<IStore | null>(null);
  const [filterItens, SetFilterItens] = useState<IStore | null>(null);
  const [isClick, SetClick] = useState<string | null>(null);
  const [loading,SetLoading] = useState<boolean>(false);

  const { CreateCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const ObjRefe = data?.Data?.Products;

  const request = async () => {
    Send("store/find", "post", {
      Name: NameStore,
      Type: "one",
    })
      .then((e: AxiosResponse<any, any> | undefined) => {
        setData(e?.data);
        SetLoading(true);
      })
      .catch((e) => console.error(e));
  };

  const FilterButton = (cate: string) => {
    SetClick(cate);
    if (cate === "Todos") {
      SetFilterItens(data);
    } else {
      const FilterItens: any = data?.Data.Products.filter((e) =>
        e.Type.includes(cate)
      );
      SetFilterItens((prev) => ({
        ...prev!,
        Data: { ...prev!.Data, Products: [...FilterItens] },
      }));
    }
  };

  const AddQuantity = (obj: IProduct, type: string): void => {
    type === "+" ? (obj.Quantity += 1) : (obj.Quantity -= 1);
    if (obj.Quantity < 0) {
      obj.Quantity = 0;
    }
    const indexFiltrado: any = data?.Data?.Products?.findIndex(
      (e) => e.Id === obj.Id
    );

    if (indexFiltrado > -1 && ObjRefe) {
      ObjRefe[indexFiltrado].Quantity = obj.Quantity;
      setData((prevItem) => ({
        ...prevItem!,
        Data: { ...prevItem!.Data, Products: [...ObjRefe] },
      }));
    }
  };

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    SetFilterItens(data);
    SetClick("Todos");
  }, [data]);

  const AddCartItem = (obj: IProduct): void => {
    if(!obj.Id){
      obj.Id = uuidv4();
    }

    obj.Id_ProduRef = obj.Id_ProduRef || obj.Id;

    obj.Id = uuidv4();
    CreateCart(obj,NameStore as string);
  };

  const SendCart = () => {
    navigate(`/cardapio/loja/checkout/${NameStore}`);
  };

  return (
    <MainDivStore>
      {loading ? (
        <>
          {filterItens ? (
        <>
          <BtnCart onClick={SendCart}>Carrinho</BtnCart>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: " center",
              //top: "-150px",
              //position: "relative",
            }}
          >
           
            <div>
              <img
                style={{
                  width: "120px",
                }}
                src={filterItens.Data.ImageUrl}
              />
            </div>
            <DivDivider/>
            <h1>{filterItens?.Data?.Name}</h1> 
            <p>.</p>
            <p>{filterItens?.Data?.Description}</p>
          </div>
          <DivDivider/>
          <DivBtns>
            {filterItens.Categoria && (
              <>
                <Btns
                  $isActive={isClick === "Todos"}
                  key={"todos"}
                  onClick={() => FilterButton("Todos")}
                >
                  Todos
                </Btns>
                {filterItens.Categoria.map((i: any) => (
                  <Btns
                    $isActive={isClick === i}
                    key={i}
                    onClick={() => FilterButton(i)}
                  >
                    {i}
                  </Btns>
                ))}
              </>
            )}
          </DivBtns>
          <DivDivider/>
          <SubDivStore>
          {filterItens.Categoria?.map((category: any) => (
          <Box
            key={category}
            width="100%"
            display="flex"
            flexDirection="column"
            mb="4" // Adicionando margem inferior entre as categorias
          >
            <Heading as="h1" size="lg" mb="2" color="teal.500" fontWeight="bold" bg="#111111" boxShadow="md">
              {category}
            </Heading>
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="4" // Adicionando espaçamento entre os itens
            >
              {filterItens?.Data.Products?.filter((item: any) => item.Type === category).map((item: any) => (
                <CardStore
                  key={item?.Id}
                  AddQuantity={AddQuantity}
                  AddCart={AddCartItem}
                  obj={item}
                />
              ))}
            </Box>
          </Box>
        ))}
            
          </SubDivStore>
        </>
      ) : (
        <>
          <div>
            <h1>Loja não encontrada {NameStore}</h1>
          </div>
        </>
      )}
        </>
      ) 
    :
    <>
      <h1>Carregando aguarde.....</h1>
    </>}
    
    </MainDivStore>
  );
};

export default Store;
