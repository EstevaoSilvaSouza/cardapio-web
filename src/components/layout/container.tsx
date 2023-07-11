import { DivMain } from "../style/containerstyled";

const Container = ({ children }: { children: JSX.Element }) => {
  return <DivMain>{children}</DivMain>;
};

export default Container;
