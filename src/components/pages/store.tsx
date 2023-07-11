import { useParams } from "react-router-dom";
import CardStore from "../cardstore/cardstore";
import { MainDivStore, SubDivStore } from "../style/storestyled";

const Store = () => {
  const { NameStore } = useParams();

  console.log(NameStore);
  return (
    <MainDivStore>
      <div>
        <h1>{NameStore}</h1>
      </div>
      <SubDivStore>
        <CardStore />
        <CardStore />
        <CardStore />
        <CardStore />
      </SubDivStore>
    </MainDivStore>
  );
};

export default Store;
