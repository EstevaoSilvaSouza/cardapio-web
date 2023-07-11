import { Route, Routes } from "react-router-dom";
import Container from "../components/layout/container";
import HeaderMenu from "../components/layout/header";
import Store from "../components/pages/store";

const MainRouter = () => {
  return (
    <>
      <HeaderMenu />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Pagina inicial</h1>
              </>
            }
          />

          <Route path="/loja/:NameStore" element={<Store />} />

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
