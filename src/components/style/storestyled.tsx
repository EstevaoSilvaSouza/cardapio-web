import styled from "styled-components";

export const MainDivStore = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const SubDivStore = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //background-color: green;
  padding: 5px;
`;

export const CardDivStore = styled.div<{ $tamanho?: string }>`
  width: ${(props) => props?.$tamanho};
  height: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 4%;
  background-color: #f8f8f8;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 400px;
    background-color: #f8f8f8;
  }

  &:hover {
  }
`;

export const DivBtns = styled.div`
  //width: 70vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    height: auto;
  }
`;

export const Btns = styled.button<{ $isActive: any }>`
  margin: 10px;
  height: 45px;
  width: 250px;
  font-size: 20px;

  background-color: ${(prop) => (prop.$isActive ? "#0c7edc" : "#111111")};
  color: ${(prop) => (prop.$isActive ? "#000" : "#fff")};
  font-weight: ${(p) => (p.$isActive ? "bolder" : 400)};
  cursor: pointer;

  overflow: auto;

  @media (max-width: 480px) {
    width: max-content;
    font-size: 15px;
    border-radius: 10%;
    border-style: none;
  }

  @media screen and (min-width: 1024px) {
    width: 150px;
    font-size: 15px;
    border-radius: 5%;
    border-style: none;
  }

  @media screen and (min-width: 1565px) {
    width: 150px;
    font-size: 15px;
  }

  &:hover {
    background-color: #0c7edc;
  }
`;
export const BtnsAddMore = styled.button`
  background-color: #111111;
  color: #fff;
  height: 30px;
  margin-left: 20px;
  width: 30px;
  cursor: pointer;
`;

export const BtnsAdd = styled.button`
  background-color: #111111;
  color: #fff;
  height: 35px;
  margin-top: 15px;
  width: 150px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
`;
