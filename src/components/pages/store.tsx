import { useParams } from "react-router-dom";
import CardStore from "../cardstore/cardstore";
import { MainDivStore, SubDivStore } from "../style/storestyled";
import { useEffect, useState } from "react";
import { Send } from "../../context/api/SendApi";
import { AxiosResponse } from "axios";

export interface IProduct {
  Id?: number;
  Name: string;
  Type: string;
  Value: number;
  Quantity: number;
  Description: string;
  Tag: string;
}
interface IStore {
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

  const request = async () => {
    Send("store/find", "post", {
      Name: NameStore,
      Type: "one",
    })
      .then((e: AxiosResponse<any, any> | undefined) => setData(e?.data))
      .catch((e) => console.error(e));
  };
  const AddQuantity = (obj: IProduct) => {
    const novoObj = obj?.Quantity + 1;
    const ArrayFiltrado: any = data?.Data.Products?.filter(
      (e) => e.Id !== obj.Id
    );
    setData((value) => ({
      ...value!,
      Data: {
        ...value!.Data,
        Products: [...ArrayFiltrado, { ...obj, Quantity: novoObj }],
      },
    }));
  };

  useEffect(() => {
    request();
  }, []);

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
