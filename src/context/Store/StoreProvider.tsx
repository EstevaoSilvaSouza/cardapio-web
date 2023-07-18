import { useEffect, useState } from "react";
import { IStoreCart, StoreContext } from "./StoreContext";
import { IProduct } from "../../components/pages/store";

export const StoreProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [StoreCart, SetStoreCart] = useState<IStoreCart | null>(null);
  const Token = "Gsp_Cart";

  useEffect(() => {
    const Check = JSON.parse(localStorage.getItem(Token)!);
    if (!Check) {
      localStorage.setItem(
        Token,
        JSON.stringify({
          Items: [],
          CartName: "Olá Burguer",
          Table: "1",
        })
      );
    }
    SetStoreCart(JSON.parse(localStorage.getItem(Token)!));
    console.log(StoreCart);
  }, []);

  const GetItensLocal = (): string | null => {
    const Items = localStorage.getItem(Token);
    return Items;
  };
  const AddCartLocal = (data: IProduct) => {
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
      CartName: "Olá Burguer",
      Table: "1",
    };
    localStorage.setItem(Token, JSON.stringify(CartInfo));
    SetStoreCart(CartInfo);

    console.log(StoreCart);
  };

  let CreateCart = async (obj: IProduct): Promise<number | null> => {
    AddCartLocal(obj);
    return 2;
  };

  return (
    <StoreContext.Provider value={{ StoreCart, CreateCart }}>
      {children}
    </StoreContext.Provider>
  );
};
