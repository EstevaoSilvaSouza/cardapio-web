import { useParams } from "react-router-dom";
import CardStore from "../cardstore/cardstore";
import { MainDivStore, SubDivStore } from "../style/storestyled";
import { useEffect, useState, useContext } from "react";
import { Send } from "../../context/api/SendApi";
import { AxiosResponse } from "axios";
import { StoreContext } from "../../context/Store/StoreContext";

export interface IProduct {
  Id?: number;
  Name: string;
  Type: string;
  Value: number;
  Quantity: number;
  Description: string;
  Tag: string;
}
export interface IStore {
  Data: {
    Id?: number;
    Name: string;
    Type: string;
    Description: string;
    Products?: IProduct[];
  };
}

const Store = () => {
  const { NameStore } = useParams();
  const [data, setData] = useState<IStore | null>(null);
  const { CreateCart } = useContext(StoreContext);
  const ObjRefe = data?.Data?.Products;
  const request = async () => {
    Send("store/find", "post", {
      Name: NameStore,
      Type: "one",
    })
      .then((e: AxiosResponse<any, any> | undefined) => setData(e?.data))
      .catch((e) => console.error(e));
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

  const AddCartItem = (obj: IProduct): void => {
    CreateCart(obj);
  };

  return (
    <MainDivStore>
      {data ? (
        <>
          <div>
            <h1>{data?.Data?.Name}</h1>
            <p>{data?.Data?.Description}</p>
          </div>
          <SubDivStore>
            {data.Data.Products?.map((e) => (
              <CardStore
                key={e?.Id}
                name={e?.Name}
                description={e?.Description}
                quantity={e?.Quantity}
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
