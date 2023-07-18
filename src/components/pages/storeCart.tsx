import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/Store/StoreContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  CartItem,
  DivCart,
  DivCartSub,
  TitleCart,
  TitleProduct,
} from "../style/storecart";
import { IProduct } from "./store";
import { BtnsAdd } from "../style/storestyled";

const StoreCart = () => {
  const { StoreCart } = useContext(StoreContext);
  const [StoreItems, SetStoreItems] = useState(StoreCart);
  const { NameStore } = useParams();
  const SubTotal = StoreCart?.Items?.reduce((acc, val) => {
    return acc + val.Value * val.Quantity;
  }, 0);

  const ObjRef: any = StoreCart;
  const navigate = useNavigate();
  const HandleQuantity = (type?: string, obj?: IProduct) => {
    type === "+" ? (obj!.Quantity += 1) : (obj!.Quantity -= 1);

    if (obj!.Quantity < 1) {
      obj!.Quantity = 1;
    }
    const findIndexItem = StoreCart?.Items?.findIndex((e) => e.Id === obj?.Id);

    if (findIndexItem !== undefined && ObjRef?.Items) {
      ObjRef.Items[findIndexItem].Quantity = obj?.Quantity;
      SetStoreItems((prev) => ({
        ...prev,
        Items: [...ObjRef.Items],
      }));
    }
  };

  const BackPage = () => {
    navigate(`/store/${NameStore}`);
  };

  const RemoveCart = (idx: any) => {
    console.log(idx);
    const t: any = StoreItems?.Items?.splice(idx, 1);
    console.log(StoreItems?.Items);

    SetStoreItems((prev) => ({ ...prev, Items: [...t] }));
  };

  useEffect(() => {
    SetStoreItems(StoreCart);
  });

  return (
    <>
      <DivCart>
        <BtnsAdd onClick={BackPage}>Voltar Menu</BtnsAdd>
        <TitleCart>Carrinho de compra</TitleCart>

        <div>
          <h3> Cart - {StoreItems?.CartName}</h3>
          <h2>Items do Carrinho - {StoreItems?.Items?.length}</h2>
          {StoreItems?.Items ? (
            <DivCartSub>
              <div style={{ width: "70%" }}>
                {StoreItems.Items.map((e, idx) => (
                  <CartItem key={e.Id}>
                    <TitleProduct>Produto - {e.Name}</TitleProduct>
                    <div>
                      Quantidade
                      {"       "}
                      <button onClick={() => HandleQuantity("+", e)}>+</button>
                      {"    " + e.Quantity + "   "}
                      <button onClick={() => HandleQuantity("-", e)}>-</button>
                    </div>
                    <h2>Descrição - {e.Description}</h2>
                    <h3>Total - {e.Value * e.Quantity}</h3>
                    <button onClick={() => RemoveCart(idx)}>
                      Remover item{" "}
                    </button>
                  </CartItem>
                ))}
              </div>

              <div style={{ width: "30%" }}>
                <h2>Resumo do Pedido</h2>
                <h4>Subtotal {SubTotal}</h4>
              </div>
            </DivCartSub>
          ) : (
            <>
              <h3>Sem itens no momento</h3>
            </>
          )}
        </div>
      </DivCart>
    </>
  );
};

export default StoreCart;
