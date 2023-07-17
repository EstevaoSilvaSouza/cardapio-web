import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivHeader = styled.div`
  background-color: #111111;
  width: 100%;
  border-radius: 10px;
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: "row";
`;

export const MenuItem = styled.li`
  margin: 20px;
  list-style: none;
`;

export const LinkS = styled(Link)`
  text-decoration: none;
  color: #f4f4f4;

  &:hover,
  &:focus {
    color: #f4f4f490;
    font-weight: 600;
  }

  &:active {
    color: #000000;
  }
`;
