import { Link } from "react-router-dom";
import styled from "styled-components";

// Cores
const primaryColor = "#111111";
const secondaryColor = "#f4f4f4";
const hoverColor = "#f4f4f490";
const activeColor = "#000000";

export const DivHeader = styled.div`
  background-color: ${primaryColor};
  width: 100%;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 15px;
`;

export const LinkS = styled(Link)`
  text-decoration: none;
  color: ${secondaryColor};
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: ${hoverColor};
    font-weight: 600;
  }

  &:active {
    color: ${activeColor};
  }
`;