import { useState } from "react";
import { CardDivStore } from "../style/storestyled";
import { IProduct } from "../pages/store";

const CardStore = ({
  name,
  description,
  quantity,
  AddQuantity,
  AddCart,
  obj,
}: {
  name: string;
  description: string;
  quantity: number;
  AddQuantity: (obj: IProduct, type: string) => void;
  AddCart: (obj: IProduct) => void;
  obj: IProduct;
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <CardDivStore
      tamanho={isShow ? "251px" : "250px"}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <img
        style={{ width: "250px" }}
        src={
          "https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg"
        }
      />
      <h3>{name}</h3>
      <h4>{description}</h4>

      {isShow && (
        <div>
          Quantidade {quantity}
          <button onClick={() => AddQuantity(obj, "+")}>+</button>
          <button onClick={() => AddQuantity(obj, "-")}>-</button>
        </div>
      )}

      <button onClick={() => AddCart(obj)}>Adicionar</button>
    </CardDivStore>
  );
};

export default CardStore;
