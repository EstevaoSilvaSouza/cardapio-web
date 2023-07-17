import { useParams, useNavigate } from "react-router-dom";
import CardStore from "../cardstore/cardstore";
import {
  Btns,
  BtnsAdd,
  BtnsAddMore,
  DivBtns,
  MainDivStore,
  SubDivStore,
} from "../style/storestyled";
import { useEffect, useState, useContext } from "react";
import { Send } from "../../context/api/SendApi";
import { AxiosResponse } from "axios";
import { StoreContext } from "../../context/Store/StoreContext";

export interface IProduct {
  Id: number;
  Name: string;
  Type: string;
  Value: number;
  Quantity: number;
  Description: string;
  Tag: string;
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
      })
      .catch((e) => console.error(e));
  };

  const FilterButton = (cate: string) => {
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
  }, [data]);

  const AddCartItem = (obj: IProduct): void => {
    CreateCart(obj);
  };

  const SendCart = () => {
    navigate(`/store/checkout/${NameStore}`);
  };

  return (
    <MainDivStore>
      {filterItens ? (
        <>
          <div>
            <h1>{filterItens?.Data?.Name}</h1>
            <BtnsAdd onClick={SendCart}>Carrinho</BtnsAdd>
            <p>{filterItens?.Data?.Description}</p>
          </div>
          <DivBtns>
            {filterItens.Categoria && (
              <>
                <Btns key={"todos"} onClick={() => FilterButton("Todos")}>
                  Todos
                </Btns>
                {filterItens.Categoria.map((i: any) => (
                  <Btns key={i} onClick={() => FilterButton(i)}>
                    {i}
                  </Btns>
                ))}
              </>
            )}
          </DivBtns>
          <SubDivStore>
            {filterItens?.Data.Products?.map((e: any) => (
              <CardStore
                key={e?.Id}
                AddQuantity={AddQuantity}
                AddCart={AddCartItem}
                obj={e}
              />
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
    </MainDivStore>
  );
};

export default Store;
