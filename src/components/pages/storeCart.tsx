import { useContext } from "react";
import { StoreContext } from "../../context/Store/StoreContext";

const StoreCart = () => {
  const { StoreCart } = useContext(StoreContext);

  return (
    <>
      <div>
        <h1>Carrinho de compra</h1>

        <div>{StoreCart?.CartName}</div>
        <h2>Items do Carrinho</h2>
        {StoreCart?.Items ? (
          <>
            {StoreCart.Items.map((e) => (
              <div key={e.Id}>
                <h2>{e.Name}</h2>
                <h2>{e.Quantity}</h2>
                <h2>{e.Description}</h2>
              </div>
            ))}
          </>
        ) : (
          <>
            <h3>Sem itens no momento</h3>
          </>
        )}
      </div>
    </>
  );
};

export default StoreCart;
