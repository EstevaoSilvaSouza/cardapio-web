import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivHeader = styled.div`
  background-color: #c5c4b6c6;
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: "row";
`;

export const MenuItem = styled.li`
  margin: 15px;
  list-style: none;
`;

export const LinkS = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus {
    color: #fff;
  }

  &:active {
    color: #000;
  }
`;
