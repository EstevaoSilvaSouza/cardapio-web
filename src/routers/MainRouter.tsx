import { Route, Routes } from "react-router-dom";
import Container from "../components/layout/container";
import HeaderMenu from "../components/layout/header";
import { RoutersBase } from "../context/router/base";

const MainRouter = () => {
  return (
    <>
      <HeaderMenu />
      <Container>
        <Routes>
          {RoutersBase.MainRouter.map((e) => (
               <Route path={e.path} element={e.element} />
          ))}
         
  
        </Routes>
      </Container>
    </>
  );
};
export default MainRouter;
