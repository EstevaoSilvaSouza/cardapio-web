import { Route, Routes } from "react-router-dom";
import Container from "../components/layout/container";
import HeaderMenu from "../components/layout/header";
import Store from "../components/pages/store";
import StoreCart from "../components/pages/storeCart";
import Home from "../components/pages/Home";

const MainRouter = () => {
  return (
    <>
      <HeaderMenu />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/store/:NameStore" element={<Store />} />
          <Route path="/store/checkout/:NameStore" element={<StoreCart />} />

          <Route
            path="*"
            element={
              <>
                <h1>Pagina não encontrad a</h1>
              </>
            }
          />
        </Routes>
      </Container>
    </>
  );
};
export default MainRouter;
