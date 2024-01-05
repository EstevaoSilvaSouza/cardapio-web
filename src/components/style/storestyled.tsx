import styled from "styled-components";

const primaryColor = "#111111";
const secondaryColor = "#fff";
const accentColor = "#0c7edc";
const boxShadowColor = "rgba(0, 0, 0, 0.2)";

export const MainDivStore = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const SubDivStore = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start; /* Alinhar itens ao início quando em layout de coluna */
  padding: 15px;

  @media screen and (max-width: 767px) {
    margin-top: 20px; /* Adicionar margem para criar espaço entre DivBtns e SubDivStore */
  }
`;

export const CardDivStore = styled.div<{ $tamanho?: string }>`
  width: ${(props) => props?.$tamanho || "200px"};
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${secondaryColor};
  box-shadow: 0 4px 8px ${boxShadowColor};

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 8px 16px ${boxShadowColor};
    transform: translateY(-4px);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
`;

export const DivBtns = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center; /* Centralizar itens quando em layout de coluna */
  }
`;

export const Btns = styled.button<{ $isActive: any }>`
  margin: 10px;
  height: 45px;
  width: 250px;
  font-size: 18px;
  background-color: ${(prop) => (prop.$isActive ? accentColor : primaryColor)};
  color: ${(prop) => (prop.$isActive ? primaryColor : secondaryColor)};
  font-weight: ${(p) => (p.$isActive ? "bolder" : 400)};
  cursor: pointer;
  border: none;
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 16px;
  }

  &:hover {
    background-color: ${accentColor};
  }
`;

export const BtnsAddMore = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  height: 30px;
  margin-left: 20px;
  width: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

`;

export const BtnsAdd = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  height: 35px;
  margin-top: 15px;
  width: 150px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #090303b9;
    
  }
`;

export const BtnCart = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  height: 35px;
  margin-top: 15px;
  width: 150px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #090303b9;
  }

  @media screen and (max-width:767px){
    margin-top:20px;
  } 
`;