import { useState } from "react";
import { BtnsAdd, BtnsAddMore, CardDivStore } from "../style/storestyled";
import { IProduct } from "../pages/store";

const CardStore = ({
  AddQuantity,
  AddCart,
  obj,
}: {
  AddQuantity: (obj: IProduct, type: string) => void;
  AddCart: (obj: IProduct) => void;
  obj: IProduct;
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <CardDivStore
      $tamanho={"251px"}
      //onMouseEnter={() => setIsShow(true)}
      //onMouseLeave={() => setIsShow(false)}
    >
      <img
        style={{ width: "251px" }}
        src={
          "https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg"
        }
      />
      <h3>{obj.Name}</h3>
      <h4>{obj.Description}</h4>
      <h4>Valor - {obj.Value}</h4>

      <div>
        Quantidade {obj.Quantity}
        <BtnsAddMore onClick={() => AddQuantity(obj, "+")}>+</BtnsAddMore>
        <BtnsAddMore onClick={() => AddQuantity(obj, "-")}>-</BtnsAddMore>
      </div>

      <BtnsAdd onClick={() => AddCart(obj)}>Adicionar</BtnsAdd>
    </CardDivStore>
  );
};

export default CardStore;
