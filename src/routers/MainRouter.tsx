import { Route, Routes } from "react-router-dom";
import Container from "../components/layout/container";
import HeaderMenu from "../components/layout/header";
import Store from "../components/pages/store";
import StoreCart from "../components/pages/storeCart";

const MainRouter = () => {
  return (
    <>
      <HeaderMenu />
      <Container>
        <Routes>
          <Route path="loja/:NameStore" element={<Store />} />
          <Route path="loja/checkout/:NameStore" element={<StoreCart />} />

        </Routes>
      </Container>
    </>
  );
};
export default MainRouter;
