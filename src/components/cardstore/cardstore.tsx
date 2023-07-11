import { useState } from "react";
import { CardDivStore } from "../style/storestyled";

const CardStore = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <CardDivStore
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <img
        style={{ width: "250px" }}
        src={
          "https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg"
        }
      />
      <h3>NomeLanche</h3>
      <h4>Ingriendente 1</h4>
      <h4>Ingriendente 2</h4>
      <h4>Ingriendente 3</h4>
      {isShow && (
        <div>
          Quantidade {0} <button>+</button>
          <button>-</button>
        </div>
      )}

      <button>Adicionar</button>
    </CardDivStore>
  );
};

export default CardStore;
