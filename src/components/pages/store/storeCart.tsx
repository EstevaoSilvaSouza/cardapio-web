import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../context/Store/StoreContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  CartItem,
  DivCart,
  DivCartSub,
  TitleCart,
  TitleProduct,
  ProductImage,
  Button,
  IncrementButton,
  H2,
  H3,
  H4,
} from "../../style/storecart";
import { IProduct } from "./store";
import { Box } from "@chakra-ui/react";

const StoreCart = () => {
  const { StoreCart , removeCart} = useContext(StoreContext);
  const [StoreItems, setStoreItems] = useState(StoreCart);
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
      setStoreItems((prev) => ({
        ...prev,
        Items: [...ObjRef.Items],
      }));

      console.log(StoreItems)
    }
  };

  const backToMenu = () => {
    navigate(`/cardapio/loja/${NameStore}`);
  };

  const RemoveCart = (idx: any) => {
    //console.log(idx);
    //const t: any = StoreItems?.Items?.splice(idx, 1);
    //console.log(StoreItems?.Items);
    removeCart(idx)
    //setStoreItems((prev) => ({ ...prev, Items: [...t] }));
  };

  useEffect(() => {
    setStoreItems(StoreCart);
  });

  return (
    <>
      <DivCart>
        <Button onClick={backToMenu}>Voltar para o Menu</Button>
        <TitleCart>Carrinho de Compra</TitleCart>

        <div>
          <H3> Carrinho de Compra - {StoreItems?.NameCart}</H3>
          <H2>Itens no Carrinho - {StoreItems?.Items?.length}</H2>
          {StoreItems?.Items ? (
            <DivCartSub>
              <div style={{ width: "70%" }}>
                {StoreItems.Items.map((e) => (
                  <CartItem key={e.Id}>
                    <ProductImage src={'ok'} alt={e.Name} />
                    <div>
                      <TitleProduct>Produto - {e.Name}</TitleProduct>
                      <div>
                        Quantidade
                        {"       "}
                        <IncrementButton onClick={() => HandleQuantity("+", e)}>
                          +
                        </IncrementButton>
                        {"    " + e.Quantity + "   "}
                        <IncrementButton onClick={() => HandleQuantity("-", e)}>
                          -
                        </IncrementButton>
                      </div>
                      <H2>Descrição - {e.Description}</H2>
                      <H3>Total - {e.Value * e.Quantity}</H3>
                      <Button onClick={() => RemoveCart(e.Id)}>
                        Remover item{" "}
                      </Button>
                    </div>
                  </CartItem>
                ))}
              </div>
              
              <Box w={'70%'} h={'100%'}>

                <div style={{ width: "60%" }}>
                  <H2>Resumo do Pedido</H2>
                  <H4>Subtotal {SubTotal}</H4>
                </div>

                <div style={{marginTop:'12  px'}}>
                <Button>
                  Finalizar pedido
                </Button>
                </div>

              </Box>
           
            </DivCartSub>
          ) : (
            <>
              <H3>Sem itens no momento</H3>
            </>
          )}
        </div>
      </DivCart>
    </>
  );
};

export default StoreCart;