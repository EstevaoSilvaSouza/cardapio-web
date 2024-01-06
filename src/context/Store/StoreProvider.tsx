import { useEffect, useState } from "react";
import { IStoreCart, StoreContext } from "./StoreContext";
import { IProduct } from "../../components/pages/store/store";

export const StoreProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [StoreCart, SetStoreCart] = useState<IStoreCart | null>(null);
  const Token = "Gsp_Cart";

  const loadCart = () => {
    localStorage.setItem(
      Token,
      JSON.stringify({
        Items: [],
        NameCart: "Olá Burguer",
        Id_Table: "1",
      })
    ); 
  }

  useEffect(() => {
    const Check = JSON.parse(localStorage.getItem(Token)!);
    if (Check) {
     localStorage.removeItem(Token);
     loadCart();
    }
    else{
      loadCart();
    }
    SetStoreCart(JSON.parse(localStorage.getItem(Token)!));
    //console.log(StoreCart);
  }, []);

  const GetItensLocal = (): string | null => {
    const Items = localStorage.getItem(Token);
    return Items;
  };
  const AddCartLocal = (data: IProduct,storeName:string) => {
    const Itens: any = JSON.parse(GetItensLocal()!);

    let Cart: any;
    if (Itens?.Items) {
      Cart = Itens;
      Cart.Items.push(data);
    } else {
      Cart.Items.push(data);
    }

    const CartInfo: IStoreCart | null = {
      Items: Cart?.Items,
      NameCart: storeName || "Olá Burguer",
      Id_Table: "1",
    };
    localStorage.setItem(Token, JSON.stringify(CartInfo));
    SetStoreCart(CartInfo);
  };

  let CreateCart = async (obj: IProduct,storeName:string): Promise<number | null> => {
    AddCartLocal(obj,storeName);
    return 2;
  };

  let removeCart = (idx:any) => {
    const getItens = JSON.parse(localStorage.getItem(Token)!);
    if(getItens){
      const itensRemove = getItens?.Items?.filter((e:any) => e.Id !== idx);
      console.log(itensRemove);
      //console.log(getItens);
     getItens.Items = [...itensRemove];
      localStorage.setItem(Token,JSON.stringify(getItens));
      SetStoreCart(getItens);
    }
  } 

  return (
    <StoreContext.Provider value={{ StoreCart, CreateCart,removeCart }}>
      {children}
    </StoreContext.Provider>
  );
};
